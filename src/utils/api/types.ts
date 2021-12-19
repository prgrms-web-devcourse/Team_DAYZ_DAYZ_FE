export interface Token {
  token: string;
}

export interface Email {
  email: string;
  password: string;
}
export interface Location {
  cityId: number;
  regionId: number;
}

type sortType = {
  column: string;
  order: string;
};
export interface AtelierClass extends Token {
  atelierId: number;
  pageIndex: number;
  pageSize: number;
  sort: sortType;
}

export interface searhClassTypes extends Token {
  keyword: string;
  pageIndex: number;
  pageSize: number;
  sort: sortType;
}

<<<<<<< HEAD
export interface AtelierInfo {
  name: string;
  businessNumber: string;
  intro: string;
  address: Address;
  workStartTime: string;
  workEndTime: string;
  callNumber: string;
}

export interface Address {
  cityId: number;
  regionId: number;
  detail: string;
=======
export interface getAtelierListsTypes extends Token {
  pageIndex: number;
  pageSize: number;

  sort: sortType;
>>>>>>> 9797fc5 (Feat: 홈페이지 신규 공방 조회)
}

export interface ClassTimesType extends Token {
  classId: number;
  date: string;
}

export interface ReservationsType extends Token {
  classTimeId: number;
  price: number;
  peopleNumber: number;
}
