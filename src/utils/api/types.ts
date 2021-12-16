export interface Token {
  token: string;
}

export interface Email {
  email: string;
  password: string;
}
export interface Location {
  token: string;
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
