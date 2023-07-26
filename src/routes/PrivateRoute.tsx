import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { ROUTES, TOKEN } from "src/constans";

type Props = {
  children: ReactNode;
};

export const PrivateRoute = ({ children }: Props) => {
  if (!localStorage.getItem(TOKEN)) {
    return <Navigate to={ROUTES.LOGIN} />;
  }
  return <>{children}</>;
};
