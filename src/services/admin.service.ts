import request from "./request";
import { RegisterInput } from "../schemas/register.schema";
import { ResetPasswordSchema as ResetPasswordInput } from "../schemas/resetPassword.schema";
import type { Admin } from "../contexts/AuthProvider";

export async function registerAdmin(data: RegisterInput) {
  return await request.post("api/admin/register", data);
}

export async function resetPassword(data: ResetPasswordInput) {
  return await request.post("api/admin/forgotpassword", data);
}

/**
 *  Gets currently logged in admin information.
 * @returns Admin information - name, email....
 * N:B Further API request is cancelled if profile details is already in session-storage
 */
export async function profile() {
  let response: Admin;

  let cached = sessionStorage.getItem("profile");
  if (cached) {
    response = JSON.parse(cached);
    return response;
  }
  // else
  try {
    console.debug("Requesting Admin/me");
    let payload = await request.get("api/admin/me", { withCredentials: true });
    sessionStorage.setItem("profile", JSON.stringify(payload.data));
    return payload.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteAdmin(params: string) {
  return await request.post("/", params, { withCredentials: true });
}
