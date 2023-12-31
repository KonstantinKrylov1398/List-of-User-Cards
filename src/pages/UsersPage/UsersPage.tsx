import React, { useEffect, useState } from "react";
import { apiUsers } from "src/api";
import { PrivateRoute } from "src/routes";
import type { Api, User } from "src/types";
import { Header, List, Pagination } from "./components";
import style from "./style.css";

export function UsersPage() {
  const [page, setCurrentPage] = useState(1);
  const [data, setData] = useState<Api.Response<User.Entity[]>>();

  useEffect(() => {
    const asyncUsers = async () => {
      const response = await apiUsers.getAll(page);
      setData(response);
    };
    asyncUsers();
  }, [page]);

  return (
    <PrivateRoute>
      {data && (
        <div className={style.container}>
          <Header />
          <List users={data.data} />
          <Pagination
            page={page}
            setCurrentPage={setCurrentPage}
            totalPages={data.total_pages}
          />
        </div>
      )}
    </PrivateRoute>
  );
}
