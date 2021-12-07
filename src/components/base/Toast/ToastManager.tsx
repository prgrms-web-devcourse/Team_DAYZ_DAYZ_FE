import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { CreateToast } from '.';
import ToastItem from './ToastItem';

const initialToast = {
  message: '',
  duration: 0,
};

interface Props {
  bind: (createToast: CreateToast) => void;
}

const ToastManager = ({ bind }: Props) => {
  const [toasts, setToasts] = useState(initialToast);

  const createToast = useCallback((message, duration) => {
    const newToast = {
      message,
      duration,
    };
    setToasts(() => newToast);
  }, []);

  const removeToast = useCallback(() => {
    setToasts(() => initialToast);
  }, []);

  useEffect(() => {
    bind(createToast);
  }, [bind, createToast]);

  return (
    <Container>
      {toasts.message && (
        <ToastItem
          message={toasts.message}
          duration={toasts.duration}
          onDone={() => removeToast()}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 3500;
`;

export default ToastManager;
