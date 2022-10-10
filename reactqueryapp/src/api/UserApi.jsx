import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const getUsers = async () => {
  try {
    const { data } = await api.get("/employees");
    console.log("code", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// set page limit
const pageLimit = 15;
export const getUsersPaginated = async (page = 1) => {
  try {
    const { data } = await api.get(
      `/employees?_page=${page}&_limit=${pageLimit}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (id) => {
  // // get useQuery context data
  // const [_, id] = await queryKey;
  try {
    const { data } = await api.get(`/employees/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Create a new user
export const addUser = async (user) => {
  try {
    const { data } = await api.post("/employees", user);
    console.log("postapi", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Update an existing User
export const updateUser = async (user) => {
  console.log("api info", user.id);
  try {
    const { data } = await api.put(`/employees/${user.id}`, user);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Delete an existing User
export const deleteUser = async (user) => {
  console.log("api info", user);
  try {
    const { data } = await api.delete(`/employees/${user.id}`, user);
    return data;
  } catch (error) {
    console.log(error);
  }
};
