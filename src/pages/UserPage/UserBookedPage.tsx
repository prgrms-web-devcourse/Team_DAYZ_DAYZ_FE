import styled from '@emotion/styled';
import React from 'react';

const UserBookedPage = () => {
  return (
    <UserBookedPageWrapper>
      <BookedLists>
        <BookedItem>
          <ProductName>크리스마스 트리 만들기 클래스</ProductName>
          <ProductDateData>
            <ProductDate>2021.12.02</ProductDate>
            <ProductDay>(화)</ProductDay>
            <ProductTime>오후 3:00</ProductTime>
          </ProductDateData>
          <CancelButton>취소하기</CancelButton>
        </BookedItem>
        <BookedItem>
          <ProductName>하룻동안 방탄 되어보기</ProductName>
          <ProductDateData>
            <ProductDate>2021.12.03</ProductDate>
            <ProductDay>(수)</ProductDay>
            <ProductTime>오후 6:00</ProductTime>
          </ProductDateData>
          <ReviewButton>후기 남기기</ReviewButton>
        </BookedItem>
      </BookedLists>
    </UserBookedPageWrapper>
  );
};
const UserBookedPageWrapper = styled.section``;
const BookedLists = styled.ul``;
const BookedItem = styled.li`
  border: solid 1px #c4c4c4;
  border-radius: 16px;
  margin: 20px;
  padding: 30px 20px;
`;
const ProductName = styled.h4`
  font-size: 24px;
  font-weight: 600;
`;
const ProductDateData = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`;
const ProductDate = styled.div`
  font-size: 20px;
  margin-right: 5px;
`;
const ProductDay = styled.div`
  font-size: 20px;
  margin-right: 5px;
`;
const ProductTime = styled.div`
  font-size: 20px;
`;

const CancelButton = styled.button`
  font-size: 24px;
  font-weight: 600;
  background-color: #b88bd6;
  color: #f5f5f5;
  border: none;
  width: 50%;
  margin: 20px 25% 0px 25%;
  padding: 15px;
  border-radius: 15px;
`;

const ReviewButton = styled.button`
  font-size: 24px;
  font-weight: 600;
  background-color: #a8bac8;
  color: #f5f5f5;
  border: none;
  width: 50%;
  margin: 20px 25% 0px 25%;
  padding: 15px;
  border-radius: 15px;
`;
export default UserBookedPage;
