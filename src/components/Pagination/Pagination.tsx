import React, { useContext } from "react";
import { ContextUsersData, typeContextUsers } from "../../pages/UsersPage";
import style from "./pagination.css";
export function Pagination() {
  const { data, onNextPage, onPreviousPage, setPage, page } =
    useContext(ContextUsersData);
  const pageNumbers = [];

  for (let i = 1; i <= data?.total_pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={style.allusers_pagination}>
      <button className={style.allusers_onpage} onClick={onPreviousPage}>
        Назад
      </button>
      <div style={{ display: "flex", justifyContent: "center", width: "50%" }}>
        {pageNumbers.map((number) => (
          <button
            style={
              page === number
                ? {
                    background: "#512689",
                    color: "white",
                    border: "none",
                  }
                : null
            }
            className={style.allusers_numberpage}
            onClick={() => setPage(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <button className={style.allusers_onpage} onClick={onNextPage}>
        Далее
      </button>
    </div>
  );
}
