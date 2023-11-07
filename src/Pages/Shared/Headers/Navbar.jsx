import { Link, NavLink } from "react-router-dom";
// import Banner from "./Banner";

const Navbar = () => {
  const links = (
    <>
      <ul className="   lg:text-xl  lg:flex justify-evenly">
        <li>
          <NavLink
            to="/news"
            className={({ isActive, isPending }) =>
              isActive ? " text-blue-600" : isPending ? "pending" : ""
            }
          >
            News
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/destiny"
            className={({ isActive, isPending }) =>
              isActive ? "text-blue-600" : isPending ? "pending" : ""
            }
          >
            Destination
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/Blog"
            className={({ isActive, isPending }) =>
              isActive ? "text-blue-600" : isPending ? "pending" : ""
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/Contact"
            className={({ isActive, isPending }) =>
              isActive ? "text-blue-600" : isPending ? "pending" : ""
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );

  return (
    <div className="navbar       ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn   btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost    normal-case text-2xl">
          Travel Xone
        </Link>
      </div>
      <div className="form-control">
        {}
        {/* <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button> */}
        <input
          type="text"
          placeholder="Search Your Destiny"
          className="input  border-black  w-24    md:w-auto"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
