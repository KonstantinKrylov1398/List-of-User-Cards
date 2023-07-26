import { Field, useField } from "formik";
import React from "react";
import style from "./style.css";

type Props = {
  name: string;
};

export function TextField({ name }: Props) {
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
