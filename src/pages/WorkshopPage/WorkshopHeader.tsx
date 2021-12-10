import React from 'react';
import { Avatar } from '../../components/base';
import { Settings, Layout, Calendar, Star } from 'react-feather';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { SETTING, WORKSHOP, PRODUCTSLIST, REVIEWLIST } from '.';

const WorkshopHeader = () => {
  const ICON_SIZE = 24;
  return (
    <Container>
      <WorkshopProfile>
        <Avatar
          size={80}
          alt={'프로필'}
          shape={'circle'}
          src={'https://picsum.photos/id/1/200/300'}
          placeholder={'https://via.placeholder.com/150'}
        />
        <div className="info">
          <span>방탄공방</span>
          <span>서울 강남구 테헤란로</span>
          <span>12-7 3층</span>
          <span>010-1234-5678</span>
          <span>09:00 - 17:00</span>
        </div>
        <Link to={SETTING} style={{ textDecoration: 'none', color: 'black' }}>
          <Settings />
        </Link>
      </WorkshopProfile>
      <Tabs>
        <Link to={WORKSHOP} style={{ textDecoration: 'none', color: 'black' }}>
          <Layout size={`${ICON_SIZE}px`} />
        </Link>
        <Link to={PRODUCTSLIST} style={{ textDecoration: 'none', color: 'black' }}>
          <Calendar size={`${ICON_SIZE}px`} />
        </Link>
        <Link to={REVIEWLIST} style={{ textDecoration: 'none', color: 'black' }}>
          <Star size={`${ICON_SIZE}px`} />
        </Link>
      </Tabs>
    </Container>
  );
};
export default WorkshopHeader;

const Container = styled.div``;

const WorkshopProfile = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 36px;
  & .profileImg {
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }
  & .info {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    & span:first-of-type {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 12px;
    }
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f5f5f5;
  padding: 12px 0;
`;
