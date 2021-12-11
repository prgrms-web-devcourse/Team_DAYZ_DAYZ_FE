import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Settings, Layout, Calendar, Star } from 'react-feather';
import { Avatar } from '../../components/base';
import { SETTING, WORKSHOP, PRODUCTSLIST, REVIEWLIST } from '.';
import { DUMMY_ATELIER_DATA } from './DUMMY_DATA';

// 1. 공방 상세정보 조회 https://backend-devcourse.notion.site/2158d2bf8bab4792baea605062c15d69
// TODO:
// 공방 정보가 없으면 뒤로가기 or 메인페이지로 가기

const WorkshopHeader = () => {
  const { intro, name, imageUrl, address, callNo, startTime, endTime } = DUMMY_ATELIER_DATA;
  const ICON_SIZE = 26;
  return (
    <>
      <WorkshopProfile>
        <Avatar
          size={80}
          alt={'profile'}
          shape={'circle'}
          src={imageUrl}
          placeholder={'https://via.placeholder.com/150'}
        />
        <ContentsWrapper>
          <span>{name}</span>
          <span>{intro}</span>
          <span>{address}</span>
          <span>{callNo}</span>
          <span>
            {startTime} - {endTime}
          </span>
        </ContentsWrapper>
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
    </>
  );
};
export default WorkshopHeader;

const WorkshopProfile = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 36px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  & span:first-of-type {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 12px;
  }
  & span:not(first-of-type) {
    margin: 2px 0;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f5f5f5;
  padding: 12px 0;
`;
