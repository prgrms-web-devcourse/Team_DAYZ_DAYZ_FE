import { atom } from 'recoil';

export interface IUser {
  id: number;
  token: string;
  name: string;
  profileImageUrl: string;
  cityId: number;
  cityName: string;
  regionId: number;
  regionName: string;
  auth: string;
  atelierId: number;
}

export const userState = atom<IUser>({
  key: 'user',
  default: {
    id: 1,
    token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwcm92aWRlcklkIjoiMjAxOTk0ODQ5MSIsInJvbGVzIjpbIlJPTEVfVVNFUiJdLCJpc3MiOiJkYXl6IiwiaWQiOjEsImV4cCI6MTYzOTY5NTcyNywiaWF0IjoxNjM5NjM1NzI3LCJ1c2VybmFtZSI6Iuq5gOyngO2biCJ9.FQzVvgKIFuxNG9WCMpylnIyc9GnAcoOxLzy6QU5yaWqGddOu43f0WtD3fCvD-X4HwNVGK5Sxk1sDfJGoXhyDjg',
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
