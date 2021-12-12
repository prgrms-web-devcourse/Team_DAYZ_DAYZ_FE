import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';
import { Button, Image, Text } from '../../components/base';
import { AteliarInformation, SimpleReview } from '../../components/domain';
import ReviewModal from './ReviewModal';
import { CLASS_DUMMY } from './DUMMY_DATA';

const ProductsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [visible, setVisible] = useState(false);
  const { data } = CLASS_DUMMY;
  // 여기서 id 값으로 데이터를 불러온다. api
  // 현재 context안에는 공방인지 유저인지 데이터가 담겨져 있어야 한다.
  // id를 조회하면 class 소개, 별점, 후기, author 항목이 조회가 되어야함.

  return (
    <>
      {/* 이미지 리스트로 바꾸기 희진님이 사용하셨던 flicker? 그거 사용하면 될듯  */}
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
          <HeaderText>{data.name}</HeaderText>
          <div>별점 {data.avgScore}</div>
        </ProductNameWrapper>
        <ProductContentWrapper>
          <HeaderText>클래스 소개</HeaderText>
          <ContentWrapper> {data.intro}</ContentWrapper>
        </ProductContentWrapper>
        <ProductContentWrapper>
          <HeaderText>커리큘럼</HeaderText>
          {data.curricurums.map((curricurum) => (
            <ContentWrapper key={curricurum.curricurumId}>
              {curricurum.step}단계 {curricurum.content}
            </ContentWrapper>
          ))}
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
          profileImg={data.aterier.imageUrl}
          name={data.aterier.name}
          phoneNumber={data.aterier.callNo}
          openTime={`${data.aterier.startTime} ~ ${data.aterier.endTime}`}
        />

        <HeaderText>위치 보기</HeaderText>
      </AuthorDetailContainer>

      <ReservationContainer>
        <HeaderText>{data.price}원</HeaderText>
        <Link to={`/booking/${id}`} style={{ textDecoration: 'none' }}>
          <ReservationButton type="button">예약하기</ReservationButton>
        </Link>
      </ReservationContainer>

      <ReviewModal visible={visible} setVisible={setVisible} />
    </>
  );
};

const ProductsDetailContainer = styled.section`
  margin: 20px 0;
  padding: 0 20px;
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
const ContentWrapper = styled.div`
  margin: 10px 0;
  padding-left: 10px;
`;
const HeaderText = styled(Text)`
  font-size: 25px;
  font-weight: 700;
`;
const ProductReviewContainer = styled.div`
  margin: 20px 0;
  border-bottom: 2px solid black;
  padding: 0 20px;
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
  padding: 0 20px;
  padding-bottom: calc(${(props) => props.theme.height.bottomHeight});
`;
const ReservationContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 640px;
  display: flex;
  bottom: ${(props) => props.theme.height.bottomHeight};
  background-color: #e3e0ff;
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
