import React from "react";

export type Admin = {
  _id: string;
  email: string;
  createAt: string;
  iat: number;
  exp: number;
  updatedAt: string;
  role: string;
  username: string;
};

type AuthCtx = {
  auth: Admin;
  setAuth: React.Dispatch<React.SetStateAction<Admin>>;
};

export const AuthContext = React.createContext<AuthCtx>({} as AuthCtx);

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const [auth, setAuth] = React.useState({} as Admin);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
