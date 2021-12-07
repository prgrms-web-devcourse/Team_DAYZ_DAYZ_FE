import { useCallback, useState } from 'react';

const useToggle = (initialState = false): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState);
  const toggle: boolean | (() => void) = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

export default useToggle;
