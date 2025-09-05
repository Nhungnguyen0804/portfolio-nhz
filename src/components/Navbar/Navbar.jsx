import React from "react";
import "./Navbar.css";
import NavbarItem from "./NavbarItem.jsx";
function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar-nav">
        <NavbarItem content="Home" link />
      </nav>
    </div>
  );
}
export default Navbar;
