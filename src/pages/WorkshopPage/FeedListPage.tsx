import React from 'react';
import styled from '@emotion/styled';
const FeedList = () => {
  const DummyData = {
    data: {
      totalCount: 20,
      pageIndex: 0,
      pageSize: 10,
      hasNext: true,
      post: [
        {
          postId: 1,
          imageUrl: 'https://pngrow.com/preview/4227/circle-profile-picture-png',
          createdAt: '',
        },
        {
          postId: 1,
          imageUrl: 'https://pngrow.com/preview/4227/circle-profile-picture-png',
          createdAt: '',
        },
        {
          postId: 1,
          imageUrl: 'https://pngrow.com/preview/4227/circle-profile-picture-png',
          createdAt: '',
        },
      ],
    },
    success: true,
    serverDateTime: '2021-12-19 21:23:01',
  };
  return (
    <RowFeedContainer>
      {DummyData.data.post
        ? DummyData.data.post.map((list) => <img key={list.postId} src={list.imageUrl} />)
        : ''}
    </RowFeedContainer>
  );
};
export default FeedList;

const RowFeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3px;
  & img {
    width: 100%;
  }
`;
