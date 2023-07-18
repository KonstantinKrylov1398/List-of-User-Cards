import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: any) => {
  if (!localStorage.getItem("getToken")) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};
