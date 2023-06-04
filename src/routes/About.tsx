import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div>
      <div className="about_box">
        <div className="about_txt">About Us</div>
        <div className="about_bg"></div>
      </div>

      <div>
        <ul className="aboutList">
          <li>
            <Link to="/about/company">회사소개</Link>
          </li>
          <li>
            <Link to="/about/history">회사소개</Link>
          </li>
          <li>
            <Link to="/about/ci">회사소개</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
