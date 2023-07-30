import React, { useState } from "react";
import style from "./style.css";
import ArrowLeft from "src/assets/ArrowLeft.svg";
import Exit from "src/assets/Exit.svg";
import { useExitPage } from "src/hooks";
import { useNavigate } from "react-router-dom";
import { User } from "src/types";
import { ROUTES } from "src/constans";

type Props = {
  user: User.Entity;
};
export function Header({ user }: Props) {
  const [imageURL, setImageURL] = useState<string>();
  const navigate = useNavigate();
  const { exitPage } = useExitPage();

  const fileReader = new FileReader();

  fileReader.onloadend = () => {
    setImageURL(fileReader.result?.toString());
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target?.files[0];
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div className={style.header}>
      <div
        onClick={() => navigate(ROUTES.USERS)}
        className={style.header__exitpage}
      >
        <ArrowLeft
          className={`${style.header__showsvg} ${style.header__showsvg_one}`}
        />
        <button className={style.header__button}>Назад</button>
      </div>

      <div className={style.header__user}>
        <div className={style.header__avatar}>
          <input
            className={style.input__file}
            onChange={handleFileChange}
            type="file"
            accept=".png,.jpg,.svg"
          ></input>
          <img
            className={style.user__img}
            src={imageURL ? imageURL : user.avatar}
          />
          <div className={style.input__avatar}>Загрузить аватарку</div>
        </div>
        <div className={style.user__textusername}>
          <div className={style.user__username}>
            {user.first_name} {user.last_name}
          </div>
          <div className={style.user__partner}>Партнер</div>
        </div>
      </div>
      <div onClick={exitPage} className={style.header__exitpage}>
        <Exit
          className={`${style.header__showsvg} ${style.header__showsvg_two}`}
        />
        <button className={style.header__button}>Выход</button>
      </div>
    </div>
  );
}
