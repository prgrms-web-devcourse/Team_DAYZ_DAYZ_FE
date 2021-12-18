import { atom } from 'recoil';
import { IUser } from './types';

export const userState = atom<IUser>({
  key: 'userState',
  default: {
    id: 1,
    token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwcm92aWRlcklkIjoiMjAxOTk0ODQ5MSIsInJvbGVzIjpbIlJPTEVfVVNFUiJdLCJpc3MiOiJkYXl6IiwiaWQiOjEsImV4cCI6MTY0NTgxMDIzMiwiaWF0IjoxNjM5ODEwMjMyLCJ1c2VybmFtZSI6Iuq5gOyngO2biCJ9.Fu8MGkkoC_sXTdtoQbpWtd7Mh5mkunVz7le0jfzMoXcHdG0bdxY7F6EZ8uHpWhUnHRrPKfdhRZStli-ibjhQLg',
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

export const authUserState = atom<boolean | null>({
  key: 'authUserState',
  default: null,
});
