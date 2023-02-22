import React from "react";

type AuthType = {
  admin: string;
  password: string;
};

const AuthContext = React.createContext<AuthType | null>(null);

export function AuthProvider({ children }: React.PropsWithChildren) {
  return (
    <AuthContext.Provider value={{ admin: "ma", password: "password" }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return React.useContext(AuthContext);
}

export default useAuth;
