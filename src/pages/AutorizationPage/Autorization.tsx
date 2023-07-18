import React, { useState } from "react";
import style from "./autorization.css";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Eye from "../../../assets/Eye.svg";
import { schemaAutorization } from "../../schemes/shemesAutorization";
export function Autorization() {
  const navigate = useNavigate();
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  return (
    <div className={style.background}>
      <Formik
        validationSchema={schemaAutorization}
        initialValues={{ email: "", password: "" }}
        onSubmit={(value, { setSubmitting }: any) => {
          axios
            .post("https://reqres.in/api/login", {
              email: value.email,
              password: value.password,
            })
            .then((response) => {
              localStorage.setItem("getToken", JSON.stringify(response.data));
              navigate("/users");
            });
          setSubmitting(false);
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
                onClick={() => setHidePassword((value): boolean => !value)}
                className={style.form_eye}
              >
                <Eye />
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
  );
}
