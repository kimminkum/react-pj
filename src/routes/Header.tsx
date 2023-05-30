import { Link } from "react-router-dom";

import imgLogo from "../image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC<{ windowWidth: number }> = ({ windowWidth }) => {
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
          {windowWidth > 769 && (
            <div className="flex_end">
              <div></div>
            </div>
          )}

          {/* mobile */}
          {windowWidth < 768 && (
            <div>
              <FontAwesomeIcon icon={faBars} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
