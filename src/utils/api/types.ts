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
}
export interface getAtelierListsTypes extends Token {
  pageIndex: number;
  pageSize: number;

  sort: sortType;
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

export interface CategoryClass extends Token {
  categoryId: number;
}

type ClassTime = {
  data: string;
  startTime: string;
  closeTime: string;
};
type Curricurum = {
  step: number;
  content: string;
};
type Image = {
  imageUrl: string;
  sequence: number;
};

export interface UploadProduct {
  token: string;
  atelierId: number;
  name: string;
  intro: string;
  categoryId: number;
  curriculums: Curricurum[];
  images: Image[];
  classTimes: ClassTime[];
  maxPeopleNumber: number;
  price: number;
  requiredTime: string;
}

export interface FollowByUser {
  memberId: number;
  atelierId: number;
}
