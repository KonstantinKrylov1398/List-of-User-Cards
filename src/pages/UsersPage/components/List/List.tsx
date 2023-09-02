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
type likes = {
  id: string;
  user_id: string | null;
  target_id: number;
};

export function List({ users }: Props) {
  const getLikes = localStorage.getItem("likes");
  const [likes, setLikes] = useState<likes[]>(
    getLikes ? JSON.parse(getLikes) : []
  );
  const navigate = useNavigate();

  const handleLikeClick = (currentUser: User.Entity) => {
    const like = {
      id: Math.random().toString(36),
      user_id: localStorage.getItem(TOKEN),
      target_id: currentUser.id,
    };
    setLikes((likes) => [...likes, like]);

    const index = likes.findIndex((like) => like.target_id === currentUser.id);
    if (index !== -1) {
      const updatedLikes = [...likes];
      setLikes(updatedLikes);
    } else {
      const updatedLikes = [...likes, like];
      setLikes(updatedLikes);
    }
  };

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);
  return (
    <div className={style.list}>
      <ul className={style.list__ul}>
        {users.map((user: User.Entity) => {
          user.like =
            likes.length > 0 &&
            likes.find((like: any) => like.target_id === user.id);

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
