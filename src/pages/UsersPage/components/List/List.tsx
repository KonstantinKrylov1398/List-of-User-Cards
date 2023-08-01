import React from "react";
import Like from "src/assets/Like.svg";
import LikeClick from "src/assets/LikeClick.svg";
import { useNavigate } from "react-router-dom";
import style from "./style.css";
import type { User } from "src/types";

type Props = {
  users: User.Entity[];
};

export function List({ users, setData }: Props) {
  const navigate = useNavigate();
  const putLike = (currentUser: User.Entity) => {
    setData((users) => ({
      ...users,
      data: [
        ...users.data.map((user) =>
          user.id === currentUser.id
            ? { ...user, like: !user.like }
            : { ...user }
        ),
      ],
    }));
  };

  return (
    <div className={style.list}>
      <ul className={style.list__ul}>
        {users.map((currentUser: User.Entity) => {
          return (
            <li className={style.list__li} key={currentUser.id}>
              <div
                onClick={() => {
                  navigate(`/users/${currentUser.id}`);
                }}
                className={style.list__username}
              >
                <img className={style.list__img} src={currentUser.avatar} />
                <div className={style.list__textusername}>
                  {currentUser.first_name} {currentUser.last_name}
                </div>
              </div>
              <div
                onClick={() => {
                  putLike(currentUser);
                  localStorage.setItem("like", JSON.stringify(users));
                }}
                className={style.list__like}
              >
                {currentUser.like ? <LikeClick /> : <Like />}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
