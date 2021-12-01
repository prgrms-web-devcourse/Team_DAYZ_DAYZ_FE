import styled from '@emotion/styled';
import React from 'react';
import { ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';

const FeedPage = () => {
  return (
    <FeedPageWrapper>
      <FeedItem>
        <FeedTopWrapper>
          <FeedAvatar>
            <FeedAvatarImg />
            <FeedAvatarName>희진공방</FeedAvatarName>
          </FeedAvatar>
          <FeedTime>3시간전</FeedTime>
        </FeedTopWrapper>
        <FeedContentWrapper>
          <FeedContentImg />
          <Link to="/products/:id" style={{ textDecoration: 'none' }}>
            <FeedContentClassWrapper>
              <FeedContentClassText>클래스 보러가기</FeedContentClassText>
              <ChevronRight size={30} style={{ marginRight: '10px' }} />
            </FeedContentClassWrapper>
          </Link>
          <FeedContentText>
            <FeedContentTextUser>희진공방</FeedContentTextUser>
            <FeedContentTextTitle>오늘도 힘차게 화이팅~</FeedContentTextTitle>
          </FeedContentText>
        </FeedContentWrapper>
        <Link to="/feed/comments/:id" style={{ textDecoration: 'none' }}>
          <FeedComment>댓글 더 보기</FeedComment>
        </Link>
      </FeedItem>
    </FeedPageWrapper>
  );
};

const FeedPageWrapper = styled.section`
  overflow: scroll;
  width: 100vw;
  height: calc(100vh - 190px);
`;
const FeedItem = styled.div`
  margin-bottom: 40px;
`;
const FeedTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;
const FeedTime = styled.div`
  font-size: 20px;
  color: grey;
`;
const FeedAvatar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const FeedAvatarImg = styled.div`
  background-color: grey;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const FeedAvatarName = styled.div`
  margin-left: 20px;
  font-size: 20px;
  color: black;
`;
const FeedContentWrapper = styled.div``;
const FeedContentImg = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: grey;
`;
const FeedContentClassWrapper = styled.div`
  width: 100vw;
  height: 60px;
  background: linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f5f5f5;
`;
const FeedContentClassText = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding-left: 20px;
  line-height: 60px;
  text-align: start;
`;
const FeedContentText = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`;
const FeedContentTextUser = styled.div`
  margin-left: 20px;
  font-size: 20px;
  font-weight: 600;
  color: black;
`;
const FeedContentTextTitle = styled.div`
  margin-left: 20px;
  font-size: 20px;
  color: black;
`;
const FeedComment = styled.div`
  margin-left: 20px;
  margin-top: 5px;
  font-size: 20px;
  color: grey;
`;

export default FeedPage;
