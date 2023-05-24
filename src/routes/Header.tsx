import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import imgLogo from "../image/logo.png";

function Header() {
  return (
    <div className="mb">
      <div className="topbar flex_sb">
        {/* bar */}
        <div>
          <a href="">happy</a>
        </div>

        {/* logo */}
        <Link to="/">
          <div>
            <img src={imgLogo} alt="" />
          </div>
        </Link>

        {/*  */}
        <div>d</div>
      </div>
    </div>
  );
}

export default Header;
