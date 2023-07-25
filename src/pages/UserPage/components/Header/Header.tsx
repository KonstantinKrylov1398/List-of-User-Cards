import React from "react";
import style from "./style.css";
import ArrowLeft from "src/assets/ArrowLeft.svg";
import Exit from "src/assets/Exit.svg";
import { useExitPage } from "src/hooks";
import { useNavigate } from "react-router-dom";
import { User } from "src/types";
import { USERS } from "src/constans";

type Props = {
  user: User.Entity;
};
export function Header({ user }: Props) {
  const navigate = useNavigate();
  const { exitPage } = useExitPage();
  return (
    <div className={style.header}>
      <div onClick={() => navigate(USERS)} className={style.header__exitpage}>
        <ArrowLeft className={style.header__showsvg} />
        <button className={style.header__button}>Назад</button>
      </div>

      <div className={style.header__user}>
        <img className={style.user__img} src={user.avatar} />
        <div className={style.user__textusername}>
          <div className={style.user__username}>
            {user.first_name} {user.last_name}
          </div>
          <div className={style.user__partner}>Партнер</div>
        </div>
      </div>
      <div onClick={exitPage} className={style.header__exitpage}>
        <Exit className={style.header__showsvg} />
        <button className={style.header__button}>Выход</button>
      </div>
    </div>
  );
}
