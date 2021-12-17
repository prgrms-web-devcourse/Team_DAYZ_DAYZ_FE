import React, { Suspense, useState } from 'react';
import styled from '@emotion/styled';
import { Bell, ChevronDown } from 'react-feather';
import { Modal } from '../../components/base';
import { LocationSetting } from '../../components/domain';
import { useRecoilValue } from 'recoil';
import { modalState, userState } from '../../atoms';

const Header = () => {
  const [visible, setVisible] = useState(false);
  const userInfo = useRecoilValue(userState);
  const { modalView } = useRecoilValue(modalState);

  return (
    <HeaderWrapper>
      <Title>DAYZ</Title>

      {modalView && (
        <>
          <Location onClick={() => setVisible(true)}>
            <div>{`${userInfo.cityName}` + ' ' + `${userInfo.regionName}`}</div>
            <ChevronDown size={20} color="#f5f5f5" />
          </Location>
          <Modal visible={visible} onClose={() => setVisible(false)} width={'100%'} height={'70%'}>
            <LocationSetting setVisible={setVisible} />
          </Modal>
        </>
      )}

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
  cursor: pointer;
`;
const BellIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 15px;
  margin-right: 15px;
`;
export default Header;
