import axios from "axios";
import { refreshToken } from "./auth.service";

// const API = "https://africanproverbs.onrender.com/";
const API = "http://localhost:4000/";
const request = axios.create({ baseURL: API, withCredentials: true });

request.interceptors.response.use(
  (res) => res,
  async (err) => {
    const preRequest = err?.config;
    if (err?.response.status === 403 && !preRequest._retry) {
      // Forbidden - access token is expired.
      preRequest._retry = true;
      console.log("refreshing.....");
      await refreshToken();
      return request(preRequest);
    }
    return Promise.reject(err);
  }
);

export default request;
