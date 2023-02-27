import React from "react";
import { AuthContext } from "../contexts/AuthProvider";

export default function useAuth() {
  return React.useContext(AuthContext);
}
