import styled from '@emotion/styled';
import React from 'react';
import { Star } from 'react-feather';

const UserReviewPage = () => {
  return (
    <UserReviewPageWrapper>
      <ReviewLists>
        <ReviewItem>
          <ReviewItemTitle>하루만에 방탄되기</ReviewItemTitle>
          <ReviewItemContent>
            아아아아아아아아아아앙ㅇ아아아아ㅏ아아아아ㅏ아아아아아아아아아ㅏ아아
          </ReviewItemContent>
          <ReviewItemInfo>
            <ReviewStars>
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
            </ReviewStars>
            <ReviewDate>2021-11-30</ReviewDate>
          </ReviewItemInfo>
        </ReviewItem>
      </ReviewLists>
    </UserReviewPageWrapper>
  );
};
const UserReviewPageWrapper = styled.section``;
const ReviewLists = styled.ul``;
const ReviewItem = styled.li`
  border: solid 1px #c4c4c4;
  border-radius: 16px;
  margin: 20px;
  padding: 10px;
`;
const ReviewItemTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const ReviewItemContent = styled.div`
  font-size: 16px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const ReviewItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const ReviewStars = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ReviewDate = styled.div`
  font-size: 13px;
`;
export default UserReviewPage;
