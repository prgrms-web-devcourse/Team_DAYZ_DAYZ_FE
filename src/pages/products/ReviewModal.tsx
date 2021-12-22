import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Modal } from '../../components/base';
import { Star, X } from 'react-feather';
import { Review } from '../../components/domain';
import { fetchProductReviewById } from '../../utils/api/dayzApi';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms';
import { IReviewProps } from './ProductsDetailPage';
import Loader from 'react-loader-spinner';

interface Props {
  visible: boolean;
  setVisible: (T: boolean) => void;
  id: number;
  avgScore: number;
}

const ReviewModal = ({ visible = false, setVisible, id, avgScore }: Props) => {
  const { token } = useRecoilValue(userState);
  const [reviewList, setReviewList] = useState<IReviewProps>();
  const [isLoading, setIsLoading] = useState(reviewList == null);
  // Todo: 바깥 스크롤 막기 추가
  useEffect(() => {
    fetchProductReviewById(token, id).then((res) => setReviewList(res.data));
    setIsLoading(false);
  }, []);
  return (
    <StyledModal visible={visible} onClose={() => setVisible(false)} width={'100%'} height={'80%'}>
      <ModalHeader>
        <StyledButton onClick={() => setVisible(false)}>
          <X size={30} />
        </StyledButton>
      </ModalHeader>
      <RatingWrapper>
        <Star size={20} style={{ color: '#B88BD6' }} />
        <Div style={{ fontWeight: '600' }}>{avgScore}</Div>
        <Div style={{ color: 'rgba(0,0,0,0.5)' }}>({reviewList?.list.length}개의 평점)</Div>
      </RatingWrapper>
      {isLoading ? (
        <LoaderContainer>
          <Loader type="Oval" color="#B88BD6" height={80} width={80} />
        </LoaderContainer>
      ) : (
        <ReviewContainer>
          {reviewList?.list.map((review) => (
            <Review
              key={review.id}
              profileImg={review.member.profileImageUrl}
              userName={review.member.username}
              content={review.content}
              uploadDate={review.createdAt}
              imgList={review.reviewImage.map((img) => img.imageUrl)}
            />
          ))}
        </ReviewContainer>
      )}
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
  align-items: center;
  margin: 20px;
`;
const Div = styled.div`
  padding-left: 5px;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default ReviewModal;
