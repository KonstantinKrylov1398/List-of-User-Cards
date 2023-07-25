import React from "react";
import style from "./style.css";
import { Formik, Form } from "formik";
import { useFormLogin } from "./hooks";
import { PublicRoute } from "src/routes";
import { schemaLogin } from "src/schemes";
import { Link } from "react-router-dom";
import { TextField, PasswordField } from "src/components";
import { EMAIL, NAME, PASSWORD, REGISTER } from "src/constans";

export function LoginPage() {
  const { onSubmit } = useFormLogin();

  return (
    <PublicRoute>
      <div className={style.container}>
        <Formik
          validationSchema={schemaLogin}
          initialValues={{ email: "", password: "" }}
          onSubmit={onSubmit}
        >
          {() => (
            <Form className={style.form}>
              <div className={style.form__header}>Вход</div>
              <label className={style.form__label}>Электронная почта</label>
              <TextField name={EMAIL} />
              <label className={style.form__label}>Пароль</label>
              <PasswordField name={PASSWORD} />
              <button className={style.form__button}>Войти</button>
              <Link to={REGISTER}>
                <button className={style.form__link}>
                  Создать новый аккаунт
                </button>
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </PublicRoute>
  );
}
