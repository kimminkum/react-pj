import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <h3>Main</h3>
      <ul>
        <Link to="/product/1">
          <li>1번상품</li>
        </Link>
        <Link to="/product/2">
          <li>2번상품</li>
        </Link>
      </ul>
    </div>
  );
}
