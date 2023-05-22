import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="topbar">
        {/* logo */}
        <Link to="/">
          <div></div>
        </Link>

        {/* bar */}
        <div></div>
      </div>
    </div>
  );
}

export default Header;
