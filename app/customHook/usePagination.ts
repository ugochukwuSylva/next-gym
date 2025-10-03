import { useState } from "react";

export default function usePagination<T extends object[]>(
  arrObj: T,
  viewsPerPage = 1,
  lastPage: number
) {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const totalPages = Math.ceil(lastPage / viewsPerPage);

  const arrContents = arrObj.slice(
    currentPage * viewsPerPage,
    currentPage * viewsPerPage + viewsPerPage
  );

  let pageNumber;
  if (currentPage === 0) pageNumber = viewsPerPage;
  if (currentPage > 0) pageNumber = viewsPerPage * currentPage + viewsPerPage;
  if (currentPage >= totalPages - 1) pageNumber = lastPage;

  function nextPage() {
    setCurrentPage((next) => (next === totalPages ? next : next + 1));
  }

  function prevPage() {
    setCurrentPage((prev) => (prev === 0 ? prev : prev - 1));
  }

  return {
    arrContents: arrContents as T,
    totalPages,
    pageNumber,
    currentPage,
    lastPage,
    viewsPerPage,
    nextPage,
    prevPage,
    setCurrentPage,
  };
}
