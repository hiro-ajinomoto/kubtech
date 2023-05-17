package event

import (
	pb "gitlab.bcasia.io/thuynga/apps/api/gen/go/event/mobile"
)

func MobilePubliclistEventsResponse() *pb.PublicListEventsRes {
	return &pb.PublicListEventsRes{
		Items: []*pb.EventListInfo{
			{
				Hashtags:       []string{"pbn136", "hashtag1"},
				EventImageUrls: []string{"https://storage-dev.tixlabs.io/tmp/pbn136.png"},
			},
		},
	}
}

func MobilePublicRetrieveEventResponse() *pb.PublicRetrieveEventRes {
	return &pb.PublicRetrieveEventRes{
		Info: &pb.Event{
			Id:               "6438cad726db02a4edd72a00",
			Name:             "Paris By Night 136 ",
			Code:             "PBN136",
			Duration:         19800000,
			IsHot:            true,
			IsPublic:         true,
			Description:      "PBN 136 description",
			PriceDescription: "Chi tu 160 USD",
			ProgramImageUrls: []string{
				"https://storage-dev.tixlabs.io/tmp/Image.png",
				"https://storage-dev.tixlabs.io/tmp/seatmap.png",
			},
			EventImageUrls:   []string{"https://storage-dev.tixlabs.io/tmp/pbn136.png"},
			Hashtags:         []string{"pbn136", "hashtag1"},
			BookingStartTime: 1681542032,
			BookingEndTime:   1684134032,
			Location: &pb.EventLocationInfo{
				Id:           "642aa5242d8eed04befd756b",
				Name:         "Bangkok",
				Coordination: "10.812880609769394, 106.66561990873575",
				Address:      "address 1",
				Country:      "Thailand",
				Timezone:     "Asia/Bangkok",
			},
			Stats: &pb.EventStats{
				StartTime:          1684220432,
				EndTime:            1684393232,
				Status:             pb.EventStatus_EVENT_DISPLAY_STATUS_ON_SALE, //pb.EventStatus(2)
				NumberOfSeat:       10000,
				IsSoldOut:          false,
				IsBookingAvailable: true,
			},
			Artists: []*pb.ArtistInfo{
				{
					Id:     "6426bdbced4e22f335ca9b04",
					Name:   "Dương Triệu Vũ",
					Roles:  []string{"Ca sĩ"},
					Intro:  "Dương Triệu Vũ tên thật Võ Nguyễn Tuấn Linh là một nam ca sĩ người Việt Nam. Anh là ca sĩ trong chương trình biểu diễn được cộng đồng người Việt hải ngoại ưa chuộng: Paris By Night. Trong chương trình \"Ơn giời cậu đây rồi!\", chính danh hài Hoài Linh đã khẳng định mình là anh ruột của Dương Triệu Vũ",
					Avatar: "https://storage-dev.tixlabs.io/event/artist/1680260296943954866_Screen Shot 2023-03-30 at 10.18.24 AM.png",
					ContactUrls: []*pb.Url{
						{
							Label: "facebook",
							Url:   "https://www.facebook/duongtrieuvu",
						},
					},
				},
			},
			Sponsors: []*pb.EventSponsor{
				{
					Rank: "Kim Cuong",
					Sponsor: &pb.SponsorInfo{
						Id:     "64367efb1171a8c8c0e54981",
						Name:   "Tan Hiep Phat",
						Avatar: "https://storage-dev.tixlabs.io/event/sponsor/1681206633657185530_1.jpg",
						Intro:  "",
						ContactUrls: []*pb.Url{
							{
								Label: "facebook",
								Url:   "https://www.facebook/tanhiepphat",
							},
						},
					},
				},
			},
			Schedules: []*pb.EventScheduleInfo{
				{
					Id:               "6439210e8db54d53b5e9f4ee",
					Name:             "Show ngày thứ 7",
					IsPublic:         true,
					IsSoldOut:        false,
					StartTime:        1682065904,
					EndTime:          1682065904,
					CheckInStartTime: 1682065904,
					CheckInEndTime:   1682065904,
					SeatMapsIds:      []string{"641950106055afab7972307a"},
				},
			},
			CreatedAt: 1681443543591,
			UpdatedAt: 1681453879830,
		},
	}
}
