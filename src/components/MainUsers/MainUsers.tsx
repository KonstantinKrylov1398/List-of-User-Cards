import React from "react";
import Like from "../../../assets/Like.svg";
import Arrow from "../../../assets/Arrow.svg";
import { useNavigate } from "react-router-dom";
import style from "./mainusers.css";
import { Pagination } from "../Pagination";
import { dataUsers } from "../../pages/UsersPage";
type MainUsers = {
  data: dataUsers;
};
export function MainUsers({ data }: MainUsers) {
  const navigate = useNavigate();

  return (
    <div className={style.allusers_main}>
      <ul className={style.allusers_ul}>
        {data && data.data.length > 0
          ? data.data.map((user: any) => {
              return (
                <li
                  onClick={() => {
                    navigate(`/users/${user.id}`);
                  }}
                  className={style.allusers_li}
                  key={user.id}
                >
                  <div className={style.allusers_username}>
                    <img className={style.allusers_img} src={user.avatar} />
                    <div className={style.allusers_textusername}>
                      {user.first_name} {user.last_name}
                    </div>
                  </div>
                  <Like className={style.allusers_like} />
                </li>
              );
            })
          : ""}
      </ul>

      <Pagination />
    </div>
  );
}
