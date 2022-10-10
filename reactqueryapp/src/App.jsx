import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import BasicQuery from "./views/BasicQuery";
import CreateUser from "./views/CreateUser";
import EditUser from "./views/EditUser";
import InfiniteQuery from "./views/InfiniteQuery";
import PaginatedQuery from "./views/PaginatedQuery";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<BasicQuery />} />
        <Route path="/paginated" element={<PaginatedQuery />} />
        <Route path="/infinite" element={<InfiniteQuery />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/user/edit/:id" element={<EditUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
