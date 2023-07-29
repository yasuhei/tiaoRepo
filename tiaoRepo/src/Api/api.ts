import axios from "axios";

export const api = axios.create({
  baseURL: "https://tiao.supliu.com.br/api/",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    Authorization: "felipe.cunha2001@hotmail.com",
  },
});

api.interceptors.request.use(
  function (config) {
    const token = "felipe.cunha2001@hotmail.com";
    if (token && config.headers) {
      config.headers.Authorization = `felipe.cunha2001@hotmail.com`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
