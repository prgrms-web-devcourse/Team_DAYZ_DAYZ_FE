export const CLASS_DUMMY = {
  success: true,
  serverDateTime: '2021-11-05T16:55:37.436056',
  data: {
    aterilerId: 1,
    name: '네온싸인 무드등 만들기',
    intro: '재미있는 네온싸인 무드등 만들기 클래스입니다~!',
    categoryName: '네온싸인 공예',
    avgScore: 4.5,
    maxPeopleNumber: 5,
    price: 12000,
    curricurums: [
      {
        curricurumId: 1,
        step: 1,
        content: '원하는 스케치를 준비한다.',
      },
      {
        curricurumId: 2,
        step: 2,
        content: '스케치를 원판에 붙인다.',
      },
      {
        curricurumId: 3,
        step: 3,
        content: '스케치 데로 네온싸인 선을 붙인다.',
      },
    ],
    images: [
      {
        imageUrl:
          'https://img.huffingtonpost.com/asset/5ddccb122500009927d2e337.jpeg?cache=GqM9tE6Yr9&ops=1200_630',
        sequence: 1,
      },
      {
        imageUrl:
          'https://img.huffingtonpost.com/asset/5ddccb122500009927d2e337.jpeg?cache=GqM9tE6Yr9&ops=1200_630',
        sequence: 2,
      },
    ],
    aterier: {
      atelierId: 1,
      name: '흑우는 검소해',
      callNo: '010-2345-2345',
      startTime: '0900',
      endTime: '1900',
      imageUrl: 's3://devrun-image/KakaoTalk_20210616_220854417.jpg',
    },
  },
};

export const REVIEW_DUMMY = {
  success: true,
  serverDateTime: '2021-12-05T16:50:37.436090',
  data: {
    totalCount: 3,
    pageIndex: 1,
    review: [
      {
        reviewId: 1,
        title: '아주 재밌어용',
        content: '시간 가는줄 몰랐네요',
        createdAt: '2021-11-30 22:00:00',
        score: 5,
        image: [
          {
            imageUrl:
              'https://item.kakaocdn.net/do/58119590d6204ebd70e97763ca933baf41d1a2caccd0c566eab28b91e2e5d306',
            sequence: 1,
            member: {
              memberId: 1,
              name: '박연수',
              imageUrl:
                'https://item.kakaocdn.net/do/58119590d6204ebd70e97763ca933baf41d1a2caccd0c566eab28b91e2e5d306',
            },
          },
          {
            imageUrl:
              'https://item.kakaocdn.net/do/58119590d6204ebd70e97763ca933baf41d1a2caccd0c566eab28b91e2e5d306',
            sequence: 1,
            member: {
              memberId: 2,
              name: '김지훈',
              imageUrl:
                'https://item.kakaocdn.net/do/58119590d6204ebd70e97763ca933baf41d1a2caccd0c566eab28b91e2e5d306',
            },
          },
        ],
      },
      {
        reviewId: 2,
        title: '재밌어요',
        content: '아주 굳굳',
        createdAt: '2021-11-30 22:00:00',
        score: 5,
        image: [
          {
            imageUrl:
              'https://item.kakaocdn.net/do/58119590d6204ebd70e97763ca933baf41d1a2caccd0c566eab28b91e2e5d306',
            sequence: 1,
            member: {
              memberId: 2,
              name: '김지훈',
              imageUrl:
                'https://item.kakaocdn.net/do/58119590d6204ebd70e97763ca933baf41d1a2caccd0c566eab28b91e2e5d306',
            },
          },
          {
            imageUrl:
              'https://item.kakaocdn.net/do/58119590d6204ebd70e97763ca933baf41d1a2caccd0c566eab28b91e2e5d306',
            sequence: 1,
            member: {
              memberId: 1,
              name: '박연수',
              imageUrl:
                'https://item.kakaocdn.net/do/58119590d6204ebd70e97763ca933baf41d1a2caccd0c566eab28b91e2e5d306',
            },
          },
        ],
      },
    ],
  },
};
