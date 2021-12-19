export const DUMMY_ATELIER_DATA = {
  atelierId: 1,
  intro: '내 공방을 소개하지',
  name: '이구역최강자',
  imageUrl: 'https://via.placeholder.com/150',
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
      postId: 0,
      imageUrl: 'https://via.placeholder.com/150',
      createdAt: '',
    },
    {
      postId: 1,
      imageUrl: 'https://via.placeholder.com/150',
      createdAt: '',
    },
    {
      postId: 2,
      imageUrl: 'https://via.placeholder.com/150',
      createdAt: '',
    },
    {
      postId: 3,
      imageUrl: 'https://via.placeholder.com/150',
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
      name: '킹왕짱클래스',
      imageUrl: 'https://picsum.photos/id/1/200/300',
    },
    {
      classId: 2,
      name: '짱클래스짱',
      imageUrl: 'https://picsum.photos/id/1/200/300',
    },
    {
      classId: 3,
      name: '짱클래스짱',
      imageUrl: 'https://picsum.photos/id/1/200/300',
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
          imageUrl: 'https://via.placeholder.com/150',
          sequence: 1,
        },
        {
          imageUrl: 'https://via.placeholder.com/150',
          sequence: 2,
        },
        {
          imageUrl: 'https://via.placeholder.com/150',
          sequence: 3,
        },
        {
          imageUrl: 'https://via.placeholder.com/150',
          sequence: 4,
        },
      ],
      member: {
        memberId: 1,
        name: '박연수',
        imageUrl: 'https://via.placeholder.com/150',
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
          imageUrl: 'https://via.placeholder.com/150',
          sequence: 1,
        },
        {
          imageUrl: 'https://via.placeholder.com/150',
          sequence: 2,
        },
      ],
      member: {
        memberId: 2,
        name: '김지훈',
        imageUrl: 'https://via.placeholder.com/150',
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
