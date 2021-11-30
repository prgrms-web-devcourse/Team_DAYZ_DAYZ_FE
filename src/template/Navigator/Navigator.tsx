import styled from '@emotion/styled';
import { Home, Grid, Search, Circle } from 'react-feather';

/* eslint-disable react/react-in-jsx-scope */
const Navigator = () => {
  return (
    <NavWrapper>
      <IconWrapper>
        <Home size={30} />
        <IconDescription>메인 화면</IconDescription>
      </IconWrapper>
      <IconWrapper>
        <Grid size={30} />
        <IconDescription>피드</IconDescription>
      </IconWrapper>
      <IconWrapper>
        <Search size={30} />
        <IconDescription>검색 하기</IconDescription>
      </IconWrapper>
      <IconWrapper>
        <Circle size={30} />
        <IconDescription>내 정보</IconDescription>
      </IconWrapper>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  position: fix;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 95px;
  border-top: solid 1px #c4c4c4;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserProfile = styled.div`
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 50%;
  align-items: center;
  text-align: center;
`;

const IconWrapper = styled.div`
  align-items: center;
  text-align: center;
  width: 100%;
`;
const IconDescription = styled.div`
  font-size: 16px;
`;
export default Navigator;
