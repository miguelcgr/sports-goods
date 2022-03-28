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
          Products
        </NavLink>
        <NavLink to={"/new-ad"} activeclassname="active" className="link">
          Create
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
