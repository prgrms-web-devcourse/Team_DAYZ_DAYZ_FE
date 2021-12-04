import styled from '@emotion/styled';
import React from 'react';
import { Star } from 'react-feather';
const ReviewList = () => {
  return (
    <div>
      <StarContainer>
        <Star size={36} />
        <span>3.7</span>
      </StarContainer>
      <section>
        <ReviewContainer>
          <div className="review">
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
          </div>
        </ReviewContainer>
      </section>
    </div>
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
