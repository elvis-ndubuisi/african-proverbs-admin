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
import Admin from "./pages/dashboard/Admin";
import AdminLayout from "./layout/AdminLayout";
import Submitted from "./pages/dashboard/Submitted";
import Proverbs from "./pages/dashboard/Proverbs";
import Admins from "./pages/dashboard/Admins";
import AuthProvider from "./contexts/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
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
        errorElement: <DashboardError />,
        children: [
          { index: true, element: <Admin /> },
          {
            path: "proverbs",
            element: <Proverbs />,
          },
          {
            path: "submitted",
            element: <Submitted />,
          },
          {
            path: "admins",
            element: <Admins />,
          },
        ],
      },
      {
        path: "/account",
        children: [
          { index: true, element: <Home /> },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
