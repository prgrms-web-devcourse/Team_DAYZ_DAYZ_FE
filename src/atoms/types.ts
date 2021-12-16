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

export interface INavigation {
  topNavigation: boolean;
  bottomNavigation: boolean;
}

export interface IModalState {
  modalView: boolean;
}
