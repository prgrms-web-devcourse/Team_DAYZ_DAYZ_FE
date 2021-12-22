import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';
import { Layout, Calendar, Star, Phone, Home, Clock } from 'react-feather';
import { Avatar } from '../../components/base';
import { RoutePath } from '.';
import { followByUser, getAtelierDetail } from '../../utils/api/dayzApi';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms';
import Loader from 'react-loader-spinner';
import { FollowByUser } from '../../utils/api/types';

interface AtelierProps {
  address: string;
  atelierId: number;
  callNumber: string;
  endTime: string;
  imageUrl: string;
  intro: string;
  name: string;
  startTime: string;
}

const WorkshopHeader = () => {
  const ICON_SIZE = 26;
  const user = useRecoilValue(userState);
  const { id } = useParams<{ id: string }>();
  const [atelierData, setAtelierData] = useState<AtelierProps>();
  const [isLoading, setIsLoading] = useState(atelierData == null);
  const [isFollowed, setIsFollowed] = useState(false);
  const getAsyncAtelierDetail = useCallback(async () => {
    const response = await getAtelierDetail(user.token, id);
    if (response.status === 200) {
      setAtelierData({ ...response.data.data });
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getAsyncAtelierDetail();
  }, [getAsyncAtelierDetail]);

  const followClick = async () => {
    const token = user.token;
    const id: FollowByUser = {
      memberId: user.id as number,
      atelierId: atelierData!.atelierId,
    };
    const res = await followByUser(token, id);
    res.status === 200 && setIsFollowed(!res.data.data.followingFlag);
  };

  const formatPhoneNum = (num: string) => {
    return num?.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, '$1-$2-$3');
  };

  return isLoading ? (
    <LoaderContainer>
      <Loader type="Oval" color="#B88BD6" height={80} width={80} />
    </LoaderContainer>
  ) : (
    <>
      <InfoContainer>
        <WorkshopProfile>
          <Avatar
            size={80}
            alt={'profile'}
            shape={'circle'}
            src={atelierData!.imageUrl}
            placeholder={'https://via.placeholder.com/150'}
          />
          <ContentsWrapper>
            <span style={{ fontSize: '18px', fontWeight: '600' }}>{atelierData?.name}</span>
            <span style={{ margin: '10px 0' }}>{atelierData?.intro}</span>
            <InfoDetailContainer>
              <Home size={12} /> <span>{atelierData?.address}</span>
            </InfoDetailContainer>
            <InfoDetailContainer>
              <Phone size={12} /> <span>{formatPhoneNum(atelierData!.callNumber)}</span>
            </InfoDetailContainer>
            <InfoDetailContainer>
              <Clock size={12} />{' '}
              <span>
                {atelierData?.startTime} - {atelierData?.endTime}
              </span>
            </InfoDetailContainer>
          </ContentsWrapper>
        </WorkshopProfile>
        {user.auth === 'ROLE_USER' ? (
          isFollowed ? (
            <FollowedBtn>언팔로우</FollowedBtn>
          ) : (
            <FollowBtn onClick={followClick}>팔로우</FollowBtn>
          )
        ) : (
          <Link to={RoutePath.Setting(id)} style={{ textDecoration: 'none', color: 'black' }}>
            <ProfileEditBtn>프로필 수정</ProfileEditBtn>
          </Link>
        )}
      </InfoContainer>

      <Tabs>
        <Link to={RoutePath.Workshop(id)} style={{ textDecoration: 'none', color: 'black' }}>
          <Layout size={`${ICON_SIZE}px`} />
        </Link>
        <Link to={RoutePath.ProductList(id)} style={{ textDecoration: 'none', color: 'black' }}>
          <Calendar size={`${ICON_SIZE}px`} />
        </Link>
        <Link to={RoutePath.ReviewList(id)} style={{ textDecoration: 'none', color: 'black' }}>
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
const FollowedBtn = styled(ProfileEditBtn)`
  background: #80808099;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f5f5f5;
  padding: 12px 0;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;
