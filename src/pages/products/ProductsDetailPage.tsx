import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Text } from '../../components/base';
import { AteliarInformation, SimpleReview } from '../../components/domain';
import ReviewModal from './ReviewModal';
import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import { Pagination } from '@egjs/flicking-plugins';
import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/react-flicking/dist/flicking-inline.css';
import '@egjs/flicking-plugins/dist/pagination.css';
import { Star } from 'react-feather';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { modalState, navigationState, userState } from '../../atoms';
import { fetchProductById } from '../../utils/api/dayzApi';

interface Image {
  imageUrl: string;
  sequence: number;
}

interface Curricurum {
  curricurumId: number;
  step: number;
  content: string;
}

interface Atelier {
  address: string;
  atelierId: number;
  callNumber: string;
  endTime: string;
  name: string;
  startTime: string;
  imageUrl: string;
}

interface ProductProps {
  atelier: Atelier;
  avgScore: number;
  classId: number;
  curriculums: Curricurum[];
  images: Image[];
  intro: string;
  maxPeopleNumber: number;
  name: string;
  price: number;
}

const ProductsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { token } = useRecoilValue(userState);
  const [visible, setVisible] = useState(false);
  const [productData, setProductData] = useState<ProductProps>();
  const history = useHistory();
  const setModalState = useSetRecoilState(modalState);
  const resetModalState = useResetRecoilState(modalState);
  const setNavigationState = useSetRecoilState(navigationState);
  const resetPageState = useResetRecoilState(navigationState);
  useEffect(() => {
    setModalState(() => ({
      modalView: true,
    }));
    setNavigationState((prev) => ({
      ...prev,
      topNavigation: false,
      bottomNavigation: false,
    }));
    fetchProductById(token, +id).then((res) => {
      console.log(res.data);
      setProductData(res.data);
    });
    return () => {
      resetModalState();
      resetPageState();
    };
  }, []);

  const handleClick = () => {
    history.push(`/booking/${id}`, {
      name: '나만의 도자기 만들기',
      maxPeopleNumber: 5,
      price: 12000,
    });
  };
  return (
    <>
      {
        <>
          <Flicking align="prev" circular={false} plugins={[new Pagination({ type: 'bullet' })]}>
            {productData
              ? productData.images.map((url) => (
                  <img
                    key={url.sequence}
                    style={{ width: '100%', height: '250px' }}
                    src={url.imageUrl}
                  />
                ))
              : ''}
            <ViewportSlot>
              {productData?.images ? (
                <div className="flicking-pagination" />
              ) : (
                <div className="flicking-pagination" style={{ display: 'none' }} />
              )}
            </ViewportSlot>
          </Flicking>
          <ProductsDetailContainer>
            <ProductNameWrapper>
              <Text style={{ fontSize: 30, fontWeight: 800 }}>{productData?.name}</Text>
              <RatingWrapper>
                <Star size={16} style={{ paddingBottom: '5px' }} />
                <div style={{ paddingLeft: '5px' }}>{productData?.avgScore}</div>
              </RatingWrapper>
            </ProductNameWrapper>
            <ProductContentWrapper>
              <HeaderText>클래스 소개</HeaderText>
              <ContentWrapper> {productData?.intro}</ContentWrapper>
            </ProductContentWrapper>
            <ProductContentWrapper>
              <HeaderText>커리큘럼</HeaderText>
              {productData?.curriculums.map((curricurum, i) => (
                <ContentWrapper key={curricurum.curricurumId}>
                  <Bullet
                    style={{
                      backgroundColor: `rgb(184, 139, 214, ${
                        i / productData.curriculums.length + 0.4
                      }`,
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
              profileImg={productData?.atelier.imageUrl}
              name={productData?.atelier.name}
              phoneNumber={productData?.atelier.callNumber}
              openTime={`${productData?.atelier.startTime} ~ ${productData?.atelier.endTime}`}
            />
          </AuthorDetailContainer>

          <ReservationContainer>
            <HeaderText>{productData?.price.toLocaleString()}원</HeaderText>
            <ReservationButton type="button" onClick={handleClick}>
              예약하기
            </ReservationButton>
          </ReservationContainer>
          <ReviewModal visible={visible} setVisible={setVisible} />
        </>
      }
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
  bottom: 0;
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
