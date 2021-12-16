import { atom } from 'recoil';
import { IUser } from './types';

export const userState = atom<IUser>({
  key: 'userState',
  default: {
    id: 1,
    token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwcm92aWRlcklkIjoiMjAxOTk0ODQ5MSIsInJvbGVzIjpbIlJPTEVfVVNFUiJdLCJpc3MiOiJkYXl6IiwiaWQiOjEsImV4cCI6MTY0MDI1OTM3MiwiaWF0IjoxNjM5NjU5MzcyLCJ1c2VybmFtZSI6Iuq5gOyngO2biCJ9.0Sa7pVPF0T9zTZ-3J27zT_g3cK0qQCB-cIxCwa97DlffDRWpzdNsI15XHeImS3mGxTRHs_bSEKN-kTCojlkKSA',
    name: '김영태',
    profileImageUrl: 'https://picsum.photos/200',
    cityId: 1,
    cityName: '서울시',
    regionId: 1,
    regionName: '강남구',
    auth: 'ROLE_ATELIER', // ROLE_USER
    atelierId: 1,
  },
});
