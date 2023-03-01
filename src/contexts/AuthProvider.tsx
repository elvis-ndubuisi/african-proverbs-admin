import React from "react";
import { Admin } from "../@types";
import useProvideAuth from "../hooks/useProvideAuth";
import { LoginInput } from "../schemas/login.schema";

type Ctx = {
  admin: Admin | null;
  login: (data: LoginInput) => any;
};
// export const AuthContext = React.createContext<AuthCtx>({} as AuthCtx);
export const AuthContext = React.createContext<Ctx>({} as Ctx);

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
