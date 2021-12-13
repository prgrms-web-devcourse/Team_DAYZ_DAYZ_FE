import React from 'react';
import styled from '@emotion/styled';
import { Avatar, Image } from '../../base';

interface Props {
  profileImg: string;
  ateliarName: string;
  content: string;
  uploadDate: string;
  imgList: string[];
}

const Review = ({ profileImg, ateliarName, content, uploadDate, imgList }: Props) => {
  return (
    <ReviewWrapper>
      <AteliarContainer>
        <Avatar
          size={60}
          placeholder={'https://via.placeholder.com/150'}
          src={profileImg}
          shape={'circle'}
          alt={'profile'}
        />
        <NameWrapper>
          <div>{ateliarName}</div>
          <div>{uploadDate}</div>
        </NameWrapper>
      </AteliarContainer>
      <ContentsContainer>
        <ContentWrapper>{content}</ContentWrapper>
        <ImageWrapper>
          {imgList.map((img) => (
            <Image
              lazy
              src={img}
              placeholder={'https://via.placeholder.com/150'}
              width={100}
              height={100}
              alt={'image'}
              mode={'cover'}
              style={{ borderRadius: '15px' }}
              key={img}
            />
          ))}
        </ImageWrapper>
      </ContentsContainer>
    </ReviewWrapper>
  );
};

const ReviewWrapper = styled.div`
  width: 90%;

  margin-bottom: 20px;
  border-top: 1px solid #c4c4c4;
  padding-top: 20px;
`;

const AteliarContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;
const NameWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const ContentsContainer = styled.div`
  margin: 0 25px;
`;

const ContentWrapper = styled.div`
  margin: 10px 0;
`;

const ImageWrapper = styled.div`
  display: flex;
  margin: 10px 0;
`;
export default Review;
