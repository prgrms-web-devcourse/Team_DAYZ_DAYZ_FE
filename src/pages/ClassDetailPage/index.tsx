import React from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router';

const ClassDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // 여기서 id 값으로 데이터를 불러온다. api
  // 현재 context안에는 공방인지 유저인지 데이터가 담겨져 있어야 한다.
  // id를 조회하면 class 소개, 별점, 후기, author 항목이 조회가 되어야함.

  const handleClick = () => {
    console.log(1123);
  };

  return (
    <>
      <div>ClassDetailPage {id} 입니다.</div>
      <img src="https://via.placeholder.com/150" />
      <ClassDetailContainer>
        <ClassNameWrapper>
          <div>클래스 이름</div>
          <div>별점 4.0</div>
        </ClassNameWrapper>

        <div>클래스 소개</div>
        <div>커리큘럼</div>
      </ClassDetailContainer>
      <ClassReviewContainer>
        <div>
          후기<span>999+</span>
        </div>
      </ClassReviewContainer>
      <AuthorDetailContainer>
        <div>작가 정보들들...</div>
      </AuthorDetailContainer>
      <ReservationContainer>
        <div>가격</div>
        <ReservationButton>예약하기</ReservationButton>
      </ReservationContainer>
    </>
  );
};
const ClassDetailContainer = styled.div`
  min-height: 100px;
`;
const ClassNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ClassReviewContainer = styled.div`
  min-height: 100px;
`;
const AuthorDetailContainer = styled.div`
  min-height: 100px;
`;
const ReservationContainer = styled.div`
  position: fixed;
  display: flex;
  bottom: 10px;
  right: 10px;
  justify-content: space-between;
`;
const ReservationButton = styled.button`
  height: 56px;
  width: 174px;
  background: linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%);
  border-radius: 15px;
`;

export default ClassDetailPage;
