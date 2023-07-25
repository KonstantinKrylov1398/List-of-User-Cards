import { useNavigate } from "react-router-dom";
import { login } from "src/api";
import { TOKEN, USERS } from "src/constans";
import type { Auth } from "src/types";
export const useFormLogin = () => {
  const navigate = useNavigate();

  const onSubmit = (params: Auth.Entity, { setSubmitting }: Auth.Submit) => {
    setSubmitting(false);
    login(params).then((response) => {
      navigate(USERS);
      localStorage.setItem(TOKEN, JSON.stringify(response.data));
    });
  };

  return { onSubmit };
};
