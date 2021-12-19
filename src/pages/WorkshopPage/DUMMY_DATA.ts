export const DUMMY_ATELIER_DATA = {
  atelierId: 1,
  intro: '도자기 만드는 공방입니다!',
  name: '그렙 공방',
  imageUrl: 'https://i.pinimg.com/564x/d0/c4/1b/d0c41b2734aa37dd363f4cc9ebf8ff90.jpg',
  address: '서울시 송파구 송파로 23길 1',
  callNo: '021112222',
  startTime: '10:00',
  endTime: '22:00',
};

export const DUMMY_FEED_DATA = {
  totalCount: 20,
  pageIndex: 0,
  pageSize: 10,
  hasNext: true,
  post: [
    {
      postId: 1,
      imageUrl: 'https://i.pinimg.com/564x/4c/f4/fd/4cf4fd239962a89e05b455b7fe031ba9.jpg',
      createdAt: '',
    },
    {
      postId: 2,
      imageUrl: 'https://i.pinimg.com/736x/07/b3/03/07b3030911e4b14b38c15868c6b443d4.jpg',
      createdAt: '',
    },
    {
      postId: 3,
      imageUrl: 'https://i.pinimg.com/564x/07/b9/90/07b9901d8c3579c98de1a2f12ab3b7b8.jpg',
      createdAt: '',
    },
    {
      postId: 4,
      imageUrl: 'https://i.pinimg.com/736x/56/f6/ef/56f6ef016dc85b56f53ba31143292445.jpg',
      createdAt: '',
    },
  ],
};

// https://backend-devcourse.notion.site/cbf7db08c6ae437b904d594dc92a8219
export const DUMMY_CLASS_DATA = {
  totalCount: 10,
  pageIndex: 0,
  oneDayClass: [
    {
      classId: 1,
      name: '네온싸인 무드등 만들기',
      intro: '네온싸인 무드등 만들기 클래스 입니다~!',
      imageUrl: 'https://i.pinimg.com/564x/be/a9/c2/bea9c2a76982db5659f7f20c1bf58a7d.jpg',
    },
    {
      classId: 2,
      name: '나만의 도자기 만들기',
      intro: '도자기 클래스 입니다~!',
      imageUrl: 'https://i.pinimg.com/564x/4c/f4/fd/4cf4fd239962a89e05b455b7fe031ba9.jpg',
    },
    {
      classId: 3,
      name: '네온싸인 무드등 만들기',
      intro: '네온싸인 무드등 만들기 클래스 입니다~!',
      imageUrl: 'https://i.pinimg.com/564x/d8/50/65/d850650e500684c42ffc423fc59212f7.jpg',
    },
    {
      classId: 4,
      name: '나만의 술잔 만들기',
      intro: '도예 클래스 입니다~!',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ],
  hasNext: false,
};

//https://backend-devcourse.notion.site/5993a2d2ff5642889a592841cde56dcd
export const DUMMY_REVIEW_DATA = {
  totalCount: 15,
  pageIndex: 1,
  hasNext: false,
  averageScore: 5,
  reviews: [
    {
      reviewId: 1,
      title: '아주 재밌어용',
      content: '시간 가는줄 몰랐네요',
      createdAt: '2021-11-30 22:00:00',
      score: 5,
      images: [
        {
          imageUrl: 'https://i.pinimg.com/736x/fc/a6/50/fca650c2d7a6b2b60af597fa5ecbd345.jpg',
          sequence: 1,
        },
        {
          imageUrl: 'https://i.pinimg.com/750x/47/e2/2c/47e22cc957f2af32134045cde0d08fdc.jpg',
          sequence: 2,
        },
        {
          imageUrl: 'https://i.pinimg.com/736x/9b/87/c0/9b87c084ec59d855d7eee55444d8ef59.jpg',
          sequence: 3,
        },
        {
          imageUrl:
            'https://item.kakaocdn.net/do/58119590d6204ebd70e97763ca933bafa88f7b2cbb72be0bdfff91ad65b168ab',
          sequence: 4,
        },
      ],
      member: {
        memberId: 1,
        name: '박연수',
        imageUrl: 'https://i.pinimg.com/736x/ae/f0/78/aef078234c8e2a4914c648814dc3a01f.jpg',
      },
    },
    {
      reviewId: 2,
      title: '재밌어요',
      content: '아주 굳굳',
      createdAt: '2021-11-30 22:00:00',
      score: 5,
      images: [
        {
          imageUrl: 'https://i.pinimg.com/564x/14/f6/b2/14f6b25516de14b94e64e01422818fa4.jpg',
          sequence: 1,
        },
        {
          imageUrl: 'https://i.pinimg.com/736x/b9/0f/16/b90f16d881dc88896657ad3399724e2d.jpg',
          sequence: 2,
        },
      ],
      member: {
        memberId: 2,
        name: '김지훈',
        imageUrl: 'https://i.pinimg.com/564x/3b/6d/52/3b6d52c6bdcbf0b01bb5d9c3d3b31a62.jpg',
      },
    },
    {
      reviewId: 3,
      title: '아주 재밌어용',
      content: '시간 가는줄 몰랐네요',
      createdAt: '2021-11-30 22:00:00',
      score: 5,
      images: [
        {
          imageUrl: 'https://via.placeholder.com/150',
          sequence: 1,
        },
        {
          imageUrl: 'https://via.placeholder.com/150',
          sequence: 2,
        },
      ],
      member: {
        memberId: 1,
        name: '박연수',
        imageUrl: 'https://via.placeholder.com/150',
      },
    },
  ],
};
