import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Home, Grid, Search, Circle } from 'react-feather';

/* eslint-disable react/react-in-jsx-scope */
const Navigator = () => {
  return (
    <NavWrapper>
      <Link to="/" style={{ textDecoration: 'none', marginLeft: '20px' }}>
        <IconWrapper>
          <Home size={30} />
          <IconDescription>메인화면</IconDescription>
        </IconWrapper>
      </Link>

      <Link to="/feed" style={{ textDecoration: 'none' }}>
        <IconWrapper>
          <Grid size={30} />
          <IconDescription>피드</IconDescription>
        </IconWrapper>
      </Link>

      <Link to="/search" style={{ textDecoration: 'none' }}>
        <IconWrapper>
          <Search size={30} />
          <IconDescription>검색하기</IconDescription>
        </IconWrapper>
      </Link>

      <Link to="/" style={{ textDecoration: 'none', marginRight: '20px' }}>
        <IconWrapper>
          <Circle size={30} />
          <IconDescription>내정보</IconDescription>
        </IconWrapper>
      </Link>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  position: fix;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 95px;
  border-top: solid 1px #c4c4c4;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconWrapper = styled.div`
  align-items: center;
  text-align: center;
  width: 100%;
  color: black;
`;
const IconDescription = styled.div`
  font-size: 16px;
`;
export default Navigator;
