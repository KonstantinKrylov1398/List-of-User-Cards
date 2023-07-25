import React from "react";
import Like from "src/assets/Like.svg";
import { useNavigate } from "react-router-dom";
import style from "./style.css";
import type { User } from "src/types";

type Props = {
  users?: User.Entity[];
};

export function List({ users }: Props) {
  const navigate = useNavigate();

  return (
    <div className={style.list}>
      <ul className={style.list__ul}>
        {users &&
          users.map((user: User.Entity) => {
            return (
              <li
                onClick={() => {
                  navigate(`/users/${user.id}`);
                }}
                className={style.list__li}
                key={user.id}
              >
                <div className={style.list__username}>
                  <img className={style.list__img} src={user.avatar} />
                  <div className={style.list__textusername}>
                    {user.first_name} {user.last_name}
                  </div>
                </div>
                <Like className={style.list__like} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
