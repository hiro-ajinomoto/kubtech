package domain

const (
	ServiceName = "wallet"
)
const (
	DefaultFund = "WALLET"
)

type Wallet struct { // common struct should be return in all api
	Id            string
	UserId        string
	PartnershipId string
	Balance       float64
}
