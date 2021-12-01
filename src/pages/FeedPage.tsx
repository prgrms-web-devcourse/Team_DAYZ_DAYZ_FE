import styled from '@emotion/styled';
import React from 'react';

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
          <FeedContentClass>클래스 보러가기</FeedContentClass>
          <FeedContentText>
            <FeedContentTextUser>희진공방</FeedContentTextUser>
            <FeedContentTextTitle>오늘도 힘차게 화이팅~</FeedContentTextTitle>
          </FeedContentText>
        </FeedContentWrapper>
      </FeedItem>
      <FeedItem>
        <FeedTopWrapper>
          <FeedAvatar>
            <FeedAvatarImg />
            <FeedAvatarName>효성공방</FeedAvatarName>
          </FeedAvatar>
          <FeedTime>3시간전</FeedTime>
        </FeedTopWrapper>
        <FeedContentWrapper>
          <FeedContentImg />
          <FeedContentClass>클래스 보러가기</FeedContentClass>
          <FeedContentText>
            <FeedContentTextUser>효성공방</FeedContentTextUser>
            <FeedContentTextTitle>어제도 힘차게 화이팅~</FeedContentTextTitle>
          </FeedContentText>
        </FeedContentWrapper>
      </FeedItem>
      <FeedItem>
        <FeedTopWrapper>
          <FeedAvatar>
            <FeedAvatarImg />
            <FeedAvatarName>진환공방</FeedAvatarName>
          </FeedAvatar>
          <FeedTime>4시간전</FeedTime>
        </FeedTopWrapper>
        <FeedContentWrapper>
          <FeedContentImg />
          <FeedContentClass>클래스 보러가기</FeedContentClass>
          <FeedContentText>
            <FeedContentTextUser>진환공방</FeedContentTextUser>
            <FeedContentTextTitle>모레도 힘차게 화이팅~</FeedContentTextTitle>
          </FeedContentText>
        </FeedContentWrapper>
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
  color: grey;
`;
const FeedContentWrapper = styled.div``;
const FeedContentImg = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: grey;
`;
const FeedContentClass = styled.div`
  width: calc(100vw - 20px);
  height: 60px;
  background: linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%);
  line-height: 60px;
  text-align: start;
  color: #f5f5f5;
  font-size: 20px;
  font-weight: 600;
  padding-left: 20px;
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
  color: grey;
`;
const FeedContentTextTitle = styled.div`
  margin-left: 20px;
  font-size: 20px;

  color: grey;
`;

export default FeedPage;
