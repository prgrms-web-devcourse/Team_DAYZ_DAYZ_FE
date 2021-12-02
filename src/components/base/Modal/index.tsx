import React, { CSSProperties, ReactNode } from 'react';
import styled from '@emotion/styled';
import { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { useClickAway } from '../../../hooks';

interface Props {
  children: ReactNode;
  width: string;
  height: string;
  visible: boolean;
  style?: CSSProperties;
  onClose: () => void;
}

const Modal = ({ children, width, height, visible = false, onClose, ...props }: Props) => {
  const ref = useClickAway<HTMLDivElement>(() => {
    onClose && onClose();
  });

  const containerStyle = useMemo(
    () => ({
      width,
      height,
    }),
    [width, height],
  );

  const el = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  });

  return ReactDOM.createPortal(
    <BackgroundDim style={{ display: visible ? 'block' : 'none' }}>
      <ModalContainer ref={ref} {...props} style={{ ...props.style, ...containerStyle }}>
        {children}
      </ModalContainer>
    </BackgroundDim>,
    el,
  );
};

const BackgroundDim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  max-width: 640px;
  padding: 8px;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  overflow-y: auto;
`;

export default Modal;
