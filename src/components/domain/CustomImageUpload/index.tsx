import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Plus } from 'react-feather';

interface Props {
  children: ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

const CustomImageUpload = ({ children, onChange }: Props) => {
  return (
    <UploadContainer>
      <Input type="file" accept="image/*" id="addImage" onChange={onChange} />
      <ImageWrapper>
        {children}
        <label
          htmlFor="addImage"
          style={{
            width: '50px',
            height: '50px',
            background: 'linear-gradient(135deg, #b88bd6 0%, #b88bd6 0.01%, #a8bac8 100%)',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          <Plus style={{ color: '#f5f5f5', cursor: 'pointer' }} size={40} />
        </label>
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

export default CustomImageUpload;
