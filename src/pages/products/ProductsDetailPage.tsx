import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';
import { Button, Image, Text } from '../../components/base';
import { AteliarInformation, SimpleReview } from '../../components/domain';
import ReviewModal from './ReviewModal';
import { CLASS_DUMMY } from './DUMMY_DATA';
import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import { Pagination } from '@egjs/flicking-plugins';
import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/react-flicking/dist/flicking-inline.css';
import '@egjs/flicking-plugins/dist/pagination.css';
import { Star } from 'react-feather';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { modalState } from '../../atoms';

const ProductsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [visible, setVisible] = useState(false);
  const { data } = CLASS_DUMMY;
  // 여기서 id 값으로 데이터를 불러온다. api
  // 현재 context안에는 공방인지 유저인지 데이터가 담겨져 있어야 한다.
  // id를 조회하면 class 소개, 별점, 후기, author 항목이 조회가 되어야함.
  const setModalState = useSetRecoilState(modalState);
  const resetModalState = useResetRecoilState(modalState);
  useEffect(() => {
    setModalState(() => ({
      modalView: true,
    }));
    return () => {
      resetModalState();
    };
  }, []);
  return (
    <>
      <Flicking align="prev" circular={false} plugins={[new Pagination({ type: 'bullet' })]}>
        {data.images.length
          ? data.images.map((list) => (
              <img
                key={list.sequence}
                style={{ width: '100%', height: '250px' }}
                src={list.imageUrl}
              />
            ))
          : ''}
        <ViewportSlot>
          {data.images.length > 1 ? (
            <div className="flicking-pagination" />
          ) : (
            <div className="flicking-pagination" style={{ display: 'none' }} />
          )}
        </ViewportSlot>
      </Flicking>

      <ProductsDetailContainer>
        <ProductNameWrapper>
          <HeaderText>{data.name}</HeaderText>
          <RatingWrapper>
            <Star size={16} style={{ paddingBottom: '5px' }} />
            <div style={{ paddingLeft: '5px' }}>{data.avgScore}</div>
          </RatingWrapper>
        </ProductNameWrapper>
        <ProductContentWrapper>
          <HeaderText>클래스 소개</HeaderText>
          <ContentWrapper> {data.intro}</ContentWrapper>
        </ProductContentWrapper>
        <ProductContentWrapper>
          <HeaderText>커리큘럼</HeaderText>
          {data.curricurums.map((curricurum, i) => (
            <ContentWrapper key={curricurum.curricurumId}>
              <Bullet
                style={{
                  backgroundColor: `rgb(184, 139, 214, ${i / data.curricurums.length + 0.4}`,
                }}
              />
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
        <HeaderText>{data.price.toLocaleString()}원</HeaderText>
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
  border-bottom: 1px solid #c4c4c4;
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
  align-items: center;
`;
const HeaderText = styled(Text)`
  font-size: 20px;
  font-weight: 700;
`;
const ProductReviewContainer = styled.div`
  margin: 20px 0;
  border-bottom: 1px solid #c4c4c4;
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
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #c4c4c4;
  padding: 10px 0;
  background-color: #ffffff;
`;
const ReservationButton = styled(Button)`
  height: 56px;
  width: 174px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  color: #f5f5f5;
`;
const Bullet = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
`;
const RatingWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export default ProductsDetailPage;
