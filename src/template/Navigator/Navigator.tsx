import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Home, Grid, Search, Circle, Plus } from 'react-feather';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/atom';

const Navigator = () => {
  const user = useRecoilValue(userState);

  const navIcons = [
    {
      to: '/',
      Icon: Home,
      contents: '메인화면',
    },
    {
      to: '/feed',
      Icon: Grid,
      contents: '피드',
    },
    user.auth === 'ROLE_ATELIER'
      ? {
          to: '/upload/feed',
          Icon: Plus,
          contents: '업로드',
        }
      : {
          to: '/search',
          Icon: Search,
          contents: '검색하기',
        },
    {
      to: '/user/:id',
      Icon: Circle,
      contents: '내정보',
    },
  ];

  return (
    <NavWrapper>
      {navIcons.map(({ to, Icon, contents }) => (
        <Link to={to} key={to} style={{ textDecoration: 'none' }}>
          <IconWrapper>
            <Icon size={30} />
            <IconDescription>{contents}</IconDescription>
          </IconWrapper>
        </Link>
      ))}
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  height: 65px;
  width: 100%;
  border-top: solid 1px #c4c4c4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-sizing: border-box;
  padding: 0 10px;
  z-index: 1000;
`;

const IconWrapper = styled.div`
  text-align: center;
  width: 100%;
  color: black;
`;
const IconDescription = styled.div`
  font-size: 16px;
`;
export default Navigator;
