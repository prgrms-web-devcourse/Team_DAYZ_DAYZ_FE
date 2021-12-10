import React from 'react';
import styled from '@emotion/styled';

// 1. 공방 게시글 목록 조회 https://backend-devcourse.notion.site/f9eef5aaed3a4effa755c3b8f716d6bd

const FeedListPage = () => {
  return (
    <RowFeedContainer>
      {DummyData.data.post
        ? DummyData.data.post.map((list) => <img key={list.postId} src={list.imageUrl} />)
        : ''}
    </RowFeedContainer>
  );
};
export default FeedListPage;

const RowFeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3px;
  & img {
    width: 100%;
  }
`;
