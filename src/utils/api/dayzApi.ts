import axios, { AxiosRequestConfig } from 'axios';
import { API_METHOD } from '../constants/apiConstant';
import { Email } from './types';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = process.env.DAYZ_API_END_POINT;

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
      authorization: `Bearer ${token}`,
    },
  });
};
