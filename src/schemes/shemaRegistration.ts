import * as yup from "yup";

export const schemaRegistration = yup.object().shape({
  name: yup.string().min(2, "Минимум 2 буквы").max(50, "Максимум 50 букв"),
  email: yup.string().email("Неверный email").required("Обязательное поле"),
  password: yup
    .string()
    .required("Обязательное поле")
    .min(6, "Пароль должен содержать не менее 6 символов"),
  confirm_password: yup
    .string()
    .required("Обязательное поле")
    .oneOf([yup.ref("password")], "Пароль должен совпадать"),
});
