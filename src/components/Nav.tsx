import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <ul className="navList">
        <li>
          <Link to="/">Hoem</Link>
        </li>
        <li>
          <Link to="/product/*">Product</Link>
        </li>
        <li>
          <Link to="/routerpropstest">RouterPropsTest</Link>
        </li>
      </ul>
    </>
  );
}
