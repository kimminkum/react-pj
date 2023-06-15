import { useState } from "react";
import { Link } from "react-router-dom";

import "../css/Careers.css";

import HmcTalent from "../components/HmcTalent";
import Welfare from "../components/Welfare";

interface CareersProps {
  windowWidth: number;
}

const Careers: React.FC<CareersProps> = ({ windowWidth }) => {
  const [selectedTab, setSelectedTab] = useState("hmctalent");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  let content;
  if (selectedTab === "hmctalent") {
    content = <HmcTalent windowWidth={windowWidth} />;
  } else if (selectedTab === "welfare") {
    content = <Welfare windowWidth={windowWidth} />;
  }

  return (
    <>
      <div className="careers_box">
        <div className="careers_txt">
          <h1>Careers</h1>
        </div>

        <div className="careers_tab">
          <ul className="careersList">
            <li>
              <Link to="#" onClick={() => handleTabClick("hmctalent")}>
                HMC의 인재상
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleTabClick("welfare")}>
                복리후생
              </Link>
            </li>
          </ul>
        </div>
        <div className="careers_bg"></div>
      </div>

      {content}
    </>
  );
};

export default Careers;
