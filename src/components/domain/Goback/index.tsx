import React, { CSSProperties, ReactChild } from 'react';
import styled from '@emotion/styled';
import { ChevronLeft } from 'react-feather';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactChild;
  to: string;
  style?: CSSProperties;
}

const GoBack = ({ children, to, ...props }: Props) => {
  return (
    <SearchBackButtonWrapper>
      <Link to={to} replace={true} style={{ color: 'black' }}>
        <ChevronLeft size={30} />
      </Link>
      <SearchBackButtonText> {children}</SearchBackButtonText>
    </SearchBackButtonWrapper>
  );
};

const SearchBackButtonWrapper = styled.div`
  top: 0;
  display: flex;
  align-items: center;
  margin-top: 20px;
  box-sizing: border-box;
`;

const SearchBackButtonText = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

export default GoBack;
