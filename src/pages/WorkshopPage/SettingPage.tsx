import styled from '@emotion/styled';
import React from 'react';
import { Settings } from 'react-feather';
import { Link, Switch, Route } from 'react-router-dom';
import { Avatar } from '../../components/base';
import { GoBack, LinkBox } from '../../components/domain';
import { EditPage } from '.';
import { EDIT } from '.';

const SettingPage = () => {
  return (
    <div>
      <GoBack to="/workshop">뒤로가기</GoBack>
      <WorkshopProfileContainer>
        <Avatar
          size={80}
          alt={'프로필'}
          shape={'circle'}
          src={'https://picsum.photos/id/1/200/300'}
          placeholder={'https://via.placeholder.com/150'}
        />
        <WorkshopName>공방짱</WorkshopName>
        <Link to={EDIT}>
          <Settings style={{ position: 'absolute', top: '50px', left: '60px', color: 'black' }} />
        </Link>
      </WorkshopProfileContainer>

      <SettingListContainer>
        <LinkBox>예약확인</LinkBox>
        <LinkBox>로그아웃</LinkBox>
      </SettingListContainer>

      <Switch>
        <Route path={EDIT}>
          <EditPage />
        </Route>
      </Switch>
    </div>
  );
};
export default SettingPage;

const WorkshopProfileContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
  position: relative;
`;
const WorkshopName = styled.div`
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  margin-left: 20px;
`;

const SettingListContainer = styled.ul`
  margin: 20px;
`;
