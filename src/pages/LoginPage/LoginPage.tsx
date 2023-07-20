import React, { useState } from "react";
import style from "./loginpage.css";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import Eye from "../../../assets/Eye.svg";
import { schemaLogin } from "../../schemes";
import { apiLogin } from "../../api";
import { PublicRoute } from "../../routes";
export function LoginPage() {
  const [hidePassword, setHidePassword] = useState(true);
  const navigate = useNavigate();

  return (
    <PublicRoute>
      <div className={style.background}>
        <Formik
          validationSchema={schemaLogin}
          initialValues={{ email: "", password: "" }}
          onSubmit={(value, { setSubmitting }: any) => {
            setSubmitting(false);
            apiLogin.postLogin(value, navigate, "login");
            console.log(value);
          }}
        >
          {({ errors, touched }) => (
            <Form className={style.form}>
              <div className={style.form_header}>Вход</div>
              <label className={style.form_label}>Электронная почта</label>
              <Field
                style={
                  errors.email && touched.email
                    ? { border: "1px solid #FF6161", marginBottom: "4px" }
                    : null
                }
                className={style.form_input}
                name="email"
              />
              {errors.email && touched.email ? (
                <div className={style.form_error}>{errors.email}</div>
              ) : null}
              <label className={style.form_label}>Пароль</label>
              <div className={style.form_eye_input}>
                <Field
                  style={
                    errors.password && touched.password
                      ? { border: "1px solid #FF6161", marginBottom: "4px" }
                      : null
                  }
                  className={style.form_input}
                  name="password"
                  type={hidePassword ? "password" : "text"}
                />
                <div
                  onClick={() => setHidePassword((value) => !value)}
                  className={style.form_eye}
                >
                  <Eye fill={!hidePassword ? "#512689" : "none"} />
                </div>
              </div>
              {errors.password && touched.password ? (
                <div className={style.form_error}>{errors.password}</div>
              ) : null}
              <button className={style.form_button}>Войти</button>
              <button
                onClick={() => navigate("/register")}
                className={style.form_button_registration}
              >
                <a className={style.form_a}> Создать новый аккаунт</a>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </PublicRoute>
  );
}
