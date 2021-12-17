import styled from '@emotion/styled';
import React from 'react';
const UserFollowingPage = () => {
  return (
    <UserFollowingWrapper>
      <FollowingLists>
        <FollowingItem>
          <Avatar>
            <AvatarImg />
            <AvatarName>방탄 공방</AvatarName>
          </Avatar>
          <FollowButton>팔로잉</FollowButton>
        </FollowingItem>
        <FollowingItem>
          <Avatar>
            <AvatarImg />
            <AvatarName>희진</AvatarName>
          </Avatar>
          <FollowCancelButton>팔로우</FollowCancelButton>
        </FollowingItem>
      </FollowingLists>
    </UserFollowingWrapper>
  );
};

const UserFollowingWrapper = styled.section``;
const FollowingLists = styled.ul``;
const FollowingItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;
const Avatar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const AvatarImg = styled.div`
  width: 50px;
  height: 50px;
  background-color: grey;
  border-radius: 50%;
  margin-right: 10px;
`;
const AvatarName = styled.div`
  font-size: 18px;
`;
const FollowButton = styled.button`
  width: 65px;
  height: 30px;
  border: solid 1px #4c8bf5;
  border-radius: 8px;
  color: #4c8bf5;
  background: none;
  font-size: 16px;
`;
const FollowCancelButton = styled.button`
  width: 65px;
  height: 30px;
  border: solid 1px #4c8bf5;
  border-radius: 8px;
  color: #f5f5f5;
  background: #4c8bf5;
  font-size: 16px;
  font-weight: 600;
`;
export default UserFollowingPage;
