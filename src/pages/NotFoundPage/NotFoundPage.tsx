import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.css";
export function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <header className={style.header}>404 ошибка</header>
      <div className={style.main}>
        <div className={style.main__one}>Данной страницы не существует</div>
        <button onClick={() => navigate(-1)} className={style.main__button}>
          Вернуться на главную
        </button>
      </div>
    </div>
  );
}
