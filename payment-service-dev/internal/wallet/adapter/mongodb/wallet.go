package mongodb

import (
	"context"
	"fmt"

	"gitlab.bcasia.io/thuynga/apps/common/adapter/mongodb"
	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Wallet struct {
	Base          `bson:",inline,omitempty"`
	UserId        string  `bson:"user_id"`
	PartnershipId string  `bson:"partnership_id"`
	Balance       float64 `bson:"balance"`
}

// which implement DB interface
func (r Repository) CreateWallet(ctx context.Context, w *domain.Wallet) (*domain.Wallet, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.CreateWallet")
	defer span.End()
	wallet := FromWalletDomain(w)
	wallet.BeforeCreate()

	err := r.db.Insert(ctx, walletCollectionName, wallet)

	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}
	return ToWalletDomain(wallet), nil
}

func (r Repository) UpdateWallet(ctx context.Context, w *domain.Wallet) (*domain.Wallet, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.UpdateWallet")
	defer span.End()
	wallet := FromWalletDomain(w)
	wallet.BeforeUpdate()

	err := r.db.UpdateOne(
		ctx,
		walletCollectionName,
		bson.M{
			"user_id": w.UserId,
		},
		wallet,
		&options.UpdateOptions{
			Hint: IndexWalletUserId,
		},
	)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error("UpdateWallet error", err)
		return nil, err
	}
	return ToWalletDomain(wallet), nil
}

func (r Repository) GetOrCreateWalletByUserId(ctx context.Context, userId, partnershipId string) (*domain.Wallet, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.GetOrCreateWalletByUserId")
	defer span.End()

	var wallet Wallet
	filter := bson.M{
		"user_id":        userId,
		"partnership_id": partnershipId,
	}
	opts := []mongodb.Option{
		mongodb.WithHint(IndexWalletUserId),
		mongodb.WithFilter(filter),
	}

	err := r.db.FindOne(ctx, walletCollectionName, &wallet, opts...)

	if err == mongo.ErrNoDocuments { //???
		newWallet, err := r.CreateWallet(ctx, &domain.Wallet{
			UserId:        userId,
			PartnershipId: partnershipId,
			Balance:       0,
		})
		if err != nil {
			tracing.TraceErr(span, err)
			return nil, err
		}
		return newWallet, nil
	}
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	return ToWalletDomain(&wallet), nil
}

func (r Repository) WalletEarning(ctx context.Context, userId, partnershipId string, amount float64) (*domain.Wallet, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.WalletEarning")
	defer span.End()

	w, err := r.GetOrCreateWalletByUserId(ctx, userId, partnershipId)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}
	w.Balance += amount
	w, err = r.UpdateWallet(ctx, w)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}
	logger.Infof("User %s earned %f points", userId, amount)
	return w, nil

}
func (r Repository) WalletSpending(ctx context.Context, userId, partnershipId string, amount float64) (bool, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.WalletSpending")
	defer span.End()

	w, err := r.GetOrCreateWalletByUserId(ctx, userId, partnershipId) // lấy wallet bằng userId
	if err != nil {
		tracing.TraceErr(span, err)
		return false, err
	}
	if w.Balance < amount { // nếu tiền trong ví < tiền cần trả, log lõi tiền không đủ
		return false, fmt.Errorf("INSUFFICIENT_FUNDS")
	}
	filter := bson.M{
		"user_id":        userId,
		"partnership_id": partnershipId,
		"balance": bson.M{
			"$gte": amount,
		},
	}
	update := bson.M{
		"balance": w.Balance - amount, // cập nhật lại tiền trong ví
	}

	var wallet Wallet
	err = r.db.FindOneAndUpdate( // thao tác trên db
		ctx,
		walletCollectionName,
		filter,
		update,
		&options.FindOneAndUpdateOptions{
			Hint: IndexWalletUserId,
		},
		&wallet,
	)
	// lõi thì tracing và log lỗi không đủ tiền thừa
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		if err == mongo.ErrNoDocuments {
			return false, fmt.Errorf("INSUFFICIENT_FUNDS")
		}
		return false, err
	}
	logger.Infof("User %s spent %f points", userId, amount) // log  lỗi user đã sủ dụng điểm
	return true, nil

}

func (r Repository) GetWalletBalanceByUserId(ctx context.Context, userId, partnershipId string) (float64, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.GetWalletBalanceByUserId")
	defer span.End()

	var wallet Wallet
	filter := bson.M{
		"user_id":        userId,
		"partnership_id": partnershipId,
	}
	opts := []mongodb.Option{
		mongodb.WithHint(IndexWalletUserId),
		mongodb.WithFilter(filter),
	}

	err := r.db.FindOne(ctx, walletCollectionName, &wallet, opts...)

	if err == mongo.ErrNoDocuments { // if user has no wallet, create new wallet
		newWallet, err := r.CreateWallet(ctx, &domain.Wallet{
			UserId:        userId,
			PartnershipId: partnershipId,
			Balance:       0,
		})
		if err != nil {
			tracing.TraceErr(span, err)
			return 0, err
		}
		return newWallet.Balance, nil
	}
	if err != nil {
		tracing.TraceErr(span, err)
		return 0, err
	}

	return wallet.Balance, nil
}
