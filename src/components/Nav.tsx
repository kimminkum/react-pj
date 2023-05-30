import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <div>
      <ul className="navList">
        <li>
          <Link to="/">HOME</Link>
        </li>
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
  );
};

export default Nav;
