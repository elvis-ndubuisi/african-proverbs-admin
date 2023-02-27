import React from "react";
import type { Admin } from "../types";

type Auth = {
  authenticated: boolean;
  profile?: Admin;
};

type Context = {
  auth: Auth;
  setAuth: React.Dispatch<React.SetStateAction<Auth>>;
};

export const AuthContext = React.createContext<Context>({} as Context);

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const [auth, setAuth] = React.useState<Auth>({} as Auth);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
