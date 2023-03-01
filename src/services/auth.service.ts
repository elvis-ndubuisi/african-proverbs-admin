import { RegisterInput } from "../schemas/register.schema";
import { LoginInput } from "../schemas/login.schema";
import request from "./request";

export async function registerAdmin(data: RegisterInput) {
  return await request.post("api/admin/register", data);
}

/**
 *  Authenticate Admin login and creates session.
 * @param data Log-in credentials
 * @returns access-token and refresh-tokens as JSON & in cookie.
 */
export async function loginAdmin(data: LoginInput) {
  return await request.post("api/sessions", data, { withCredentials: true });
}

// Refresh session
export function refreshToken() {
  return request.post("api/sessions/refresh", {}, { withCredentials: true });
}

/**
 * End session in server.
 * Delete locally cached data
 */
export async function logOut() {
  await request.delete("/api/sessions", { withCredentials: true });
}
