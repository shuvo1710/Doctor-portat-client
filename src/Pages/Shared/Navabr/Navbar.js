import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Navbar = () => {
  const {user,logOut}= useContext(AuthContext)

  const handleSignOut=()=>{
    logOut()
    .than(()=>{
      toast.success('SuccessFully Sign Out')

    })
    .catch(err=>{
      console.error(err)
    })
  }
  const navItems = (
    <>
      <li>
        <Link to="/" className="rounded font-semibold">
          Home
        </Link>
      </li>
      <li>
        <Link to="/About" className="rounded font-semibold">
          About
        </Link>
      </li>
      <li>
        <Link to="/appointment" className="rounded font-semibold">
          Appointment
        </Link>
      </li>
      <li>
        <Link to="/reviews" className="rounded font-semibold">
          Reviews
        </Link>
      </li>
      <li>
        <Link to="/contact" className="rounded font-semibold">
          Contact Us
        </Link>
      </li>
      {user? 
      <>
      <li>
        <Link  onClick={handleSignOut} className="rounded font-semibold">
          Sign Out
        </Link>
      </li>

      <li>
      <Link to="/dashboard" className="rounded font-semibold">
        Dashboard
      </Link>
      </li>
      </>
      :
      <li>
        <Link to="/login"   className="rounded font-semibold">
          Sign in
        </Link>
      </li>
      }
    </>
  );
  return (
    <div className="navbar bg-base-100 flex justify-between">
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
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="normal-case text-xl font-bold">
          Doctors Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
      </div>
      <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
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

    </div>
  );
};

export default Navbar;
