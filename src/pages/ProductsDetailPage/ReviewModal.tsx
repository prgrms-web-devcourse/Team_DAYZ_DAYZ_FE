import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Modal } from '../../components/base';
import { X } from 'react-feather';
import { Review } from '../../components/domain';

interface Props {
  visible: boolean;
  setVisible: (T: boolean) => void;
}

const ReviewModal = ({ visible = false, setVisible }: Props) => {
  const [reviewList, setReviewList] = useState([]);

  // Todo: 바깥 스크롤 막기 추가
  useEffect(() => {
    if (visible && reviewList.length === 0) {
      // visible이 true이고 reviewList에 값이 없을때 api 호출 실행.
    }
  }, []);
  return (
    <StyledModal visible={visible} onClose={() => setVisible(false)} width={'100%'} height={'80%'}>
      <ModalHeader>
        <StyledButton onClick={() => setVisible(false)}>
          <X size={40} />
        </StyledButton>
      </ModalHeader>
      <div>별점</div>
      <ReviewContainer>
        {/* 이 부분에서 map을 돌면 될 것이다. */}
        <Review
          profileImg={
            'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
          }
          ateliarName={'희진 공방'}
          content={
            '도자기 좋아요~ 도자기 좋아요~ 도자기 좋아요~도자기 좋아요~ 도자기 좋아요~ 도자기 좋아요~도자기 좋아요~ 도자기 좋아요~ 도자기 좋아요~도자기 좋아요~ 도자기 좋아요~ 도자기 좋아요~도자기 좋아요~ 도자기 좋아요~ 도자기 좋아요~'
          }
          uploadDate={'2020-12-30'}
          imgList={[
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnKvFqnhspQFrblkvMfVhGZ8GvfjihBNqjw&usqp=CAU',
          ]}
        />
        <Review
          profileImg={
            'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
          }
          ateliarName={'희진 공방'}
          content={
            '도자기 좋아요~ 도자기 좋아요~ 도자기 좋아요~도자기 좋아요~ 도자기 좋아요~ 도자기 좋아요~도자기 좋아요~ 도자기 좋아요~ 도자기 좋아요~도자기 좋아요~ 도자기 좋아요~ 도자기 좋아요~도자기 좋아요~ 도자기 좋아요~ 도자기 좋아요~'
          }
          uploadDate={'2020-12-30'}
          imgList={[
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnKvFqnhspQFrblkvMfVhGZ8GvfjihBNqjw&usqp=CAU',
          ]}
        />
        <Review
          profileImg={
            'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
          }
          ateliarName={'희진 공방'}
          content={
            '도자기 좋아요~ 도자기 좋아요~ 도자기 좋아요~도자기 좋아요~ 도자기 좋아요~ 도자기 좋아요~도자기 좋아요~ 도자기 좋아요~ 도자기 좋아요~도자기 좋아요~ 도자기 좋아요~ 도자기 좋아요~도자기 좋아요~ 도자기 좋아요~ 도자기 좋아요~'
          }
          uploadDate={'2020-12-30'}
          imgList={[
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnKvFqnhspQFrblkvMfVhGZ8GvfjihBNqjw&usqp=CAU',
          ]}
        />
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
  height: 56px;
  display: flex;
  justify-content: flex-end;
`;
const StyledButton = styled.button`
  background: none;
  border: none;
`;
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ReviewModal;
