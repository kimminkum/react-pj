import { useState } from "react";
import { Link } from "react-router-dom";

// import HmcTalent from "../components/HmcTalent";
// import Welfare from "../components/Welfare";

interface CareersProps {
  windowWidth: number;
}

const Careers: React.FC<CareersProps> = ({ windowWidth }) => {
  const [selectedTab, setSelectedTab] = useState("hmctalent");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  //   let content;
  //   if (selectedTab === "hmcfb") {
  //     content = <HmcTalent windowWidth={windowWidth} />;
  //   } else if (selectedTab === "hmcmedical") {
  //     content = <Welfare windowWidth={windowWidth} />;
  //   }

  return (
    <>
      <div className="business_box">
        <div className="business_txt">
          <h1>Business</h1>
        </div>

        <div className="business_tab">
          <ul className="businessList">
            <li>
              <Link to="#" onClick={() => handleTabClick("hmcfb")}>
                HMC F&B
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleTabClick("hmcmedical")}>
                HMC MEDICAL
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleTabClick("offline")}>
                오프라인 간병
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleTabClick("hmcLab")}>
                HMC LAB.
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleTabClick("hmcPayment")}>
                HMC PAYMENT
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleTabClick("subs")}>
                Subsidiaries
              </Link>
            </li>
          </ul>
        </div>
        <div className="business_bg"></div>
      </div>

      {/* {content} */}
    </>
  );
};

export default Careers;
