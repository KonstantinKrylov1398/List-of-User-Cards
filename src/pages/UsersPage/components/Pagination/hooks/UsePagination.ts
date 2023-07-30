export const UsePagination = () => {
  const getVisiblePages = (totalPages: number, page: number) => {
    const filterPages = (visiblePages: number[]) =>
      visiblePages.filter((page) => page <= totalPages);

    if (totalPages < 6) {
      return filterPages([1, 2, 3, 4, 5]);
    }
    if (page % 4 >= 0 && page >= 4 && page + 2 <= totalPages) {
      return [1, page - 1, page, page + 1, totalPages];
    }
    if (page % 4 >= 0 && page > 4 && page + 2 > totalPages) {
      return [1, 2, totalPages - 2, totalPages - 1, totalPages];
    }
    if (totalPages < 2) return;

    return [1, 2, 3, 4, totalPages];
  };
  return { getVisiblePages };
};
