import * as yup from "yup";

export const schemaAutorization = yup.object().shape({
  email: yup.string().email("Неверный email").required("Обязательное поле"),
  password: yup
    .string()
    .required("Обязательное поле")
    .min(6, "Пароль должен содержать не менее 6 символов"),
});
