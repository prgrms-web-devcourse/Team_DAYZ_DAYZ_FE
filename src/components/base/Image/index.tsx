import React, { useState, useRef, useEffect, CSSProperties } from 'react';
import PropTypes from 'prop-types';

let observer = null;
const LOAD_IMG_EVENT_TYPE = 'loadImage';

export type Mode = 'cover' | 'fill' | 'contain';
interface Props {
  lazy?: boolean;
  threshold?: number;
  placeholder?: string;
  src: string;
  block?: boolean;
  width: number;
  height: number;
  alt: string;
  mode: Mode;
  style?: CSSProperties;
}

const onIntersection = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
    }
  });
};

const Image = ({
  lazy,
  threshold = 0.5,
  placeholder,
  src,
  block,
  width,
  height,
  alt,
  mode,
  ...props
}: Props) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const imageStyle = {
    display: block ? 'block' : undefined,
    width,
    height,
    objectFit: mode, // cover, fill, contain
  };

  useEffect(() => {
    if (!lazy) {
      setLoaded(true);
      return;
    }

    const handleLoadImage = () => setLoaded(true);

    const imgElement = imgRef.current;
    imgElement && imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
    return () => {
      imgElement && imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
    };
  }, [lazy]);

  useEffect(() => {
    if (!lazy) return;

    observer = new IntersectionObserver(onIntersection, { threshold });
    imgRef.current && observer.observe(imgRef.current);
  }, [lazy, threshold]);

  return (
    <img
      ref={imgRef}
      src={loaded ? src : placeholder}
      alt={alt}
      style={{ ...props.style, ...imageStyle }}
    />
  );
};

Image.propTypes = {
  lazy: PropTypes.bool,
  threshold: PropTypes.number,
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alt: PropTypes.string,
  mode: PropTypes.string,
};

export default Image;
