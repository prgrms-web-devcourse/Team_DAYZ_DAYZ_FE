import { atom } from 'recoil';
import { IModalState } from './types';

export const modalState = atom<IModalState>({
  key: 'modalState',
  default: {
    modalView: false,
  },
});
