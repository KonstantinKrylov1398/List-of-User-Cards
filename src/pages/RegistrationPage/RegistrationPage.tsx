import React, { useState } from "react";
import style from "./registrationpage.css";
import { Formik, Form, Field } from "formik";
import { schemaRegistration } from "../../schemes";
import Eye from "../../../assets/Eye.svg";
import { useNavigate } from "react-router-dom";
import { PublicRoute } from "../../routes";
import { apiLogin } from "../../api";
export function RegistrationPage() {
  const [hidePasswordOne, setHidePasswordOne] = useState(true);
  const [hidePasswordTwo, setHidePasswordTwo] = useState(true);

  const navigate = useNavigate();

  return (
    <PublicRoute>
      <div className={style.background}>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(value, { setSubmitting }: any) => {
            setSubmitting(false);
            apiLogin.postLogin(value, navigate, "register");
          }}
          validationSchema={schemaRegistration}
        >
          {({ errors, touched, handleBlur }: any) => (
            <Form className={style.form}>
              <div className={style.form_header}>Регистрация</div>
              <label className={style.form_label}>Имя</label>
              <Field
                style={
                  errors.name && touched.name
                    ? { border: "1px solid #FF6161", marginBottom: "4px" }
                    : null
                }
                className={style.form_input}
                name="name"
              />
              {errors.name && touched.name ? (
                <div className={style.form_error}>{errors.name}</div>
              ) : null}
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
                  onBlur={handleBlur}
                  style={
                    errors.password && touched.password
                      ? { border: "1px solid #FF6161", marginBottom: "4px" }
                      : null
                  }
                  className={style.form_input}
                  name="password"
                  type={hidePasswordOne ? "password" : "text"}
                />
                <div
                  onClick={() => setHidePasswordOne((value): boolean => !value)}
                  className={style.form_eye}
                >
                  <Eye />
                </div>
              </div>
              {errors.password && touched.password ? (
                <div className={style.form_error}>{errors.password}</div>
              ) : null}
              <div />
              <label className={style.form_label}>Подтвердите пароль</label>
              <div className={style.form_eye_input}>
                <Field
                  style={
                    errors.confirm_password && touched.confirm_password
                      ? { border: "1px solid #FF6161", marginBottom: "4px" }
                      : null
                  }
                  className={style.form_input}
                  name="confirm_password"
                  type={hidePasswordTwo ? "password" : "text"}
                />
                <div
                  onClick={() => setHidePasswordTwo((value): boolean => !value)}
                  className={style.form_eye}
                >
                  <Eye />
                </div>
              </div>
              {errors.confirm_password && touched.confirm_password ? (
                <div className={style.form_error}>
                  {errors.confirm_password}
                </div>
              ) : null}
              <button className={style.form_button}>Зарегистрироваться</button>
              <button className={style.form_button_registration}>
                <a onClick={() => navigate("/login")} className={style.form_a}>
                  Уже зарегистрированы?
                </a>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </PublicRoute>
  );
}
