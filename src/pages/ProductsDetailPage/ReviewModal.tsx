import React from 'react';
import styled from '@emotion/styled';
import { Modal } from '../../components/base';
import { X } from 'react-feather';
import { Review } from '../../components/domain';

interface Props {
  visible: boolean;
  setVisible: (T: boolean) => void;
}

const ReviewModal = ({ visible = false, setVisible }: Props) => {
  return (
    <StyledModal visible={visible} onClose={() => setVisible(false)} width={'100%'} height={'80%'}>
      {/* 바깥 스크롤 막기 추가 */}
      <ModalHeader>
        <StyledButton onClick={() => setVisible(false)}>
          <X size={40} />
        </StyledButton>
      </ModalHeader>
      <div>별점</div>
      <ReviewContainer>
        <Review />
        <Review />
        <Review />
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
