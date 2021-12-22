import { atom } from 'recoil';
import { IUser } from './types';

export const userState = atom<IUser>({
  key: 'userState',
  default: {
    id: null,
    token: '',
    name: '',
    profileImageUrl: 'https://picsum.photos/200',
    cityId: null,
    cityName: '',
    regionId: null,
    regionName: '',
    auth: '',
    atelierId: null,
  },
});

export const authUserState = atom<boolean>({
  key: 'authUserState',
  default: false,
});
