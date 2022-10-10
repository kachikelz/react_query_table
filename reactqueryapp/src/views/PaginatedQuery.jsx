import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { getUsersPaginated } from "../api/UserApi";
import UserTable from "../components/UserTable";

function PaginatedQuery() {
  const queryClient = useQueryClient();
  // Initialise page
  const [page, setPage] = useState(0);
  const pageLimit = 15;
  // Get Queries
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
    status,
  } = useQuery(["paginatedUsers", page], () => getUsersPaginated(page), {
    keepPreviousData: true,
  });

  useEffect(() => {
    if (data?.hasMore) {
      queryClient.prefetchQuery(["paginatedUsers", page + 1], () => {
        getUsersPaginated(page + 1);
      });
    }
  }, [data, page, queryClient]);

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };
  const nextPage = () => {
    setPage(page + 1);
  };
  return (
    <div>
      {isLoading && <div>Loading... </div>}
      {isError && <div>Error: {error.messaage}</div>}
      {status === "success" && <UserTable users={data} />}

      {/* {Start pagination button} */}
      <div className="flex justify-between mt-2 mb-2">
        <button
          className="bg-white border text-black shadow-md py-1 px-6 rounded-sm"
          onClick={prevPage}
          disabled={page <= 1}
        >
          Prev
        </button>
        <span className="text-green-700">Page: {page}</span>
        <button
          className="bg-green-700 text-white shadow-md py-1 px-6 rounded-sm"
          onClick={nextPage}
          disabled={data && data.length < pageLimit}
        >
          Next
        </button>
      </div>
      {/* {End pagination button} */}
    </div>
  );
}

export default PaginatedQuery;
