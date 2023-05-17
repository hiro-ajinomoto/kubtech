package domain

import (
	"github.com/r3labs/diff/v3"
	"gitlab.bcasia.io/thuynga/apps/common/middleware/device"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/helpers"
)

type TransactionLogAction string

const (
	TransactionLogActionCreate TransactionLogAction = "create"
	TransactionLogActionUpdate TransactionLogAction = "update"
)

type TransactionLog struct {
	Id             string
	TransactionId  string
	Action         TransactionLogAction
	Changes        interface{}
	CreatorInfo    *CreatorInfo
	oldTransaction *Transaction
}

type CreatorInfo struct {
	UserId     string
	DeviceInfo *device.MDeviceInfo
	ClientIp   string
}

func (t *TransactionLog) TransactionUpdated(updatedTransaction *Transaction) {
	changelog, err := diff.Diff(t.oldTransaction, updatedTransaction)
	if err == nil && len(changelog) > 0 {
		t.Action = TransactionLogActionUpdate
		t.Changes = changelog
	}
}

func NewTransactionLog(
	transaction *Transaction,
	creator *CreatorInfo,
) (*TransactionLog, error) {
	transactionLog := &TransactionLog{
		TransactionId: transaction.Id,
		Action:        TransactionLogActionCreate,
	}
	cloneTx := new(Transaction)
	err := helpers.DeepCopy(transaction, cloneTx)
	if err == nil {
		transactionLog.oldTransaction = cloneTx
	}

	if creator != nil {
		transactionLog.CreatorInfo = creator
	}

	return transactionLog, nil
}
