import React from "react";
import { useExitPage } from "src/hooks";
import Exit from "src/assets/Exit.svg";
import style from "./style.css";

export function Header() {
  const { exitPage } = useExitPage();
  return (
    <div className={style.header}>
      <div onClick={exitPage} className={style.header__exitpage}>
        <button className={style.header__button}>Выход</button>
        <Exit className={style.header__svg} />
      </div>
      <div className={style.header__content}>
        <div className={style.header__h1}>Наша команда</div>
        <div className={style.header__text}>
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их плечи, и умеющие находить выход из любых, даже самых
          сложных ситуаций.
        </div>
      </div>
    </div>
  );
}
