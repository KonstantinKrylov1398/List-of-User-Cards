import { Field, useField } from "formik";
import React from "react";
import { Auth } from "src/types";
import style from "./style.css";

export function TextField({ name }: Auth.Field) {
  const [field, meta] = useField(name);

  return (
    <div className={style.container}>
      <Field
        className={`${style.input} ${
          meta.error && meta.touched && style.input_border
        }`}
        {...field}
      />
      {meta.error && meta.touched && (
        <div className={style.input__error}>{meta.error}</div>
      )}
    </div>
  );
}
