import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-between mt-4">
      <div className="font-bold text-[20px] text-green-700">
        <h1>QUERY CRUD</h1>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="font-bold">
              Basic
            </Link>
          </li>
          <li>
            <Link to="/paginated" className="font-bold">
              Paginated
            </Link>
          </li>
          <li>
            <Link to="/infinite" className="font-bold">
              Infinite
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
