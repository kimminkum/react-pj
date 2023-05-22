import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div>
        {/* logo */}
        <div></div>

        {/* bar */}
        <div></div>

        <p>header</p>
        <Link to="/">
          <h1>헤더입니다.</h1>
        </Link>
      </div>
    </div>
  );
}

export default Header;
