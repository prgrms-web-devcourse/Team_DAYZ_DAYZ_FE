import React from 'react';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactChild;
  date: string;
}

const SimpleReview = ({ children, date }: Props) => {
  return (
    <ReveiwWrapper>
      <ContentWrapper>{children}</ContentWrapper>
      <DateWrapper>{date}</DateWrapper>
    </ReveiwWrapper>
  );
};

const ReveiwWrapper = styled.div`
  width: 90%;
  margin-top: 20px;
  padding: 0 15px;
  box-sizing: border-box;
  border-radius: 15px;
  border: solid 1px #c4c4c4;
`;
const ContentWrapper = styled.div`
  margin: 10px 0;
`;
const DateWrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: flex-end;
`;
export default SimpleReview;
