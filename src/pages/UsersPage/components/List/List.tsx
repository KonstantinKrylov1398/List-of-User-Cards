import React, { useEffect, useState } from "react";
import Like from "src/assets/Like.svg";
import LikeClick from "src/assets/LikeClick.svg";
import { useNavigate } from "react-router-dom";
import style from "./style.css";
import type { User } from "src/types";
import { LIKE } from "src/constans";

type Props = {
  users: User.Entity[];
};

export function List({ users }: Props) {
  const listUsers = users.map((user) => {
    return {
      ...user,
      like: false,
    };
  });
  const getUsers = localStorage.getItem(LIKE);
  const navigate = useNavigate();
  const [currentUsers, setCurrentUsers] = useState<User.Entity[]>(
    getUsers ? JSON.parse(getUsers) : listUsers
  );

  useEffect(() => {
    localStorage.setItem(LIKE, JSON.stringify(currentUsers));
  }, [currentUsers]);

  const putLike = (currentUser: User.Entity) => {
    setCurrentUsers((users) => [
      ...users.map((user) =>
        user.id === currentUser.id ? { ...user, like: !user.like } : { ...user }
      ),
    ]);
  };

  return (
    <div className={style.list}>
      <ul className={style.list__ul}>
        {currentUsers &&
          currentUsers.map((currentUser: User.Entity) => {
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
                  onClick={() => putLike(currentUser)}
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
