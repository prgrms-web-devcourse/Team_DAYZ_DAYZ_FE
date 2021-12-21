import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';
import { Layout, Calendar, Star, Phone, Home, Clock } from 'react-feather';
import { Avatar } from '../../components/base';
import { RoutePath } from '.';
import { DUMMY_ATELIER_DATA } from './DUMMY_DATA';
import { getAtelierDetail } from '../../utils/api/dayzApi';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms';

// 1. 공방 상세정보 조회 https://backend-devcourse.notion.site/2158d2bf8bab4792baea605062c15d69
// TODO:
// 공방 정보가 없으면 뒤로가기 or 메인페이지로 가기

const WorkshopHeader = () => {
  const { intro, name, imageUrl, address, callNo, startTime, endTime, atelierId } =
    DUMMY_ATELIER_DATA;
  const ICON_SIZE = 26;
  const user = useRecoilValue(userState);
  const { id } = useParams<{ id: string }>();
  const [atelierData, setAtelierData] = useState<any>({});

  const getAsyncAtelierDetail = useCallback(async () => {
    const response = await getAtelierDetail(user.token, id);
    if (response.status === 200) {
      setAtelierData({ ...response.data.data });
      console.log(response.data.data);
    }
  }, [id]);

  const formatPhoneNum = (num: string) => {
    return num.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, '$1-$2-$3');
  };

  useEffect(() => {
    getAsyncAtelierDetail();
  }, [getAsyncAtelierDetail]);

  return (
    <>
      <InfoContainer>
        <WorkshopProfile>
          <Avatar
            size={80}
            alt={'profile'}
            shape={'circle'}
            src={atelierData.imageUrl ? atelierData.imageUrl : imageUrl}
            placeholder={'https://via.placeholder.com/150'}
          />
          <ContentsWrapper>
            <span style={{ fontSize: '18px', fontWeight: '600' }}>
              {atelierData.name ? atelierData.name : name}
            </span>
            <span style={{ margin: '10px 0' }}>
              {atelierData.intro ? atelierData.intro : intro}
            </span>
            <InfoDetailContainer>
              <Home size={12} /> <span>{atelierData.address ? atelierData.address : address}</span>
            </InfoDetailContainer>
            <InfoDetailContainer>
              <Phone size={12} />{' '}
              <span>
                {atelierData.callNumber ? formatPhoneNum(atelierData.callNumber) : callNo}
              </span>
            </InfoDetailContainer>
            <InfoDetailContainer>
              <Clock size={12} />{' '}
              <span>
                {atelierData.startTime ? atelierData.startTime : startTime} -{' '}
                {atelierData.endTime ? atelierData.endTime : endTime}
              </span>
            </InfoDetailContainer>
          </ContentsWrapper>
        </WorkshopProfile>
        {user.auth === 'ROLE_USER' ? (
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
  width: 270px;
  word-break: keep-all;
  margin-left: 18px;
`;

const InfoDetailContainer = styled.div`
  margin: 3px 0;
  font-size: 14px;
`;

const ProfileEditBtn = styled.button`
  background: rgb(184, 139, 214);
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  width: 100%;
  padding: 4px 0;
`;

const FollowBtn = styled(ProfileEditBtn)``;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f5f5f5;
  padding: 12px 0;
`;
