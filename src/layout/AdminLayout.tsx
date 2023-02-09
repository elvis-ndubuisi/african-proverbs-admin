import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import ActionNav from "../components/ActionNav";

export default function AdminLayout() {
  return (
    <div>
      <ActionNav />
      <Outlet />
    </div>
  );
}
