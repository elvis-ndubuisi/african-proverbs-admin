import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root";
import Error from "./pages/Error";
import DashboardError from "./pages/dashboard/DashboardError";
import Login from "./pages/account/Login";
import Register from "./pages/account/Register";
import Home from "./pages/Home";
import Admin, { loader as l_Profile } from "./pages/dashboard/Admin";
import AdminLayout from "./layout/AdminLayout";
import Submitted from "./pages/dashboard/Submitted";
import Proverbs from "./pages/dashboard/Proverbs";
import Admins from "./pages/dashboard/Admins";
import AuthProvider from "./contexts/AuthProvider";
import ResetPassword from "./pages/account/ResetPassword";

const router = createBrowserRouter([
  {
    element: (
      <AuthProvider>
        <Root />
      </AuthProvider>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <AdminLayout />,
        children: [
          { index: true, element: <Admin />, loader: l_Profile },
          {
            path: "/proverbs",
            element: <Proverbs />,
          },
          {
            path: "/admins",
            element: <Admins />,
          },
        ],
      },
      {
        path: "/account/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
