import { useNavigate } from "react-router-dom";
import { register } from "src/api";
import { ROUTES, TOKEN } from "src/constans";

interface Params {
  [params: string]: string;
}
type SetSubmitting = {
  setSubmitting: (props: boolean) => void;
};
export const useFormRegister = () => {
  const navigate = useNavigate();

  const onSubmit = (params: Params, { setSubmitting }: SetSubmitting) => {
    setSubmitting(false);
    register(params).then((response) => {
      navigate(ROUTES.USERS);
      localStorage.setItem(TOKEN, JSON.stringify(response.data));
    });
  };

  return { onSubmit };
};
