import React, { useEffect, useState } from "react";
import { HeaderUsers, MainUsers } from "../../components";
import style from "./userspage.css";
import { apiUsers } from "../../api";
import { PrivateRoute } from "../../routes";
export function UsersPage() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);

  const onPage = () => setPage((prev) => prev + 1);

  useEffect(() => {
    const asyncUsers = async () => {
      const response = await apiUsers.getAll(page);
      setData((prev) => {
        return {
          ...response,
          data: prev ? [...prev.data, ...response.data] : response.data,
        };
      });
    };

    asyncUsers();
  }, [page]);

  return (
    <PrivateRoute>
      <div className={style.background}>
        <HeaderUsers />
        <MainUsers
          data={data}
          isNextPage={page < data?.total_pages}
          onPage={onPage}
        />
      </div>
    </PrivateRoute>
  );
}
