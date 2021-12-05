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
      <Link to={to}>
        <ChevronLeft size={40} />
      </Link>
      <SearchBackButtonText> {children}</SearchBackButtonText>
    </SearchBackButtonWrapper>
  );
};

const SearchBackButtonWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 100px;
  margin-left: 20px;
`;

const SearchBackButtonText = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

export default GoBack;
