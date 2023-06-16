import { Link } from "react-router-dom";
import "../css/Header.css";

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
        <Link to="/react-pj">
          <div>
            <img src={imgLogo} alt="" />
          </div>
        </Link>

        <div>
          {/* pc */}
          {windowWidth > 1024 && (
            <div className="flex_end">
              <ul className="pc_nav">
                <li>
                  <Link to="/react-pj/about/company">ABOUT US</Link>
                </li>
                <li>
                  <Link to="/react-pj/business/hmcfb">BUSINESS</Link>
                </li>
                <li>
                  <Link to="/react-pj/pr">PR</Link>
                </li>
                <li>
                  <Link to="/react-pj/careers/hmctalent">CAREERS</Link>
                </li>
                <li>
                  <Link to="/react-pj/contact">CONTACT</Link>
                </li>
              </ul>
            </div>
          )}

          {/* mobile */}
          {windowWidth < 1023 && (
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
