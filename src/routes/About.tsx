import { useState } from "react";
import { Link } from "react-router-dom";

import Company from "../components/Company";
import History from "../components/History";
import Si from "../components/Si";

const About: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("company");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  let content;
  if (selectedTab === "company") {
    content = <Company />;
  } else if (selectedTab === "history") {
    content = <History />;
  } else if (selectedTab === "si") {
    content = <Si />;
  }

  return (
    <div>
      <div className="about_box">
        <div className="about_txt">About Us</div>
        <div className="about_bg"></div>
      </div>

      <div>
        <ul className="aboutList">
          <li>
            <Link to="#" onClick={() => handleTabClick("company")}>
              회사소개
            </Link>
          </li>
          <li>
            <Link to="#" onClick={() => handleTabClick("history")}>
              역사
            </Link>
          </li>
          <li>
            <Link to="#" onClick={() => handleTabClick("si")}>
              SI
            </Link>
          </li>
        </ul>
      </div>

      {content}
    </div>
  );
};

export default About;
