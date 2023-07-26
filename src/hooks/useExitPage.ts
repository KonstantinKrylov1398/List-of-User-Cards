import { useNavigate } from "react-router-dom";
import { logout } from "src/api";
import { ROUTES, TOKEN } from "src/constans";

export const useExitPage = () => {
  const navigate = useNavigate();
  const exitPage = () => {
    navigate(ROUTES.LOGIN);
    localStorage.removeItem(TOKEN);
    logout();
  };
  return { exitPage };
};
