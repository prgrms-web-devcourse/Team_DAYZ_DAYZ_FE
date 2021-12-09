import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';
import { Button, Image, Text } from '../../components/base';
import { AteliarInformation, SimpleReview } from '../../components/domain';
import ReviewModal from './ReviewModal';

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
        <SimpleReviewContainer>
          <SimpleReview date={'2010-05-17'}>좋아요좋아요~</SimpleReview>
          <SimpleReview date={'2010-03-08'}>좋아요좋아요~</SimpleReview>
        </SimpleReviewContainer>
        <MoreReviewWrapper>
          <span onClick={() => setVisible(true)}>+ 후기 더보기</span>
        </MoreReviewWrapper>
      </ProductReviewContainer>

      <AuthorDetailContainer>
        <HeaderText>작가 정보</HeaderText>
        <AteliarInformation
          profileImg={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png'
          }
          name={'희진 공방'}
          location={'서울시 송파구 100번지'}
          phoneNumber={'010-5555-3333'}
          openTime={'9 : 00 ~ 18 : 00'}
        />

        <HeaderText>위치 보기</HeaderText>
      </AuthorDetailContainer>

      <ReservationContainer>
        <HeaderText>45,000</HeaderText>
        <Link to={`/booking/${id}`} style={{ textDecoration: 'none' }}>
          <ReservationButton type="button">예약하기</ReservationButton>
        </Link>
      </ReservationContainer>

      <ReviewModal visible={visible} setVisible={setVisible} />
    </>
  );
};

const ProductsDetailContainer = styled.div`
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
  margin: 20px 0;
  border-bottom: 2px solid black;
`;
const SimpleReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MoreReviewWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
`;
const AuthorDetailContainer = styled.div`
  padding-bottom: calc(${(props) => props.theme.height.bottomHeight});
`;
const ReservationContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 640px;
  display: flex;
  bottom: ${(props) => props.theme.height.bottomHeight};
  background-color: #aaa;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ReservationButton = styled(Button)`
  height: 56px;
  width: 174px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
`;

export default ProductsDetailPage;
