import { useQueryClient, useMutation } from "@tanstack/react-query";
import { FiEdit3 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/Ri";
import { useParams, useNavigate } from "react-router-dom";
import { deleteUser } from "../api/UserApi";

function UserTable({ users }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: deleteData, mutate } = useMutation(
    async (data) => deleteUser(data),
    {
      onSuccess: async () => {
        queryClient.invalidateQueries(["users"]);
        console.log("data deleted");
      },
    }
  );
  const handleDelete = (data) => {
    mutate(data);
  };

  const rows = users.map((user, index) => (
    <tr key={index} className="  even:bg-gray-100 odd:bg-white">
      <td className="py-3 px-6">{user.id}</td>
      <td className="py-3 px-6">{user.first_name}</td>
      <td className="py-3 px-6">{user.last_name}</td>
      <td className="py-3 px-6">{user.email}</td>
      <td className="py-3 px-6">{user.gender}</td>
      <td className="flex space-x-4 py-3 px-6 ">
        <Link to={`/user/edit/${user.id}`} className="text-blue-800">
          <FiEdit3 />
        </Link>
        <button onClick={() => handleDelete(user)} className="text-red-600">
          <RiDeleteBin6Line />
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="flex flex-col space-y-6 mt-10">
      <div className="">
        <Link
          to="/user/create"
          className="border border-green-700  px-3 py-2 rounded-md "
        >
          Create User
        </Link>
      </div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-700">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="">
              <th className="py-3 px-6">Id</th>
              <th className="py-3 px-6">First Name</th>
              <th className="py-3 px-6">Last Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Gender</th>
              <th className="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>

      {/* <div className="md:px-32 py-8 w-full">
        <div className="shadow overflow-hidden rounded border-b border-gray-200">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Id
                </th>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  First Name
                </th>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Last Name
                </th>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Email
                </th>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Gender
                </th>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">{rows}</tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
}

export default UserTable;
