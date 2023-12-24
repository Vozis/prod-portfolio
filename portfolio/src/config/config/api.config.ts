import axios from 'axios';
import process from 'process';

export const API_URL = `${process.env.APP_SERVER_URL}/api`;

const getContentType = () => ({
  'Content-Type': 'application/json',
});

export const errorCatch = (error: any): string =>
  error.response && error.response.data
    ? typeof error.response.data.message === 'object'
      ? error.response.data.message[0]
      : error.response.data.message
    : error.message;

export const axiosOptions = {
  baseUrl: API_URL,
  headers: getContentType(),
};

export const AxiosClassic = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getDesignApi = (string: string) => `/design${string}`;
export const getProjectsApi = () => `/projects`;
