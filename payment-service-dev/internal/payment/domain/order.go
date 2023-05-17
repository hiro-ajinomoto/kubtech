package domain

type OrderStatus int

const (
	OrderStatus_ORDER_STATUS_INVALID         OrderStatus = 0
	OrderStatus_ORDER_STATUS_CREATED         OrderStatus = 1
	OrderStatus_ORDER_STATUS_PAID_SUCCESSFUL OrderStatus = 2
	OrderStatus_ORDER_STATUS_PAID_FAILED     OrderStatus = 3
	OrderStatus_ORDER_STATUS_CANCELLED       OrderStatus = 4
	OrderStatus_ORDER_STATUS_IN_PROGRESS     OrderStatus = 5
)

const (
	ServiceNameWallet string = "wallet"
)
