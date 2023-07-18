import React from "react";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }: any) => {
  if (localStorage.getItem("getToken")) {
    return <Navigate to="/users" />;
  }
  return <>{children}</>;
};
