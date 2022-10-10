import { useQuery, useQueryClient } from "@tanstack/react-query";
import UserTable from "../components/UserTable";
import { getUsers } from "../api/UserApi";

function BasicQuery() {
  // Queries
  const { data, isFetching, isError, error, status } = useQuery(
    ["users"],
    getUsers
  );

  if (isFetching) {
    return "Fetching Data";
  }
  if (isError) {
    console.log(error);
  }
  console.log(data);
  return (
    <div>
      {/* {status === "error" && <div>{error.message}</div>}

      {status === "loading" && <div>Loading...</div>} */}
      <UserTable users={data} />
    </div>
  );
}

export default BasicQuery;
