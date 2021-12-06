import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { Image, Modal, Text } from '../../components/base';
import { X } from 'react-feather';

const ProductsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [visible, setVisible] = useState(false);

  // 여기서 id 값으로 데이터를 불러온다. api
  // 현재 context안에는 공방인지 유저인지 데이터가 담겨져 있어야 한다.
  // id를 조회하면 class 소개, 별점, 후기, author 항목이 조회가 되어야함.

  return (
    <>
      <Image
        height={'210px'}
        width={'100%'}
        src={'https://i.pinimg.com/564x/eb/02/19/eb021934d0750d0b91ad6d6ff3e4ed84.jpg'}
        alt={'class'}
        mode={'cover'}
        placeholder={'https://via.placeholder.com/150'}
      />

      <ProductsDetailContainer>
        <ProductNameWrapper>
          <HeaderText>클래스 이름</HeaderText>
          <div>별점 4.0</div>
        </ProductNameWrapper>
        <ProductContentWrapper>
          <HeaderText>클래스 소개</HeaderText>
          <div> 랩몬스터와 슈가의 음악감상하기 클래스입니다.</div>
          <div> 랩몬스터와 슈가의 음악감상하기 클래스입니다.</div>
          <div> 랩몬스터와 슈가의 음악감상하기 클래스입니다.</div>
        </ProductContentWrapper>
        <ProductContentWrapper>
          <HeaderText>커리큘럼</HeaderText>
          <div> 우선 춤을 배웁니다.</div>
          <div> 우선 춤을 배웁니다.</div>
          <div> 우선 춤을 배웁니다.</div>
        </ProductContentWrapper>
      </ProductsDetailContainer>

      <ProductReviewContainer>
        <HeaderText>
          후기<span>(999+)</span>
        </HeaderText>
        <div> 우선 그냥 후기(내용, 날짜?)</div>
        <div onClick={() => setVisible(true)}>+ 후기 더보기</div>
      </ProductReviewContainer>

      <AuthorDetailContainer>
        <HeaderText>작가 정보</HeaderText>
        <div>위치 보기</div>
        {/* 스크롤 되었을 때, 확인을 위해 임시로 넣어둠*/}
        <input style={{ width: 200, height: 2000 }} />
      </AuthorDetailContainer>

      <ReservationContainer>
        <div>가격 45,000</div>
        <ReservationButton>예약하기</ReservationButton>
      </ReservationContainer>

      <StyledModal
        visible={visible}
        onClose={() => setVisible(false)}
        width={'100%'}
        height={'80%'}
      >
        <ModalHeader>
          <StyledButton onClick={() => setVisible(false)}>
            <X size={40} />
          </StyledButton>
        </ModalHeader>
        <div>별점</div>
        <ReviewContainer>
          {/* 리뷰 보여주는 칸은 컴포넌트화 */}
          <ReviewWrapper>
            후기1가 길면후기1가 길면후기1가 길면후기1가 길면후기1가 길면후기1가 길면후기1가
            길면후기1가 길면후기1가 길면후기1가 길면후기1가 길면후기1가 길면후기1가 길면후기1가
            길면후기1가 길면후기1가 길면후기1가 길면후기1가 길면후기1가 길면후기1가 길면후기1가
            길면후기1가 길면후기1가 길면후기1가 길면
          </ReviewWrapper>
          <ReviewWrapper>후기2</ReviewWrapper>
          <ReviewWrapper>후기2</ReviewWrapper>
          <ReviewWrapper>후기2</ReviewWrapper>
          <ReviewWrapper>후기2</ReviewWrapper>
          <ReviewWrapper>후기2</ReviewWrapper>
        </ReviewContainer>
      </StyledModal>
    </>
  );
};

// min-height는 우선 어떠한 모양으로 나올지 보는 것이기 때문에 나중에 삭제
const ProductsDetailContainer = styled.div`
  min-height: 100px;
  margin: 20px 0;
  border-bottom: 2px solid black;
`;
const ProductNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;
const ProductContentWrapper = styled.div`
  margin: 20px 0;
`;
const HeaderText = styled(Text)`
  font-size: 25px;
  font-weight: 700;
`;
const ProductReviewContainer = styled.div`
  min-height: 100px;
  margin: 20px 0;
  border-bottom: 2px solid black;
`;
const AuthorDetailContainer = styled.div`
  min-height: 100px;
`;
const ReservationContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 640px;
  display: flex;
  bottom: 65px;
  background-color: #aaa;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
const StyledModal = styled(Modal)`
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

const ModalHeader = styled.div`
  background: linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%);
  height: 56px;
`;
const StyledButton = styled.button`
  background: none;
  border: none;
  right: 0;
  position: relative;
`;
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ReviewWrapper = styled.div`
  min-height: 100px;
  width: 90%;
  background-color: lightcyan;
  margin: 20px 0;
`;
export default ProductsDetailPage;
