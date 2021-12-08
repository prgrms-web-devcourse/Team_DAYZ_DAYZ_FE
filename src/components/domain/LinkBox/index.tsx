import { ChevronRight } from 'react-feather';
import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';

interface LinkBoxProps {
  children: React.ReactNode;
  src?: string;
  style?: CSSProperties;
}

const checkHasImage = (str: string | undefined) => {
  return str;
};

const LinkBox = ({ children, src, ...props }: LinkBoxProps) => {
  return (
    <LinkContainer style={{ ...props.style }} {...props}>
      {checkHasImage(src) ? <LinkImg src={src} /> : null}
      <div>
        <LinkText>{children}</LinkText>
        <ChevronRight size={40} />
      </div>
    </LinkContainer>
  );
};
export default LinkBox;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px #c4c4c4;
  border-radius: 16px;
  padding: 10px 20px;
  color: black;
  margin-bottom: 10px;
  transition: border 0.2s;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  &:hover {
    border: solid 1px black;
  }
`;

const LinkText = styled.span`
  font-size: 20px;
`;

const LinkImg = styled.img`
  min-width: 80px;
  min-height: 80px;
  max-width: 80px;
  max-height: 80px;
  border-radius: 16px;
  background-color: black;
  margin-right: 20px;
`;
