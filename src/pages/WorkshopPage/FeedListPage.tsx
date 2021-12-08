import React from 'react';
import styled from '@emotion/styled';
const FeedList = () => {
  return (
    <RowFeedContainer>
      <div />
      <div />
      <div />
    </RowFeedContainer>
  );
};
export default FeedList;

const RowFeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3px;
  & div {
    padding-top: 100%;
    background-color: black;
  }
`;
