import React from "react";
import { UsePagination } from "./hooks";
import style from "./style.css";

type Props = {
  page: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
};
export function Pagination({ page, setCurrentPage, totalPages }: Props) {
  const { getVisiblePages } = UsePagination();

  return (
    <div className={style.pagination}>
      <button
        className={style.pagination__button}
        onClick={() => setCurrentPage((page) => page - 1)}
        disabled={page === 1}
      >
        Назад
      </button>

      <div className={style.pagination__page}>
        {getVisiblePages(totalPages, page)?.map((numberPage, index, array) => {
          return (
            <div key={numberPage} className={style.page}>
              {array[index - 1] + 2 < numberPage && (
                <div className={style.page__point}>...</div>
              )}
              <button
                className={`${style.page__button} ${
                  page === numberPage ? style.page__button_effects : 1
                }`}
                onClick={() => setCurrentPage(numberPage)}
              >
                {numberPage}
              </button>
            </div>
          );
        })}
      </div>
      <button
        className={style.pagination__button}
        onClick={() => setCurrentPage((page) => page + 1)}
        disabled={page === totalPages}
      >
        Далее
      </button>
    </div>
  );
}
