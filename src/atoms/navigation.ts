import { atom } from 'recoil';
import { INavigation } from './types';

export const navigationState = atom<INavigation>({
  key: 'navigationState',
  default: {
    topNavigation: true,
    bottomNavigation: true,
  },
});
