import React from 'react';
import styled from '@emotion/styled';
import { DUMMY_FEED_DATA } from './DUMMY_DATA';
import { Image } from '../../components/base';
// 1. 공방 게시글 목록 조회 https://backend-devcourse.notion.site/f9eef5aaed3a4effa755c3b8f716d6bd

const FeedListPage = () => {
  return (
    <RowFeedContainer>
      {DUMMY_FEED_DATA.post.length ? (
        DUMMY_FEED_DATA.post.map(({ postId, imageUrl }) => (
          <div key={postId}>
            <Image lazy src={imageUrl} width={'100%'} height={'100%'} alt="feed" mode="fill" />
          </div>
        ))
      ) : (
        <div>아직 피드가 없어요.</div>
      )}
    </RowFeedContainer>
  );
};
export default FeedListPage;

const RowFeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3px;
<<<<<<< HEAD
  & img {
    width: 100%;
  }
=======
>>>>>>> af06236... Refactor: 더미데이터 적용
`;
