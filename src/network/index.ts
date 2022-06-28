import axios, { AxiosRequestConfig } from 'axios';

const makeRequest = async ({ url, method = 'GET', data = {}, params }: AxiosRequestConfig) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      params,
      baseURL: 'http://localhost:8000/',
      // baseURL: 'https://rural-empty-horn.glitch.me/',

      timeout: 10000,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export default makeRequest;
