import { Outlet, Navigate } from "react-router-dom";
import ActionNav from "../components/ActionNav";
import useAuth from "../hooks/useAuth";

export default function AdminLayout() {
  const auth = useAuth();

  return (
    <div>
      {auth.auth ? (
        <>
          <ActionNav />
          <Outlet />
        </>
      ) : (
        <Navigate to="account" />
      )}
    </div>
  );
}
