import React, { useEffect, useState } from "react";
import { HeaderAllUsers } from "../../components/HeaderAllUsers";
import { MainAllUsers } from "../../components/MainAllUsers";
import style from "./allusers.css";
import { apiUser } from "../../api";
export function AllUsers() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);

  const onPage = () => setPage((prev) => prev + 1);

  useEffect(() => {
    const asyncUsers = async () => {
      const response = await apiUser.getAll(page);
      setData((prev): any => {
        return {
          ...response,
          data: prev ? [...prev.data, ...response.data] : response.data,
        };
      });
    };

    asyncUsers();
  }, [page]);

  return (
    <div className={style.background}>
      <HeaderAllUsers style={style} />
      <MainAllUsers
        data={data}
        style={style}
        isNextPage={page < data?.total_pages}
        onPage={onPage}
      />
    </div>
  );
}
