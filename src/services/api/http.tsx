import axios from 'axios';

import { BACKEND_SERVICE } from '../../constants/api-constants';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = BACKEND_SERVICE.baseUrl;

axiosClient.defaults.headers.common = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  //TODO: clean hardcoded: shift to hooks
  'X-Api-Key': 'AQQWy+eOS2fYyKkeSIS14w==4u3H1p6HDZjn8dn0',
};

axiosClient.defaults.timeout = 2000;

const GET = async (url: string) => {
  const response = await axiosClient.get(url);
  return response.data;
};

const POST = async (url: string, payload: any) => {
  const response = await axiosClient.post(url, payload);
  return response.data;
};

const PUT = async (url: string, payload: any) => {
  const response = await axiosClient.put(url, payload);
  return response.data;
};

const DELETE = async (url: string) => {
  const response = await axiosClient.delete(url);
  return response.data;
};

export const HttpService = {
  GET,
  POST,
  PUT,
  DELETE,
};
