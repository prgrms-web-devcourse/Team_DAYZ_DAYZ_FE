import React from 'react';
import styled from '@emotion/styled';
import { Avatar, Image } from '../../base';

interface Props {
  profileImg: string;
  content: string;
  uploadDate: string;
  imgList: string[];
}

const Review = () => {
  return (
    <ReviewWrapper>
      <AteliarContainer>
        <Avatar
          size={60}
          placeholder={
            'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
          }
          src={
            'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
          }
          shape={'circle'}
          alt={'profile'}
        />
        <NameWrapper>
          <div>희진 공방</div>
          <div>Date</div>
        </NameWrapper>
      </AteliarContainer>
      <ContentsContainer>
        <ContentWrapper>
          도자기 좋아요~ 도자기 좋아요~ 도자기 좋아요~도자기 좋아요~ 도자기 좋아요~ 도자기
          좋아요~도자기 좋아요~ 도자기 좋아요~ 도자기 좋아요~도자기 좋아요~ 도자기 좋아요~ 도자기
          좋아요~도자기 좋아요~ 도자기 좋아요~ 도자기 좋아요~
        </ContentWrapper>
        <ImageWrapper>
          <Image
            lazy
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnKvFqnhspQFrblkvMfVhGZ8GvfjihBNqjw&usqp=CAU'
            }
            placeholder={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnKvFqnhspQFrblkvMfVhGZ8GvfjihBNqjw&usqp=CAU'
            }
            width={100}
            height={100}
            alt={'image'}
            mode={'cover'}
            style={{ borderRadius: '15px' }}
          />
        </ImageWrapper>
      </ContentsContainer>
    </ReviewWrapper>
  );
};

const ReviewWrapper = styled.div`
  width: 90%;
  background-color: #eee;
  margin-top: 20px;
  border-top: 2px solid #aaa;
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
