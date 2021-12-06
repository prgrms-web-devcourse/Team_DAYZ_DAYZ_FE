import { ChevronRight } from 'react-feather';
import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';

interface LinkBoxProps {
  children: React.ReactNode;
  hasImage?: boolean;
  style?: CSSProperties;
}

const hasImg = (check: boolean | undefined) => {
  return check;
};

const LinkBox = ({ children, hasImage, ...props }: LinkBoxProps) => {
  return (
    <LinkContainer style={{ ...props.style }} {...props}>
      {hasImg(hasImage) ? <LinkImg /> : null}
      <div className="withoutImg">
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
  position: relative;
  margin-bottom: 10px;
  & .withoutImg {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

const LinkText = styled.span`
  font-size: 20px;
`;

const LinkImg = styled.img`
  min-width: 80px;
  min-height: 80px;
  border-radius: 16px;
  background-color: black;
  margin-right: 20px;
`;
