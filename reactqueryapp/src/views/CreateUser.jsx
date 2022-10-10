import UserForm from "../components/UserForm";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { addUser } from "../api/UserApi";
import { useState } from "react";

function CreateUser() {
  const [userData, setUserData] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
  });
  // Acess the client
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Mutation
  const { mutate, isFetching } = useMutation((data) => addUser(data), {
    onSuccess: async (data) => {
      //Invalidate and refetch
      await queryClient.invalidateQueries(["users"]);
      navigate("/");
    },
  });

  if (isFetching) {
    return "Loading";
  }

  const handleSubmit = async (event, userData) => {
    event.preventDefault();
    console.log("submit", userData);
    mutate(userData);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData((user) => ({ ...user, [name]: value }));
  };

  return (
    <div>
      <UserForm
        btnAction="Save"
        handleSubmit={handleSubmit}
        user={userData}
        handleChange={handleChange}
      />
    </div>
  );
}

export default CreateUser;
