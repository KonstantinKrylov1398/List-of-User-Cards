import { apiLogout } from "../api";

export const exitingThePage = (navigate) => {
  navigate("/login");
  localStorage.removeItem("getToken");
  apiLogout.postLogout();
};
