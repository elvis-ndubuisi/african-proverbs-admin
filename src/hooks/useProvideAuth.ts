import jwtDecode from "jwt-decode";
import React from "react";
import { LoginInput } from "../schemas/login.schema";
import { loginAdmin } from "../services/auth.service";
import { Admin } from "../@types";

export default function useProvideAuth() {
  const [admin, setAdmin] = React.useState<Admin | null>(null);
  const login = async (data: LoginInput): Promise<any> => {
    return await loginAdmin(data)
      .then(async (response) => {
        let token = response.data?.accessToken;
        setAdmin(jwtDecode(token));
        jwtDecode(token);
        return jwtDecode(token);
      })
      .catch(async (err) => {
        setAdmin(null);
        return err;
      });
  };

  const logOut = () => {};
  const resetPassword = () => {};

  return { admin, login };
}
