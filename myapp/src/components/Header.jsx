import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav className="header">
      <h1>INBOUNDSYS ASSIGNMENT</h1>
      <main>
        <HashLink to={"/#Checklist"}>Checklist</HashLink>
        <Link to={"/Search"}>Search</Link>
        
      </main>
    </nav>
  );
};

export default Header;
