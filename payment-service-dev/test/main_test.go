package test

import (
	"context"
	"fmt"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/adapter/mongodb"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"

	"os"
	"testing"

	commonMongo "gitlab.bcasia.io/thuynga/apps/common/adapter/mongodb"
	"go.mongodb.org/mongo-driver/bson"
)

var (
	database   commonMongo.DB
	repository *mongodb.Repository
)

func TestMain(m *testing.M) {
	logger.Setup("testing")
	cfg, err := config.New()
	if err != nil {
		logger.Fatal(err)
	}

	database, err = commonMongo.New(&commonMongo.Config{
		WriteURL: cfg.DBWriteURL,
		ReadURL:  cfg.DBReadURL,
		Database: cfg.DBName,
	})
	repository = mongodb.NewRepository(database)

	setup()
	code := m.Run()
	teardown()

	os.Exit(code)
}

func setup() {
	fmt.Println("============> Setup for testing <============")
	// clear data
	// clearAll()

	// create test data
	// createSponsorLevelData()
}

func teardown() {
	fmt.Println("============> Teardown <============")

	// clear test data
	clearAll()
}

func clearAll() {
	_, err := database.GetCollection(context.Background(), "sponsor_level").DeleteMany(context.Background(), bson.D{})
	if err != nil {
		logger.Error(err)
	}

}
