package mongodb

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

type Base struct {
	Id            primitive.ObjectID `bson:"_id,omitempty"`
	CreatedAt     int64              `bson:"created_at,omitempty"`
	UpdatedAt     int64              `bson:"updated_at,omitempty"`
	CreatedBy     string             `bson:"created_by,omitempty"`
	UpdatedBy     string             `bson:"updated_by,omitempty"`
	PartnershipId string             `bson:"partnership_id,omitempty"`
}

func (b *Base) BeforeCreate() {
	b.Id = primitive.NewObjectID()
	b.CreatedAt = time.Now().UTC().UnixMilli()
	b.UpdatedAt = time.Now().UTC().UnixMilli()
}

func (b *Base) BeforeUpdate() {
	b.UpdatedAt = time.Now().UTC().UnixMilli()
}
