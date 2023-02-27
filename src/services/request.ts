import axios from "axios";
import { refreshToken } from "./auth.service";

// const API = "https://africanproverbs.onrender.com/";
const API = "http://localhost:4000/";
const request = axios.create({ baseURL: API, withCredentials: true });

request.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err?.config;
    if (err?.response.status === 403 && !originalRequest._retry) {
      // Forbidden - access token is expired.
      originalRequest._retry = true;
      console.log("refreshing.....");
      await refreshToken();
      return request(originalRequest);
    }
    return Promise.reject(err);
  }
);

export default request;

// instance.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   async (err) => {
//     const originalConfig = err.config;

//     if (originalConfig.url !== "/auth/signin" && err.response) {
//       // Access Token was expired
//       if (err.response.status === 401 && !originalConfig._retry) {
//         originalConfig._retry = true;

//         try {
//           const rs = await instance.post("/auth/refreshtoken", {
//             refreshToken: TokenService.getLocalRefreshToken(),
//           });

//           const { accessToken } = rs.data;
//           TokenService.updateLocalAccessToken(accessToken);

//           return instance(originalConfig);
//         } catch (_error) {
//           return Promise.reject(_error);
//         }
//       }
//     }

//     return Promise.reject(err);
//   }
// );
