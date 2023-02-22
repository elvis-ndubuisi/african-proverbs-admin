import request from "./request";
import { RegisterInput } from "../schemas/register.schema";
import { ResetPasswordSchema as ResetPasswordInput } from "../schemas/resetPassword.schema";

export async function registerAdmin(data: RegisterInput) {
  return await request.post("api/admin/register", data);
}

export async function resetPassword(data: ResetPasswordInput) {
  return await request.post("api/admin/forgotpassword", data);
}

/**
 *  Gets currently logged in admin information.
 * @returns Admin information - name, email....
 */
export async function profile() {
  return await request.get("api/admin/me", { withCredentials: true });
}

export async function deleteAdmin(params: string) {
  return await request.post("/", params, { withCredentials: true });
}
