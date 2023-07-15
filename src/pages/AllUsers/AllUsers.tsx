import axios from "axios";
import React, { useEffect, useState } from "react";
import { HeaderAllUsers } from "../../components/HeaderAllUsers";
import { MainAllUsers } from "../../components/MainAllUsers";
import style from "./allusers.css";
export function AllUsers() {
  const [arrayUsers, setArrayUsers] = useState<any>([]);
  const axiosGet = (id: number) => {
    axios.get(`https://reqres.in/api/users?page=${id}`).then((resp) => {
      resp.data.data.map((user: any) =>
        setArrayUsers((array: any) => [...array, user])
      );
    });
  };
  useEffect(() => {
    axiosGet(1);
    axiosGet(2);
  }, [setArrayUsers]);

  return (
    <div className={style.background}>
      <HeaderAllUsers style={style} />
      <MainAllUsers arrayUsers={arrayUsers} style={style} />
    </div>
  );
}
