import styled from '@emotion/styled';
import React from 'react';

// interface Props {
//   setReviewDetails;
// }

const ReviewModal = () => {
  return (
    <ModalWrapper>
      <Square>리뷰 입니다.</Square>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Square = styled.div`
  position: absolute;
  width: 1000px;
  height: 300px;
  background-color: purple;
`;

export default ReviewModal;
