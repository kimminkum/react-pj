import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import imgLogo from "../image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

function Header() {
  return (
    <div>
      <div className="topbar flex_sb">
        {/* Logo */}
        <Link to="/">
          <div>
            <img src={imgLogo} alt="" />
          </div>
        </Link>

        <div>
          {/* pc */}
          <div className="flex_end"></div>
          {/* mobile */}
          <div>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
