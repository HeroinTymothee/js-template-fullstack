import React from "react";
import "@styles/Header.scss";
import NavZ from "./Nav";

const Header = () => {
  return (
    <div className="Header">
      <NavZ />
      <div className="H-body">
        <img src="http://localhost:8000/assets/logoApex.png" alt="logo" />
      </div>
    </div>
  );
};

export default Header;
