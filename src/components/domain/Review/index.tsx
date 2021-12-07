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
      <AteliarWrapper>
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
        <div>
          <div>희진 공방</div>
          <div>Date</div>
        </div>
      </AteliarWrapper>
      <ContentWrapper>도자기 좋아요~ 도자기 좋아요~ 도자기 좋아요~</ContentWrapper>
      <ImageWrapper>
        <Image
          lazy
          src={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnKvFqnhspQFrblkvMfVhGZ8GvfjihBNqjw&usqp=CAU'
          }
          width={100}
          height={100}
          alt={'image'}
          mode={'cover'}
        />
      </ImageWrapper>
    </ReviewWrapper>
  );
};

const ReviewWrapper = styled.div`
  width: 90%;
  background-color: #eee;
  margin: 20px 0;
  border-top: 2px solid #aaa;
  padding-top: 20px;
`;

const AteliarWrapper = styled.div`
  display: flex;
`;
const ContentWrapper = styled.div`
  margin: 10px 0;
`;

const ImageWrapper = styled.div`
  display: flex;
  margin: 10px 0;
`;
export default Review;
