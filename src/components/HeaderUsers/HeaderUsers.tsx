import React from "react";
import { useNavigate } from "react-router-dom";
import Exit from "../../../assets/Exit.svg";
import { exitingThePage } from "../../utils";

import style from "./headerusers.css";
export function HeaderUsers() {
  const navigate = useNavigate();
  return (
    <div className={style.allusers_header}>
      <button
        onClick={() => {
          exitingThePage(navigate);
        }}
        className={style.allusers_exitbutton}
      >
        Выход
      </button>
      <Exit
        onClick={() => {
          exitingThePage(navigate);
        }}
        className={style.allusers_exitbuttonsvg}
      />
      <div className={style.allusers_content}>
        <div className={style.allusers_h1}>Наша команда</div>
        <div className={style.allusers_text}>
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их плечи, и умеющие находить выход из любых, даже самых
          сложных ситуаций.
        </div>
      </div>
    </div>
  );
}
