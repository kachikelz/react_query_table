import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { getUser, updateUser } from "../api/UserApi";
import UserForm from "../components/UserForm";
import { useState } from "react";

function EditUser() {
  const [userData, setUserData] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
  });

  //intialise query client
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();

  //Get user
  const {
    data: user,
    isFetching: isGetFetching,
    isError: isGetError,
    error,
  } = useQuery(["users", id], () => getUser(id), {
    onSuccess: async (user) => {
      await setUserData(user);
    },
  });

  // mutate
  const { mutate } = useMutation(async (data) => updateUser(data), {
    onSuccess: async (data) => {
      console.log("sucess data", data);
      //Invalidate and refetch
      await queryClient.invalidateQueries(["users"]);
      navigate("/");
    },
  });

  if (isGetFetching) {
    return "Is Loading";
  }
  if (isGetError) {
    console.log(error);
  }

  console.log(userData);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate(userData);
  };
  return (
    <div>
      <UserForm
        btnAction="Update"
        user={userData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
}

export default EditUser;
