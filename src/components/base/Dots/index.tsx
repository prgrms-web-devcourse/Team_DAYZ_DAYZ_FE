import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';
import { MdImageSearch } from 'react-icons/md';

interface DotsProps {
  images?: any;
  style?: CSSProperties;
  index?: number;
}

const Dots = ({ images, style, index }: DotsProps) => {
  return (
    <DotsWrapper>
      {images.length > 1
        ? images.map((img: any, idx?: number) => (
            <Dot
              key={img}
              style={index === idx ? { backgroundColor: 'red' } : { backgroundColor: 'blue' }}
            />
          ))
        : ''}
    </DotsWrapper>
  );
};

const DotsWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  z-index: 500;
`;
const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  margin: 5px;
`;
export default Dots;
