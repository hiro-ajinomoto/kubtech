package command

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
)

type PayRepo interface {
	GetWalletBalanceByUserId(ctx context.Context, userId, partnershipId string) (float64, error)
	WalletSpending(ctx context.Context, userId, partnershipId string, quantity float64) (bool, error)
	CreateTransaction(ctx context.Context, t *domain.Transaction) (*domain.Transaction, error)
	CreateTransactionLog(ctx context.Context, t *domain.TransactionLog) (*domain.TransactionLog, error)
	UpdateTransaction(ctx context.Context, t *domain.Transaction) (*domain.Transaction, error)
}

type Pay struct {
	UserId        string
	PartnershipId string
	Amount        float64
	CurrencyCode  string
	ServiceRefId  string
	ServiceName   string
	Description   string
	AppLang       string
}

type PayHandler struct {
	cfg  *config.Schema
	repo PayRepo
}

func NewPayHandler(cfg *config.Schema, repo PayRepo) PayHandler {
	if repo == nil {
		panic("nil PayRepo")
	}
	return PayHandler{
		cfg:  cfg,
		repo: repo,
	}
}

// mục đích chính của hàm handle này -> violte single responsibility principle
// tạo 1 document transaction trên database
// tạo 1 document transactionLog trên database
// 2 luồng hoạt động cùng không đồng bộ
// / cập nhật lại tiền của khách hàng trong ví
func (h *PayHandler) Handle(ctx context.Context, cmd Pay) (*domain.Transaction, error) {

	ctx, span := tracing.StartSpanFromContext(ctx, "PayHandler.Handle")
	defer span.End()
	if cmd.Amount <= 0 {
		return nil, domain.ErrInvalidPayAmount
	}

	payPointAmount, err := h.cfg.PointFromCurrency(cmd.Amount, cmd.CurrencyCode)

	if err != nil {
		logger.Error("Invalid exchange point 1, error: %v", err)
		return nil, domain.ErrUnsupportedCurrency
	}

	balance, err := h.repo.GetWalletBalanceByUserId(ctx, cmd.UserId, cmd.PartnershipId)

	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}
	if balance < payPointAmount {
		return nil, domain.ErrInsufficientFunds
	}

	transaction := domain.NewPayTransaction( // create domain.transaction with specific transaction metadata and new txtId payTransaction
		cmd.UserId,
		cmd.PartnershipId,
		payPointAmount,
		cmd.ServiceName,
		cmd.ServiceRefId,
		balance,
		cmd.Description,
	)

	// domain.transaction để làm việc phía back end
	// (adapter).transaction để làm việc vói phía databse
	// vì vậy sẽ thấy các hàm thao tác để chuyển đổi qua lại giữa 2 type này
	transaction, err = h.repo.CreateTransaction(ctx, transaction) // chuyển đổi domain.transaction thành adapter transaction rồi create document and trả về domain.transaction
	if err != nil {                                               // có lỗi thì tracing và return nil
		tracing.TraceErr(span, err)
		logger.Error(err)
		return nil, err
	}
	// không có lỗi thì khởi tạo domain.transactionLog để làm việc với backend// cái này không create transactionlog document trên databse
	transactionLog, _ := domain.NewTransactionLog(transaction, nil)

	go func() {
		h.repo.CreateTransactionLog(ctx, transactionLog) // làm việc với databse// cái này với create transactionlog document trên databse
	}()
	// defer func() {
	// 	transactionLog.TransactionUpdated(transaction)
	// 	h.repo.CreateTransactionLog(ctx, transactionLog)
	// }()
	//--
	// done with create document
	//--------------------------------------------------------------------------------------------------------------------------------
	isOk, err := h.repo.WalletSpending(ctx, cmd.UserId, cmd.PartnershipId, payPointAmount) // check xem có pay được không, và nếu được thì trừ tiền trong ví của khách, (cập nhật lại trong database)

	//TODO push notification to user
	if err != nil { // có lỗi
		tracing.TraceErr(span, err) // trace lỗi
		logger.Error(err)
		failureReason := domain.TransactionFailureReasonUnknown // trả về lỗi uknonw
		if err.Error() == "INSUFFICIENT_FUNDS" {                // nếu lồi là không đủ tiền thì log lỗi không đủ tiền
			failureReason = domain.TransactionFailureReasonInsufficientFunds
		}
		transaction.Failed(failureReason) // đưa lỗi ail này vào transaction.Failed
		var err2 error
		transaction, err2 = h.repo.UpdateTransaction(ctx, transaction) // cập nhật lại id của transaction trên database
		if err2 != nil {                                               // nếu cập nhật có lỗi-> tracing
			tracing.TraceErr(span, err2)
			logger.Error(err2)
		}
		if err.Error() == "INSUFFICIENT_FUNDS" { // nếu lỗi không đủ tiền, tra về nil,và lỗi không đủ tiền
			return nil, domain.ErrInsufficientFunds
		}
		return nil, err

	}

	if isOk { // nếu pay được thì
		lastBalance, _ := h.repo.GetWalletBalanceByUserId(ctx, cmd.UserId, cmd.PartnershipId) // xem tiền trong ví khách
		transaction.Status = domain.TransactionStatusSuccessful                               // cập nhật status của trasnsaction thành công
		transaction.Metadata.LastBalance = lastBalance                                        // cập nhật lại dữ liệu metadata của transaction
		transaction, err = h.repo.UpdateTransaction(ctx, transaction)                         // cập nhật transaction trên database
		if err != nil {                                                                       //update transaction có lỗi thì trace và
			tracing.TraceErr(span, err)
			logger.Error(err)
			return nil, err
		}
	}

	defer func() { // mục đích của cái defer này là tạo 1 cái transacitonLog cập nhật lên database
		transactionLog.TransactionUpdated(transaction)   //thay đổi transactionLog (domain) để tạo updatedTransactionUpdated trên database
		h.repo.CreateTransactionLog(ctx, transactionLog) // tạo thêm 1 transactionLog sau khi giao dịch (kể cả thành công hay thất bại)
	}()
	// nghĩa là 1 transaction sẽ có 2 transactionLog, 2 transactionLog khác nhau về transaction (old, updated), action và changeLog
	return transaction, nil
}
