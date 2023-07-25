import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { LOGIN, TOKEN } from "src/constans";

type Props = {
  children: ReactNode;
};

export const PrivateRoute = ({ children }: Props) => {
  if (!localStorage.getItem(TOKEN)) {
    return <Navigate to={LOGIN} />;
  }
  return <>{children}</>;
};
