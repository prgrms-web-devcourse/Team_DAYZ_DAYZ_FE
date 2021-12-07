import React from 'react';
import styled from '@emotion/styled';
import { Avatar, Text } from '../../base';

interface Props {
  profileImg: string;
  name: string;
  location: string;
  phoneNumber: string;
  openTime: string;
}

const AteliarInformation = ({ profileImg, name, location, phoneNumber, openTime }: Props) => {
  return (
    <AteliarContainer>
      <Avatar size={80} src={profileImg} shape={'circle'} placeholder={''} alt={'profile'} />
      <ContentWrapper>
        <StyledText strong>{name}</StyledText>
        <StyledText>{location}</StyledText>
        <StyledText>{phoneNumber}</StyledText>
        <StyledText>{openTime}</StyledText>
      </ContentWrapper>
    </AteliarContainer>
  );
};

const AteliarContainer = styled.div`
  display: flex;
  margin: 20px 40px;
`;
const ContentWrapper = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
`;
const StyledText = styled(Text)`
  font-size: 18px;
  margin: 5px 0;
`;
export default AteliarInformation;
