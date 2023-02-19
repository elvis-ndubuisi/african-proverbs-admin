import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root";
import Error from "./pages/Error";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import Home from "./pages/Home";
import Admin from "./pages/dashboard/Admin";
import AdminLayout from "./layout/AdminLayout";
import Submitted from "./pages/dashboard/Submitted";
import Proverbs from "./pages/dashboard/Proverbs";
import Admins from "./pages/dashboard/Admins";
import Status from "./pages/Status";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "auth/",
        children: [
          { index: true, element: <Login /> },
          {
            path: "login/",
            element: <Login />,
          },
          {
            path: "register/",
            element: <Register />,
          },
          {
            path: "reset-password/",
            element: <ResetPassword />,
          },
        ],
      },
      {
        path: "dashboard/",
        element: <AdminLayout />,
        children: [
          { index: true, element: <Admin /> },
          {
            path: "proverbs/",
            element: <Proverbs />,
          },
          {
            path: "submitted/",
            element: <Submitted />,
          },
          {
            path: "admins",
            element: <Admins />,
          },
        ],
      },
      {
        path: "status",
        element: <Status />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
