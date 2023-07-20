import { NavigateFunction } from "react-router-dom";
import { apiLogout } from "../api";

export const exitingThePage = (navigate: NavigateFunction) => {
  navigate("/login");
  localStorage.removeItem("getToken");
  apiLogout.postLogout();
};
