import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import ActionNav from "../components/ActionNav";
import useAuth from "../hooks/useAuth";

export default function AdminLayout() {
  const auth = useAuth();
  const [canAccess, setCanAccess] = React.useState(false);

  React.useEffect(() => {
    auth.admin && auth.admin._id ? setCanAccess(true) : setCanAccess(false);
  }, []);

  return (
    <div>
      <ActionNav />
      <Outlet />
    </div>
  );
}
