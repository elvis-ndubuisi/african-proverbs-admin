import axios from "axios";
import { refreshToken } from "./auth.service";

const API = import.meta.env.PROD
  ? "https://africanproverbs.onrender.com/"
  : "http://localhost:4000/";

const request = axios.create({ baseURL: API });

request.interceptors.response.use(
  (res) => res,
  async (err) => {
    const preRequest = err?.config;
    if (err?.response?.status === 403 && !preRequest?._retry) {
      // Forbidden - access token is expired.
      preRequest._retry = true;
      await refreshToken();
      return request(preRequest);
    }
    return Promise.reject(err);
  }
);

export default request;
