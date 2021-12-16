import React from 'react';
import styled from '@emotion/styled';
import { Plus } from 'react-feather';
import { setImageUpload } from '../../../utils/api/dayzApi';

interface Props {
  imgSrcArray: any;
  setImgSrcArray: (T: any) => void;
}

const CustomImageUpload = ({ imgSrcArray, setImgSrcArray }: Props) => {
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const image = e.target.files[0];
      console.log(image);
      const { status, data } = await setImageUpload(image);
      if (status === 200) {
        setImgSrcArray((prev: any) => [...prev, data.data.imageUrl]);
      }
    }
  };

  return (
    <UploadContainer>
      <Input type="file" accept="image/*" id="addImage" onChange={handleChange} />
      <ImageWrapper>
        {imgSrcArray.length
          ? imgSrcArray.map((imgSrc: string, index: number) => (
              <img key={index} src={imgSrc} style={{ width: '200px', paddingRight: '20px' }} />
            ))
          : ''}
        <StyledLabel htmlFor="addImage">
          <Plus style={{ color: '#f5f5f5', cursor: 'pointer' }} size={40} />
        </StyledLabel>
      </ImageWrapper>
    </UploadContainer>
  );
};

const UploadContainer = styled.div`
  width: 100%;
  display: inline-block;
`;
const Input = styled.input`
  display: none;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  overflow-x: auto;
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledLabel = styled.label`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export default CustomImageUpload;
