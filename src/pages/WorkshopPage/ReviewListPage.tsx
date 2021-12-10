import styled from '@emotion/styled';
import React from 'react';
import { Star } from 'react-feather';
const ReviewListPage = () => {
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
export default ReviewListPage;

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
