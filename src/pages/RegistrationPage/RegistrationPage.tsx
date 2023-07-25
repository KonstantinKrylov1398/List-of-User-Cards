import React from "react";
import style from "./style.css";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { useFormRegister } from "./hooks";
import { PublicRoute } from "src/routes";
import { schemaRegistration } from "src/schemes";
import { TextField, PasswordField } from "src/components";
import { PasswordConfirmationField } from "./components";
import { CONFIRM_PASSWORD, EMAIL, LOGIN, NAME, PASSWORD } from "src/constans";
export function RegistrationPage() {
  const { onSubmit } = useFormRegister();

  return (
    <PublicRoute>
      <div className={style.container}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirm_password: "",
          }}
          onSubmit={onSubmit}
          validationSchema={schemaRegistration}
        >
          {() => (
            <Form className={style.form}>
              <div className={style.form__header}>Регистрация</div>
              <label className={style.form__label}>Имя</label>
              <TextField name={NAME} />
              <label className={style.form__label}>Электронная почта</label>
              <TextField name={EMAIL} />
              <label className={style.form__label}>Пароль</label>
              <PasswordField name={PASSWORD} />
              <label className={style.form__label}>Подтвердите пароль</label>
              <PasswordConfirmationField name={CONFIRM_PASSWORD} />
              <button className={style.form__button}>Зарегистрироваться</button>
              <Link to={LOGIN}>
                <button className={style.form__link}>
                  Уже зарегистрированы?
                </button>
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </PublicRoute>
  );
}
