import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import data from "../../data/products.json";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="store-info">
        <img className="nav-logo" src={data.logo} alt={"store-logo"} />
        <Link to={"/"} className="link">
          {data.name}
        </Link>
      </div>
      <div className="nav-links">
        <NavLink to={"/"} activeclassname="active" className="link">
          Index
        </NavLink>
        <NavLink to={"/create"} activeclassname="active" className="link">
          Create
        </NavLink>
        <NavLink to={"/update"} activeclassname="active" className="link">
          Update
        </NavLink>
        <NavLink to={"/delete"} activeclassname="active" className="link">
          Delete
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
