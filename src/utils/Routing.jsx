import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const Routing = () => {
  const isLoggedIn = false;
  const ProtectedRoute = ({
    isLoggedIn,
    redirectPath = "/login",
    children,
  }) => {
    if (isLoggedIn === true) {
      return <Navigate to={redirectPath} replace />;
    }
    return children;
  };

  const routes = useRoutes([
    {
      path: "/home",
      element: (
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Home />
        </ProtectedRoute>
      ),
    },
    { path: "/login", element: <Login /> },
    // { path: "/Home", element: <Home /> },
    { path: "/resetPassword", element: <ForgotPassword /> },
  ]);

  return routes;
};

export default Routing;
