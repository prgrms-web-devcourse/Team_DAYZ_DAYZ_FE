import axios, { AxiosRequestConfig } from 'axios';
import { API_METHOD } from '../../constants/apiConstant';
import { AtelierClass, Email, Location } from './types';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = process.env.REACT_APP_DAYZ_API_END_POINT;

const request = async (config: AxiosRequestConfig) => {
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

// 예시2. token을 사용해야 할 경우
export const requiredtoken = (token: string) => {
  return request({
    method: API_METHOD.GET,
    url: `/main`,
    headers: {
      Authorization: token,
    },
  });
};
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwcm92aWRlcklkIjoiMjAxOTk0ODQ5MSIsInJvbGVzIjpbIlJPTEVfVVNFUiJdLCJpc3MiOiJkYXl6IiwiaWQiOjEsImV4cCI6MTYzOTcxMDg4OSwiaWF0IjoxNjM5NjUwODg5LCJ1c2VybmFtZSI6Iuq5gOyngO2biCJ9.nbpdnrbHM2T7mpuwk2Iif_ekPxMBN5fqcFxVne0R546Ix2k6kEMt-F53Wc01q1wVG7wtrMwT3TyGOYLE2sYCpw';

export const setImageUpload = (data: File) => {
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

export const setLocation = ({ token, cityId, regionId }: Location) => {
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
