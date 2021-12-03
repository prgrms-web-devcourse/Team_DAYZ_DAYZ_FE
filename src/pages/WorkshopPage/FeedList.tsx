import React from 'react';
import styled from '@emotion/styled';
const FeedList = () => {
  return (
    <div>
      <RowFeedContainer>
        <div />
        <div />
        <div />
      </RowFeedContainer>
    </div>
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
