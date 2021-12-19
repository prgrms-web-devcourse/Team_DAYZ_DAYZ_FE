import { atom, selector } from 'recoil';
import { LocationType } from '../types';
import { fetchLocationList } from '../utils/api/dayzApi';
import { userState } from './';
import { IModalState } from './types';

export const modalState = atom<IModalState>({
  key: 'modalState',
  default: {
    modalView: false,
  },
});

export const locationState = selector<LocationType[]>({
  key: 'locationState',
  get: async ({ get }) => {
    const user = get(userState);
    const response = await fetchLocationList(`${user.token}`);
    return response.data.data.addresses[0].regions;
  },
});
