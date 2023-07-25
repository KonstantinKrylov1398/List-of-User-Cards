import { useNavigate } from "react-router-dom";
import { logout } from "src/api";
import { LOGIN, TOKEN } from "src/constans";

export const useExitPage = () => {
  const navigate = useNavigate();
  const exitPage = () => {
    navigate(LOGIN);
    localStorage.removeItem(TOKEN);
    logout();
  };
  return { exitPage };
};
