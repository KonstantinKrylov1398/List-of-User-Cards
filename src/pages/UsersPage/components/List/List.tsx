import React, { useEffect, useState } from "react";
import Like from "src/assets/Like.svg";
import { useNavigate } from "react-router-dom";
import style from "./style.css";
import type { User } from "src/types";
import { TOKEN } from "src/constans";
import LikeClick from "src/assets/LikeClick.svg";

type Props = {
  users: User.Entity[];
};
const filterLikes = (likes: any) =>
  likes.reduce((accumulator: any, current: any) => {
    const index = accumulator.findIndex(
      (obj: any) => obj.target_id === current.target_id
    );
    if (index === -1) {
      return [...accumulator, current];
    }
    return accumulator;
  }, []);

export function List({ users }: Props) {
  const getLikes = localStorage.getItem("likes");
  const [likes, setLikes] = useState(getLikes ? JSON.parse(getLikes) : []);
  const FILTER_LIKES = filterLikes(likes);
  const navigate = useNavigate();

  const result = users.map((user) => ({
    ...user,
    like:
      FILTER_LIKES.length > 0 &&
      FILTER_LIKES.find((like: any) => like.target_id === user.id),
  }));

  const handleLikeClick = (currentUser: User.Entity) => {
    const like = {
      id: Math.random().toString(36),
      user_id: localStorage.getItem(TOKEN),
      target_id: currentUser.id,
    };
    setLikes((likes: any) => [...likes, like]);
  };

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(FILTER_LIKES));
  }, [FILTER_LIKES]);

  return (
    <div className={style.list}>
      <ul className={style.list__ul}>
        {result.map((user: User.Entity) => {
          return (
            <li className={style.list__li} key={user.id}>
              <div
                onClick={() => {
                  navigate(`/users/${user.id}`);
                }}
                className={style.list__username}
              >
                <img className={style.list__img} src={user.avatar} />
                <div className={style.list__textusername}>
                  {user.first_name} {user.last_name}
                </div>
              </div>

              <div
                onClick={() => handleLikeClick(user)}
                className={style.list__like}
              >
                {user.like ? <LikeClick /> : <Like />}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
