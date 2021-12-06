import React from 'react';
import styled from '@emotion/styled';
import { Settings, ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';
import Avatar from '../../components/base/Avatar';
const UserPage = () => {
  return (
    <UserPageWrapper>
      <UserInfo>
        <Avatar
          size={80}
          alt={'프로필'}
          shape={'circle'}
          src={'https://pngrow.com/preview/4227/circle-profile-picture-png'}
          placeholder={'https://via.placeholder.com/150'}
        />
        <UserInfoName>희진짱</UserInfoName>
        <Link to="/user/edit" style={{ textDecoration: 'none' }}>
          <Settings style={{ position: 'absolute', top: '50px', left: '60px', color: 'black' }} />
        </Link>
      </UserInfo>

      <ImportantInfo>
        <Link to="/user/book" style={{ textDecoration: 'none' }}>
          <ImortantInfoLists>예약 내역</ImortantInfoLists>
        </Link>
        <Link to="/user/review" style={{ textDecoration: 'none' }}>
          <ImortantInfoLists style={{ border: 'none' }}>나의 후기</ImortantInfoLists>
        </Link>
      </ImportantInfo>

      <UserSettingLists>
        <Link to="/user/following" style={{ textDecoration: 'none' }}>
          <UserSettingList>
            <ListText>팔로잉한 계정</ListText>
            <ChevronRight size={40} />
          </UserSettingList>
        </Link>

        <UserSettingList>
          <ListText>찜한 클래스</ListText>
          <ChevronRight size={40} />
        </UserSettingList>
        <UserSettingList>
          <ListText>로그아웃</ListText>
          <ChevronRight size={40} />
        </UserSettingList>
      </UserSettingLists>
    </UserPageWrapper>
  );
};
const UserPageWrapper = styled.section`
  width: 100%;
`;
const UserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
  position: relative;
`;
const UserInfoImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: grey;
`;
const UserInfoName = styled.div`
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  margin-left: 20px;
`;
const ImportantInfo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
  height: 80px;
  margin: 20px;
  background: linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%);
  border-radius: 16px;
`;
const ImortantInfoLists = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding: 0 30px;
  color: #f5f5f5;
  border-right: solid 3px #f5f5f5;
`;

const UserSettingLists = styled.ul`
  margin: 20px;
`;
const UserSettingList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px #c4c4c4;
  border-radius: 16px;
  padding: 10px 20px;
  color: black;
  margin-bottom: 10px;
`;

const ListText = styled.div`
  font-size: 20px;
`;
export default UserPage;
