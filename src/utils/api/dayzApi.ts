import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';
import { API_METHOD } from '../../constants/apiConstant';
import { AtelierClass, Email, Location, Token, searhClassTypes, AtelierInfo } from './types';

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

export const checkAuthorizationUser = ({ token }: Token) => {
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
