export interface IUser {
  id: number;
  token: string;
  name: string;
  profileImageUrl: string;
  cityId: number;
  cityName: string;
  regionId: number;
  regionName: string;
  auth: 'ROLE_ATELIER' | 'ROLE_USER';
  atelierId: number;
}

export interface INavigation {
  topNavigation: boolean;
  bottomNavigation: boolean;
}

export interface IModalState {
  modalView: boolean;
}
