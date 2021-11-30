/* eslint-disable react/react-in-jsx-scope */
import styled from '@emotion/styled';
import { Bell, ChevronDown } from 'react-feather';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>DAYZ</Title>

      <Link to="/location" style={{ textDecoration: 'none' }}>
        <Location>
          <div>서울시 송파구</div>
          <ChevronDown size={20} color="#f5f5f5" />
        </Location>
      </Link>

      <BellIcon>
        <Bell size={20} color="#f5f5f5" />
      </BellIcon>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: fix;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 95px;
  background: linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%);
  position: relative;
`;

const Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 30px;
  font-weight: 700;
  color: #f5f5f5;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const Location = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #f5f5f5;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const BellIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export default Header;
