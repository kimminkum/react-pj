import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import Nav from "../components/Nav";

import imgLogo from "../image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  windowWidth: number;
  isNavToggle: boolean;
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ windowWidth, onToggle }) => {
  return (
    <div>
      <div className="flex_sb topbar">
        {/* Logo */}
        <Link to="/">
          <div>
            <img src={imgLogo} alt="" />
          </div>
        </Link>

        <div>
          {/* pc */}
          {windowWidth > 769 && (
            <div className="flex_end">
              <ul className="pc_nav">
                <li>
                  <Link to="/product/*">ABOUT US</Link>
                </li>
                <li>
                  <Link to="/business">BUSINESS</Link>
                </li>
                <li>
                  <Link to="/pr">PR</Link>
                </li>
                <li>
                  <Link to="/careers">CAREERS</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
              </ul>
            </div>
          )}

          {/* mobile */}
          {windowWidth < 768 && (
            <div className="icons_box" onClick={onToggle}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
