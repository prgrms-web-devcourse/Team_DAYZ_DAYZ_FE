import React, { CSSProperties, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import ImageComponent, { Mode } from '../Image';

type Shape = 'circle' | 'round' | 'square';
interface Props {
  lazy?: boolean;
  threshold?: number;
  src: string;
  size: number;
  shape: Shape;
  placeholder: string;
  alt: string;
  mode?: Mode;
  style?: CSSProperties;
}

const Avatar = ({
  lazy,
  threshold,
  src,
  size = 70,
  shape = 'circle',
  placeholder,
  alt,
  mode = 'cover',
  ...props
}: Props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setLoaded(true);
  }, [src]);

  return (
    <AvatarWrapper {...props} shape={shape}>
      <ImageComponent
        block
        lazy={lazy}
        threshold={threshold}
        width={size}
        height={size}
        src={src}
        placeholder={placeholder}
        alt={alt}
        mode={mode}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </AvatarWrapper>
  );
};

Avatar.defaultProps = {
  __TYPE: 'Avatar',
};

Avatar.propTypes = {
  __TYPE: 'Avatar',
};

const ShapeToCssValue = {
  circle: '50%',
  round: '4px',
  square: '0px',
};

const AvatarWrapper = styled.div<{ shape: Props['shape'] }>`
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: ${({ shape }) => ShapeToCssValue[shape]};
  background-color: #eee;
  overflow: hidden;
  height: 100%;
  > img {
    transition: opacity 0.2s ease-out;
  }
`;
export default Avatar;
