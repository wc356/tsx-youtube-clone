import React from "react";

import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a>YouTube</a>
      <div>
        <div>Search</div>
        <a>Profile</a>
      </div>
    </nav>
  );
};

export default Navbar;
