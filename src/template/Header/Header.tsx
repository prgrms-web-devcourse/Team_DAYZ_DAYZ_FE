import React, { ChangeEvent, MouseEvent, useState } from 'react';
import styled from '@emotion/styled';
import { Bell, ChevronDown } from 'react-feather';
import { Link } from 'react-router-dom';
import { Modal } from '../../components/base';
import { LocationSetting } from '../../components/domain';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/atom';

const Header = () => {
  const [visible, setVisible] = useState(false);
  const userInfo = useRecoilValue(userState);

  return (
    <HeaderWrapper>
      <Title>DAYZ</Title>

      <Location onClick={() => setVisible(true)}>
        <div>{`${userInfo.cityName}` + ' ' + `${userInfo.regionName}`}</div>
        <ChevronDown size={20} color="#f5f5f5" />
      </Location>

      <Modal visible={visible} onClose={() => setVisible(false)} width={'100%'} height={'70%'}>
        <LocationSetting />
        {/* UI로 보이는 관심지역은 회원 기본정보로 가져옴 */}
      </Modal>

      <BellIcon>
        <Bell size={20} color="#f5f5f5" />
      </BellIcon>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 60px;
  background: linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%);
  z-index: 1000;
`;

const Title = styled.h1`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 30px;
  font-weight: 700;
  color: #f5f5f5;
  margin-bottom: 13px;
  margin-left: 15px;
`;

const Location = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #f5f5f5;
  margin-bottom: 18px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const BellIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 15px;
  margin-right: 15px;
`;
export default Header;
