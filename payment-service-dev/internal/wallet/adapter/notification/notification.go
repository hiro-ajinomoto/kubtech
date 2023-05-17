package notification

import (
	"context"
	"encoding/json"
	"fmt"
	"strconv"

	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"

	"gitlab.bcasia.io/thuynga/apps/common/i18n"
	"gitlab.bcasia.io/thuynga/apps/common/logger"

	commonRabbitMQ "gitlab.bcasia.io/thuynga/apps/common/adapter/rabbitmq"
	commonConstants "gitlab.bcasia.io/thuynga/apps/common/constants"
	commonSchemas "gitlab.bcasia.io/thuynga/apps/common/schemas"
)

type NotificationService struct {
	cfg *config.Schema
	mq  commonRabbitMQ.MQ
}

func New(cfg *config.Schema, mq commonRabbitMQ.MQ) *NotificationService {
	if mq == nil {
		panic("nil mq")
	}

	return &NotificationService{
		cfg: cfg,
		mq:  mq,
	}
}

func (n *NotificationService) SendNotificationTopUpSuccessFully(userId, transactionId string, amount float64, pointName string) error {
	logger.Infof("[SendNotificationTopUpSuccessFully] user id: %s", userId)

	ctx := context.Background()
	data := &commonSchemas.NotificationData{
		Recipients: []string{userId},
		Type:       commonConstants.NotificationTypePush,
		Action:     commonConstants.NotificationWalletTopUpSuccessfully,
		Payload: &commonSchemas.NotificationPayload{
			Title: i18n.Translate(ctx, "NOTIFICATION_TOP_UP_SUCCESSFULLY_TITLE"),
			Message: i18n.Translate(ctx, "NOTIFICATION_TOP_UP_SUCCESSFULLY_MESSAGE",
				i18n.LocalizerKV{
					Key:   "top_up_amount",
					Value: strconv.Itoa(int(amount)),
				},
				i18n.LocalizerKV{
					Key:   "point_name",
					Value: pointName,
				},
			),
			Data: map[string]string{
				"transactionId": transactionId,
			},
			Image: fmt.Sprintf("%s/assets/notif/fi_file-text.png", n.cfg.StorageBaseURL),
		},
		IsPersistence: true,
	}

	bData, err := json.Marshal(data)
	if err != nil {
		logger.Errorf("[SendNotificationTopUpSuccessFully] Marshal err: %v", err)
		return err
	}

	return n.mq.PushRawMessage(config.NotificationExchangeName, config.NotificationMulticastKey, bData)
}

func (n *NotificationService) SendNotificationTopUpFailed(userId, transactionId string) error {
	logger.Infof("[SendNotificationTopUpFailed] user id: %s", userId)

	ctx := context.Background()
	data := &commonSchemas.NotificationData{
		Recipients: []string{userId},
		Type:       commonConstants.NotificationTypePush,
		Action:     commonConstants.NotificationWalletTopUpFailed,
		Payload: &commonSchemas.NotificationPayload{
			Title: i18n.Translate(ctx, "NOTIFICATION_TOP_UP_FAILED_TITLE"),
			Message: i18n.Translate(
				ctx,
				"NOTIFICATION_TOP_UP_FAILED_MESSAGE",
				i18n.LocalizerKV{Key: "transaction_id", Value: transactionId},
			),
			Data: map[string]string{
				"transactionId": transactionId,
			},
			Image: fmt.Sprintf("%s/assets/notif/fi_file-text.png", n.cfg.StorageBaseURL),
		},
		IsPersistence: true,
	}

	bData, err := json.Marshal(data)
	if err != nil {
		logger.Errorf("[SendNotificationTopUpFailed] Marshal err: %v", err)
		return err
	}
	logger.Infof("[SendNotificationTopUpFailed] push msg: %s", string(bData))
	return n.mq.PushRawMessage(config.NotificationExchangeName, config.NotificationMulticastKey, bData)
}

func (n *NotificationService) SendNotifyPaymentSuccessFully() {
	//email or sms
	//push notification
}
