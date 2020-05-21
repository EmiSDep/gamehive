import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="header">
      <h1 className="title">
        <Link to="/">Welcome to GameHive!</Link>
      </h1>
      <div className="navigation">
        <Link to="/addResource">Add Resource</Link>
      </div>
    </div>
  );
};

export default Navbar;