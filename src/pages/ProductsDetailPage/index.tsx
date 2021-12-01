import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { Modal } from '../../components';

const ProductsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [visible, setVisible] = useState(false);

  // 여기서 id 값으로 데이터를 불러온다. api
  // 현재 context안에는 공방인지 유저인지 데이터가 담겨져 있어야 한다.
  // id를 조회하면 class 소개, 별점, 후기, author 항목이 조회가 되어야함.

  return (
    <>
      <div>ProductsDetailPage {id} 입니다.</div>
      <img src="https://via.placeholder.com/150" />

      <ProductsDetailContainer>
        <ProductsNameWrapper>
          <div>클래스 이름</div>
          <div>별점 4.0</div>
        </ProductsNameWrapper>
        <div>클래스 소개</div>
        <div>커리큘럼</div>
      </ProductsDetailContainer>

      <ProductsReviewContainer>
        <div>
          후기<span>999+</span>
        </div>
        <div> 우선 그냥 후기(내용, 날짜?)</div>
        <div onClick={() => setVisible(true)}>+ 후기 더보기</div>
      </ProductsReviewContainer>

      <AuthorDetailContainer>
        <div>작가 정보들들...</div>
        <div>위치 보기</div>
      </AuthorDetailContainer>

      <ReservationContainer>
        <div>가격 45,000</div>
        <ReservationButton>예약하기</ReservationButton>
      </ReservationContainer>

      <Modal visible={visible} onClose={() => setVisible(false)} width={'100%'} height={'70%'}>
        <button onClick={() => setVisible(false)}>Close</button>
        <div>별점</div>
        <ReviewWrapper>후기1</ReviewWrapper>
        <ReviewWrapper>후기2</ReviewWrapper>
        <ReviewWrapper>후기2</ReviewWrapper>
        <ReviewWrapper>후기2</ReviewWrapper>
        <ReviewWrapper>후기2</ReviewWrapper>
        <ReviewWrapper>후기2</ReviewWrapper>
      </Modal>
    </>
  );
};
const ProductsDetailContainer = styled.div`
  min-height: 100px;
`;
const ProductsNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductsReviewContainer = styled.div`
  min-height: 100px;
`;
const AuthorDetailContainer = styled.div`
  min-height: 100px;
`;
const ReservationContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  bottom: 10px;
  justify-content: space-around;
`;
const ReservationButton = styled.button`
  height: 56px;
  width: 174px;
  background: linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%);
  border-radius: 15px;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
`;

const ReviewWrapper = styled.div`
  height: 100px;
  width: 100%;
  background-color: blue;
  margin: 20px 0;
`;
export default ProductsDetailPage;
