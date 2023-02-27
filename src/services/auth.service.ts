import { RegisterInput } from "../schemas/register.schema";
import { LoginInput } from "../schemas/login.schema";
import request from "./request";

export async function registerAdmin(data: RegisterInput) {
  return await request.post("api/admin/register", data, {
    headers: { "Content-Type": "application/json" },
  });
}

/**
 *  Authenticate Admin login and creates session.
 * @param data Log-in credentials
 * @returns access-token and refresh-tokens as JSON & in cookie.
 */
export async function loginAdmin(data: LoginInput) {
  return await request.post("api/sessions", data, {
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  });
}

// Refresh session
export function refreshToken() {
  return request.post("api/sessions/refresh", {
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  });
}
