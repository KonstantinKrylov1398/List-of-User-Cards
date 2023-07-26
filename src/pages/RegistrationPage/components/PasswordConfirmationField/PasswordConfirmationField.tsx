import { Field, useField } from "formik";
import React, { useState } from "react";
import style from "./style.css";
import Eye from "src/assets/Eye.svg";

type Props = {
  name: string;
};
export function PasswordConfirmationField({ name }: Props) {
  const [field, meta] = useField(name);
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <div className={style.container}>
      <div className={style.input}>
        <Field
          className={`${style.input__field} ${
            meta.error && meta.touched && style.input_border
          }`}
          type={hidePassword ? "password" : "text"}
          {...field}
        />
        <div
          onClick={() => setHidePassword((value) => !value)}
          className={style.input__eye}
        >
          <Eye fill={!hidePassword ? "#512689" : "none"} />
        </div>
      </div>
      {meta.error && meta.touched && (
        <div className={style.input__error}>{meta.error}</div>
      )}
    </div>
  );
}
