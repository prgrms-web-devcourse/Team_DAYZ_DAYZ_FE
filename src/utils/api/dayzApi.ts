import axios, { AxiosRequestConfig } from 'axios';
import { IUser } from '../../atoms/types';
import { API_METHOD } from '../../constants/apiConstant';
import {
  AtelierClass,
  Email,
  Location,
  Token,
  searhClassTypes,
  AtelierInfo,
  getAtelierListsTypes,
  ClassTimesType,
  ReservationsType,
  CategoryClass,
} from './types';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = process.env.REACT_APP_DAYZ_API_END_POINT;

const request = (config: AxiosRequestConfig) => {
  return axiosInstance(config);
};

// 예시1. 데이터를 불러올
export const something = ({ email, password }: Email) => {
  return request({
    method: API_METHOD.GET,
    url: `/login`,
    data: {
      email,
      password,
    },
  });
};

export const checkAuthorizationUser = (token: string) => {
  return request({
    method: API_METHOD.GET,
    url: '/api/v1/members/info',
    headers: {
      Authorization: token,
    },
  });
};

export const setImageUpload = (data: File, token: string) => {
  const formData = new FormData();
  formData.append('files', data);

  return request({
    method: API_METHOD.POST,
    url: `/api/v1/images`,
    data: formData,
    headers: {
      Authorization: token,
      'Content-Type': `multipart/form-data`,
    },
  });
};
export const fetchLocationList = (token: string) => {
  return request({
    method: API_METHOD.GET,
    url: '/api/v1/addresses',
    headers: {
      Authorization: token,
    },
  });
};

export const setLocation = (token: string, { cityId, regionId }: Location) => {
  return request({
    method: API_METHOD.POST,
    url: '/api/v1/members/address',
    headers: {
      Authorization: token,
    },
    data: {
      cityId,
      regionId,
    },
  });
};

export const getAtelierClasses = ({
  atelierId,
  pageIndex,
  pageSize,
  sort,
  token,
}: AtelierClass) => {
  return request({
    method: API_METHOD.GET,
    url: `api/v1/classes/ateliers/${atelierId}`,
    headers: {
      Authorization: token,
      'Content-Type': `application/json`,
    },
    data: {
      atelierId,
      pageIndex,
      pageSize,
      sort,
    },
  });
};

export const setAtelierInfo = async (token: string, atelierInfo: AtelierInfo) => {
  return request({
    method: API_METHOD.POST,
    url: '/api/v1/ateliers',
    headers: {
      Authorization: token,
    },
    data: atelierInfo,
  });
};

export const searchClasses = ({ keyword, pageIndex, pageSize, sort, token }: searhClassTypes) => {
  return request({
    method: API_METHOD.GET,
    url: `api/v1/classes/search?keyWord=${keyword}`,
    headers: {
      Authorization: token,
    },
    data: {
      pageIndex,
      pageSize,
      sort,
    },
  });
};

export const fetchUser = async (token: string): Promise<IUser | null> => {
  try {
    const res = await request({
      method: API_METHOD.GET,
      url: '/api/v1/members/info',
      headers: {
        Authorization: token,
      },
    });
    return res.data as IUser;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getPopularClasses = (token: string) => {
  return request({
    method: API_METHOD.GET,
    url: '/api/v1/classes/popular',
    headers: {
      Authorization: token,
    },
  });
};

export const getAtelierLists = (token: string) => {
  return request({
    method: API_METHOD.GET,
    url: '/api/v1/ateliers',
    headers: {
      Authorization: token,
    },
    params: {
      pageIndex: 0,
      pageSize: 5,

      column: 'createdAt',
      order: 'ASC',
    },
  });
};

export const getClassTimes = async ({ token, classId, date }: ClassTimesType) => {
  return request({
    method: API_METHOD.GET,
    url: `api/v1/classtimes/classes/${classId}?date=${date}`,
    headers: {
      Authorization: token,
    },
  });
};

export const setReservations = async ({
  classTimeId,
  price,
  peopleNumber,
  token,
}: ReservationsType) => {
  return request({
    method: API_METHOD.POST,
    url: 'api/v1/reservations',
    data: {
      classTimeId,
      price,
      peopleNumber,
    },
    headers: {
      Authorization: token,
    },
  });
};

export const getCategoryClasses = async ({ categoryId, token }: CategoryClass) => {
  return request({
    method: API_METHOD.GET,
    url: `api/v1/classes/categories/${categoryId}`,
    headers: {
      Authorization: token,
    },
    params: {
      pageIndex: 0,
      pageSize: 5,
      column: 'createdAt',
      order: 'ASC',
    },
  });
};

export const getBookingData = async ({ token }: Token) => {
  return request({
    method: API_METHOD.GET,
    url: 'api/v1/reservations',
    headers: {
      Authorization: token,
    },
    params: {
      pageIndex: 0,
      pageSize: 10,
      column: 'id',
      order: 'ASC',
    },
  });
};

export const fetchProductById = async (token: string, id: number) => {
  try {
    const res = await request({
      method: API_METHOD.GET,
      url: `api/v1/classes/${id}`,
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchProductReviewById = async (token: string, id: number) => {
  try {
    const res = await request({
      method: API_METHOD.GET,
      url: `api/v1/reviews/classes/${id}`,
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
