import React from "react";
import style from "./style.css";

export function Pagination({ page, setPage, totalPages }: any) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={style.allusers_pagination}>
      <button
        className={style.allusers_onpage}
        onClick={() =>
          page > 1
            ? setPage((page: any) => page - 1)
            : setPage((page: any) => page)
        }
      >
        Назад
      </button>
      <div style={{ display: "flex", justifyContent: "center", width: "50%" }}>
        {pageNumbers.map((number) => (
          <button
            className={style.allusers_numberpage}
            onClick={() => setPage(number)}
            key={number}
          >
            {number}
          </button>
        ))}
      </div>
      <button
        className={style.allusers_onpage}
        onClick={() =>
          page < totalPages
            ? setPage((page: any) => page + 1)
            : setPage((page: any) => page)
        }
      >
        Далее
      </button>
    </div>
  );
}
