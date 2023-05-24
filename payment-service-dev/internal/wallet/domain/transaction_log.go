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

type TransactionLog struct { // để làm việc với backend
	Id             string
	TransactionId  string
	Action         TransactionLogAction // thuộc dạng transaction nào: thêm xóa sửa ... //cái sẽ khác transaction log
	Changes        interface{}          // cái khác giữa 2 transactionLog
	CreatorInfo    *CreatorInfo         // thông tin người tạo thực hiện transaction đó
	oldTransaction *Transaction         // thông tin transaction cũ //  // cái khác giữa 2 transactionLog
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
	cloneTx := new(Transaction)                   // tạo clone ra để tránh bị tham chiếu về 1 transaction
	err := helpers.DeepCopy(transaction, cloneTx) // check xem clone có giống với bản gốc không - giống tức là clone được rồi
	if err == nil {                               // giống thì gán oldTransaction bằng bản clone
		transactionLog.oldTransaction = cloneTx
	}

	if creator != nil { // nếu có creator thì set up vào trong transitionLog
		transactionLog.CreatorInfo = creator
	}

	return transactionLog, nil
}
