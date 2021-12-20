import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Modal } from '../../components/base';
import { Star, X } from 'react-feather';
import { Review } from '../../components/domain';
import { fetchProductReviewById } from '../../utils/api/dayzApi';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms';
import { IReviewProps } from './ProductsDetailPage';

interface Props {
  visible: boolean;
  setVisible: (T: boolean) => void;
  id: number;
  avgScore: number;
}

const ReviewModal = ({ visible = false, setVisible, id, avgScore }: Props) => {
  const { token } = useRecoilValue(userState);
  const [reviewList, setReviewList] = useState<IReviewProps>();

  // Todo: 바깥 스크롤 막기 추가
  useEffect(() => {
    if (visible) {
      fetchProductReviewById(token, id).then((res) => setReviewList(res.data));
    }
  }, []);
  return (
    <StyledModal visible={visible} onClose={() => setVisible(false)} width={'100%'} height={'80%'}>
      <ModalHeader>
        <StyledButton onClick={() => setVisible(false)}>
          <X size={30} />
        </StyledButton>
      </ModalHeader>
      <ModalInfo>
        <RatingWrapper>
          <Star size={20} style={{ color: 'rgb(249, 202, 36)', paddingBottom: '5px' }} />
          <Div style={{ fontWeight: '600' }}>{avgScore}</Div>
          <Div style={{ color: 'rgba(0,0,0,0.5)' }}>({reviewList?.list.length}개의 평점)</Div>
        </RatingWrapper>
        <Div
          style={{
            background: 'linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%)',
            borderRadius: '4px',
            color: '#f5f5f5',
            padding: '3px 6px',
            fontWeight: '600',
          }}
        >
          {' '}
          최신순
        </Div>
      </ModalInfo>
      <ReviewContainer>
        {reviewList?.list.map((review) => (
          <Review
            key={review.id}
            profileImg={'https://via.placeholder.com/150'}
            userName={'여기 어떻게 채우죠.. 도와주세유'}
            content={review.content}
            uploadDate={review.createdAt}
            imgList={review.reviewImage.map((img) => img.imageUrl)}
          />
        ))}
      </ReviewContainer>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

const ModalHeader = styled.div`
  background: linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%);
  height: 40px;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  z-index: 1000;
`;
const StyledButton = styled.button`
  background: none;
  border: none;
  color: #f5f5f5;
`;
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RatingWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: content-box;
  margin: 20px 0px 10px 0px;
`;
const Div = styled.div`
  padding-left: 5px;
`;
const ModalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 40px;
  box-sizing: content-box;
`;

export default ReviewModal;
