import styled from '@emotion/styled';
import { Home, Grid, Search } from 'react-feather';

/* eslint-disable react/react-in-jsx-scope */
const Navigator = () => {
  return (
    <NavWrapper>
      <IconWrapper>
        <Home size={30} />
      </IconWrapper>
      <IconWrapper>
        <Grid size={30} />
      </IconWrapper>
      <IconWrapper>
        <Search size={30} />
      </IconWrapper>
      <IconWrapper>
        <UserProfile />
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
`;

const IconWrapper = styled.div`
  margin: 30px;
`;
export default Navigator;
