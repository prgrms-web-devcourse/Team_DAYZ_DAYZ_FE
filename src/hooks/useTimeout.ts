import { useEffect } from 'react';
import useTimeoutFn from './useTimeoutFn';

const useTimout = (fn: () => void, ms: number) => {
  const [run, clear] = useTimeoutFn(fn, ms);

  useEffect(() => {
    run();
    return clear;
  }, [run, clear]);

  return clear;
};

export default useTimout;
