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
  background-color: #ddd;
  width: 90%;
  margin: 15px 0;
  padding: 0 15px;
  box-sizing: border-box;
  border-radius: 15px;
`;
const ContentWrapper = styled.div`
  margin: 10px 0;
`;
const DateWrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: flex-end;
`;
export default SimpleReview;
