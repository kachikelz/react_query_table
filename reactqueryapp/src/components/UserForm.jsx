import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { getUser, addUser } from "../api/UserApi";
import { useState, useEffect } from "react";

function UserForm({ btnAction, handleSubmit, user, handleChange }) {
  //   const [userData, setUserData] = useState(user);
  // const [userData, setUserData] = useState(user);

  //   if (user.id !== "") {
  //     console.log("user here", userData);
  //     useEffect(() => {
  //       setUserData(user);
  //     }, [userData]);
  //   }

  // Go back navigation
  const navigate = useNavigate();
  //   const { id } = useParams();

  // Update Id check
  //   if (id) {
  //     //Queries
  //     const {
  //       data: user,
  //       isFetching,
  //       isError,
  //       error,
  //       isSuccess,
  //     } = useQuery(["users", id], getUser, {
  //       onSuccess: async (user) => {
  //         await setUserData(user[0]);
  //       },
  //     });
  //     if (isFetching) {
  //       return "Is Loading";
  //     }
  //     if (isError) {
  //       console.log(error);
  //     }
  //   }
  //   if (!id) {
  //     // Acess the client
  //     const queryClient = useQueryClient();

  //     // Mutation
  //     const { mutate, isFetching } = useMutation((data) => addUser(data), {
  //       onSuccess: async (data) => {
  //         //Invalidate and refetch
  //         console.log("working", data);
  //         await queryClient.invalidateQueries(["users"]);
  //         navigate("/");
  //       },
  //     });
  //     if (isFetching) {
  //       return "Loading";
  //     }
  //   }

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log("submit", userData);
  //     mutate(userData);
  //   };

  //   const handleChange = (e) => {
  //     const name = e.target.name;
  //     const value = e.target.value;
  //     setUserData((user) => ({ ...user, [name]: value }));
  //   };

  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={(e) => handleSubmit(e, user)}>
            <div className="mb-5">
              <label
                htmlFor="userId"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                User Id
              </label>
              <input
                type="text"
                name="id"
                placeholder="User Id"
                value={user.id}
                id="userId"
                onChange={(e) => handleChange(e)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="firstname"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={user.first_name}
                id="firstname"
                onChange={(e) => handleChange(e)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="lastname"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={user.last_name}
                id="lastname"
                onChange={(e) => handleChange(e)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                value={user.email}
                placeholder="example@yourmail.com"
                id="email"
                onChange={(e) => handleChange(e)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="gender"
                className="mb-3 block text-base font-medium text-[#07074D] "
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={user.gender}
                onChange={(e) => handleChange(e)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none "
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-green-700  py-3 px-8 text-base font-semibold text-white outline-none"
              >
                {btnAction}
              </button>
              <button
                onClick={() => navigate("/")}
                className="hover:shadow-form rounded-md border border-green-700 text-black py-3 px-8 text-base font-semibold outline-none"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
