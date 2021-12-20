import { atom } from 'recoil';
import { IUser } from './types';

export const userState = atom<IUser>({
  key: 'userState',
  default: {
    id: 1,
    token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwcm92aWRlcklkIjoiMjAxOTk0ODQ5MSIsInJvbGVzIjpbIlJPTEVfQVRFTElFUiJdLCJpc3MiOiJkYXl6IiwiaWQiOjEsImV4cCI6MTY0NTg3Njc3NCwiaWF0IjoxNjM5ODc2Nzc0LCJ1c2VybmFtZSI6Iuq5gOyngO2biCJ9.Lgh_OY04uOBY-eEDDAlT-Mhr-pu3KKPYRWm6RB58mBDN5zDO9860JFJY2w0AEN-_YTartKTp0Gxcc6zs8WM8pA',
    name: '김영태',
    profileImageUrl: 'https://picsum.photos/200',
    cityId: 1,
    cityName: '서울시',
    regionId: 1,
    regionName: '강남구',
    auth: 'ROLE_ATELIER',
    atelierId: 1,
  },
});

export const authUserState = atom<boolean>({
  key: 'authUserState',
  default: false,
});
