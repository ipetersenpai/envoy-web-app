import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import DashboardRoute from "./DashboardRoute";
import { useContext } from "react";
import { AuthenticationContext } from "../Context/AuthContext";

const NavigationRoute = () => {
  const { LoginAccess } = useContext(AuthenticationContext);
  return (
    <BrowserRouter>
      {LoginAccess ? <DashboardRoute /> : <AuthRoute />}
    </BrowserRouter>
  );
};

export default NavigationRoute;
