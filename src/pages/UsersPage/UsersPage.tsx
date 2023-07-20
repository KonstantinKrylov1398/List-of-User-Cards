import React, { createContext, useEffect, useState } from "react";
import { HeaderUsers, MainUsers } from "../../components";
import style from "./userspage.css";
import { apiUsers } from "../../api";
import { PrivateRoute } from "../../routes";

export type dataUsers = {
  data: [];
  page: number;
  per_page: number;
  support: {};
  total: number;
  total_pages: number;
};
export type typeContextUsers = {
  data?: {};
  onNextPage: () => void;
  onPreviousPage: () => void;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
  page: number;
};

const defaultStateContextUsers = {
  data: {},
  onNextPage: () => {},
  onPreviousPage: () => {},
  setPage: () => {},
  page: 1,
};

export const ContextUsersData = createContext<typeContextUsers>(
  defaultStateContextUsers
);
export function UsersPage() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<dataUsers>();

  const onNextPage = () => {
    if (data && page >= data?.total_pages) {
      return;
    } else setPage((prev) => prev + 1);
  };
  const onPreviousPage = () => {
    if (page <= 1) {
      return;
    } else setPage((prev) => prev - 1);
  };

  useEffect(() => {
    const asyncUsers = async () => {
      const response: dataUsers = await apiUsers.getAll(page);
      setData(response);
    };

    asyncUsers();
  }, [page]);

  return (
    <ContextUsersData.Provider
      value={{ data, onNextPage, onPreviousPage, setPage, page }}
    >
      <PrivateRoute>
        <div className={style.background}>
          <HeaderUsers />
          {data && <MainUsers data={data} />}
        </div>
      </PrivateRoute>
    </ContextUsersData.Provider>
  );
}
