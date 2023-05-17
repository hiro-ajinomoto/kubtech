package domain

const (
	ServiceName = "wallet"
)
const (
	DefaultFund = "WALLET"
)

type Wallet struct {
	Id            string
	UserId        string
	PartnershipId string
	Balance       float64
}
