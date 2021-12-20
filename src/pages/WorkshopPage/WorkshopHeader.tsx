import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Layout, Calendar, Star } from 'react-feather';
import { Avatar } from '../../components/base';
import { RoutePath } from '.';
import { DUMMY_ATELIER_DATA } from './DUMMY_DATA';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms';

// 1. 공방 상세정보 조회 https://backend-devcourse.notion.site/2158d2bf8bab4792baea605062c15d69
// TODO:
// 공방 정보가 없으면 뒤로가기 or 메인페이지로 가기

const WorkshopHeader = () => {
  const { auth } = useRecoilValue(userState);
  const { intro, name, imageUrl, address, callNo, startTime, endTime, atelierId } =
    DUMMY_ATELIER_DATA;
  const ICON_SIZE = 26;
  return (
    <>
      <InfoContainer>
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
        </WorkshopProfile>
        {auth === 'ROLE_USER' ? (
          <FollowBtn>팔로우</FollowBtn>
        ) : (
          <Link
            to={RoutePath.Setting(atelierId)}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <ProfileEditBtn>프로필 수정</ProfileEditBtn>
          </Link>
        )}
      </InfoContainer>
      <Tabs>
        <Link to={RoutePath.Workshop(atelierId)} style={{ textDecoration: 'none', color: 'black' }}>
          <Layout size={`${ICON_SIZE}px`} />
        </Link>
        <Link
          to={RoutePath.ProductList(atelierId)}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <Calendar size={`${ICON_SIZE}px`} />
        </Link>
        <Link
          to={RoutePath.ReviewList(atelierId)}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <Star size={`${ICON_SIZE}px`} />
        </Link>
      </Tabs>
    </>
  );
};
export default WorkshopHeader;
const InfoContainer = styled.div`
  margin: 18px;
`;

const WorkshopProfile = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
  & span:first-of-type {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  & span:not(first-of-type) {
    margin: 2px 0;
  }
`;
const ProfileEditBtn = styled.button`
  background: rgb(184, 139, 214);
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  width: 100%;
`;

const FollowBtn = styled(ProfileEditBtn)``;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f5f5f5;
  padding: 12px 0;
`;
