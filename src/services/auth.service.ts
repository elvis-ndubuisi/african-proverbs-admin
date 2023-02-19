import { RegisterInput } from "../schemas/register.schema";
import { LoginInput } from "../schemas/login.schema";
import request from "./request";

export async function registerAdmin(data: RegisterInput) {
  return await request.post("api/admin/register", data);
}

// Create session
export async function loginAdmin(data: LoginInput) {
  return await request.post("api/sessions", data, { withCredentials: true });
}

// Refresh session
export function refreshToken() {
  return request.post("api/sessions/refresh", { token: "asdjfiasd" });
}
