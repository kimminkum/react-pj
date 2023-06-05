import { Link } from "react-router-dom";

interface HistoryProps {
  isNavToggle: boolean;
  onToggle: () => void;
}

const Nav: React.FC<HistoryProps> = ({ onToggle }) => {
  return (
    <div>
      <ul className="navList">
        <li onClick={onToggle}>
          <Link to="/">HOME</Link>
        </li>
        <li onClick={onToggle}>
          <Link to="/about/company">ABOUT US</Link>
        </li>
        <li onClick={onToggle}>
          <Link to="/business">BUSINESS</Link>
        </li>
        <li onClick={onToggle}>
          <Link to="/pr">PR</Link>
        </li>
        <li onClick={onToggle}>
          <Link to="/careers">CAREERS</Link>
        </li>
        <li onClick={onToggle}>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
