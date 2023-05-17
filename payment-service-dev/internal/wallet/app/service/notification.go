package service

type NotificationService interface {
	SendNotificationTopUpSuccessFully(userId, transactionId string, amount float64, pointName string) error
	SendNotificationTopUpFailed(userId, transactionId string) error
}
