import styled from '@emotion/styled';
import React from 'react';
import { Star } from 'react-feather';
const ReviewList = () => {
  const DummyData = {
    success: true,
    serverDateTime: '2021-12-05T16:50:37.436090',
    data: {
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
              imageUrl: 'https://picsum.photos/id/1/200/300',
              sequence: 1,
            },
            {
              imageUrl: 's3://devrun-image/KakaoTalk_20210616_220854417.jpg',
              sequence: 2,
            },
          ],
          member: {
            memberId: 1,
            name: '박연수',
            imageUrl: 'https://picsum.photos/id/1/200/300',
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
              imageUrl: 's3://devrun-image/KakaoTalk_20210616_220854417.jpg',
              sequence: 1,
            },
            {
              imageUrl: 's3://devrun-image/KakaoTalk_20210616_220854417.jpg',
              sequence: 2,
            },
          ],
          member: {
            memberId: 2,
            name: '김지훈',
            imageUrl: 's3://devrun-image/KakaoTalk_20210616_220854417.jpg',
          },
        },
      ],
    },
  };

  return (
    <>
      <StarContainer>
        <Star size={36} />
        {DummyData.data ? <span>{DummyData.data.averageScore}</span> : ''}
      </StarContainer>
      <section>
        <ReviewContainer>
          {DummyData.data
            ? DummyData.data.reviews.map((review) => (
                <div key={review.reviewId} className="review">
                  <div className="profile">
                    <img src={review.member.imageUrl} alt="" />
                    <div>
                      <p>{review.member.name}</p>
                      <p>{review.createdAt}</p>
                    </div>
                  </div>
                  <div className="content">
                    <p>{review.title}</p>
                    <p>{review.content}</p>
                  </div>
                  <div className="photos">
                    {review.images
                      ? review.images.map((img) => <img key={img.sequence} src={img.imageUrl} />)
                      : ''}
                  </div>
                </div>
              ))
            : ''}
        </ReviewContainer>
      </section>
    </>
  );
};
export default ReviewList;

const StarContainer = styled.div`
  margin: 24px 36px;
  display: flex;
  align-items: center;
  font-size: 36px;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
  & .review {
    margin: 24px;
    & .profile {
      display: flex;
      align-items: center;
      & img {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        margin-right: 12px;
      }
    }
    & .content {
      font-size: 24px;
      margin: 12px 0;
    }
    & .photos {
      & img {
        width: 100px;
        height: 100px;
        border-radius: 12px;
        margin-right: 12px;
      }
    }
  }
`;

{
  /* <div className="review">
            <div className="profile">
              <img src="https://picsum.photos/id/1/200/300" alt="" />
              <div>
                <p>희진공방</p>
                <p>2021-12-22</p>
              </div>
            </div>
            <div className="content">
              <p>도자기 만들어</p>
            </div>
            <div className="photos">
              <img src="https://picsum.photos/id/1/200/300" alt="" />
              <img src="https://picsum.photos/id/1/200/300" alt="" />
            </div>
          </div> */
}
