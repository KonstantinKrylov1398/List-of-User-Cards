import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { TOKEN, USERS } from "src/constans";

type Props = {
  children: ReactNode;
};
export const PublicRoute = ({ children }: Props) => {
  if (localStorage.getItem(TOKEN)) {
    return <Navigate to={USERS} />;
  }
  return <>{children}</>;
};
