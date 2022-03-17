import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"} className="link">
        Index
      </Link>
      <Link to={"/create"} className="link">
        Create
      </Link>
      <p>update</p>
      <p>delete</p>
    </div>
  );
};
export default Navbar;
