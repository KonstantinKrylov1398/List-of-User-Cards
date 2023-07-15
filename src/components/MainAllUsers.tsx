import React, { useState } from "react";
import Like from "../../assets/Like.svg";
import Arrow from "../../assets/Arrow.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionUser } from "../redux/actionUser";
export function MainAllUsers({ style, arrayUsers }: any) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showUsers, setShowUsers] = useState(false);
  const numberOfUsers = showUsers ? arrayUsers.length : 8;
  return (
    <div className={style.allusers_main}>
      <ul className={style.allusers_ul}>
        {arrayUsers
          ? arrayUsers.slice(0, numberOfUsers).map((user: any) => {
              return (
                <li
                  onClick={() => {
                    axios
                      .get(`https://reqres.in/api/users/${user.id}`)
                      .then((resp) => {
                        dispatch(actionUser(resp.data));
                      });
                    navigate("/user");
                  }}
                  className={style.allusers_li}
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
      <button
        onClick={() => setShowUsers(true)}
        className={style.allusers_buttonshow}
        style={showUsers ? { display: "none" } : { display: "block" }}
      >
        Показать еще
        <Arrow className={style.allusers_arrow} />
      </button>
    </div>
  );
}
