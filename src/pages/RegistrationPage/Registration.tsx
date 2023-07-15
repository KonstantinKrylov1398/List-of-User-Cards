import React, { useState } from "react";
import style from "./registration.css";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { schemaRegistration } from "../../schemes/shemesRegistration";
import Eye from "../../../assets/Eye.svg";
import { useNavigate } from "react-router-dom";
export function Registration() {
  const navigate = useNavigate();
  const [hidePasswordOne, setHidePasswordOne] = useState<boolean>(true);
  const [hidePasswordTwo, setHidePasswordTwo] = useState<boolean>(true);
  const style_input = (errors: any, touched: any) =>
    errors && touched
      ? { border: "1px solid #FF6161", marginBottom: "4px" }
      : null;

  return (
    <div className={style.background}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(value, { setSubmitting }: any) => {
          setSubmitting(false);
          console.log(value);
          axios
            .post("https://reqres.in/api/register", {
              email: value.email,
              password: value.password,
            })
            .then((response) => {
              localStorage.setItem("test", JSON.stringify(response.data));
            });

          navigate("/allusers");
        }}
        validationSchema={schemaRegistration}
      >
        {({ errors, touched, handleBlur }: any) => (
          <Form className={style.form}>
            <div className={style.form_header}>Регистрация</div>
            <label className={style.form_label}>Имя</label>
            <Field
              style={style_input(errors.name, touched.name)}
              className={style.form_input}
              name="name"
            />
            {errors.name && touched.name ? (
              <div className={style.form_error}>{errors.name}</div>
            ) : null}
            <label className={style.form_label}>Электронная почта</label>
            <Field
              style={style_input(errors.email, touched.email)}
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
                style={style_input(errors.password, touched.password)}
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
                style={style_input(
                  errors.confirm_password,
                  touched.confirm_password
                )}
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
              <div className={style.form_error}>{errors.confirm_password}</div>
            ) : null}
            <button className={style.form_button}>Зарегистрироваться</button>
            <button className={style.form_button_registration}>
              <a onClick={() => navigate("/")} className={style.form_a}>
                Уже зарегистрированы?
              </a>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
