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
    token: 'testToken123',
    name: '김영태',
    profileImageUrl: 'https://picsum.photos/200',
    cityId: 1,
    cityName: '서울시',
    regionId: 1,
    regionName: '자곡동',
    auth: 'ROLE_ATELIER',
    atelierId: 1,
  },
});
