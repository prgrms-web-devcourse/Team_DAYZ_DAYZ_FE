export interface IUser {
  id: number | null;
  token: string;
  name: string;
  profileImageUrl: string;
  cityId: number | null;
  cityName: string;
  regionId: number | null;
  regionName: string;
  auth: 'ROLE_ATELIER' | 'ROLE_USER' | '';
  atelierId: number | null;
}

export interface INavigation {
  topNavigation: boolean;
  bottomNavigation: boolean;
}

export interface IModalState {
  modalView: boolean;
}
