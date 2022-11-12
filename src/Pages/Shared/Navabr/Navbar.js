import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <li className="rounded-lg">
        <Link to="/" className="rounded-lg">Home</Link>
      </li>
      <li className="rounded-lg">
        <Link to="/about" className="rounded-lg">About</Link>
      </li>
      <li className="rounded-lg">
        <Link to="/appointment" className="rounded-lg">Appointment</Link>
      </li>
      <li >
        <Link to="review" className="rounded-lg">Review</Link>
      </li>
      <li className="rounded-lg">
        <Link to="/login" className="rounded-lg">Login</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="normal-case text-xl ">Doctor Portal</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ">{menuItems}</ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;