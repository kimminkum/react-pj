import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Business.css";

import HmcFB from "../components/HmcFB";
import HmcMedical from "../components/HmcMedical";
import Offline from "../components/Offline";
import HmcLab from "../components/HmcLab";
import HmcPayment from "../components/HmcPayment";
import Subs from "../components/Subs";

interface BusinessProps {
  windowWidth: number;
}

const Business: React.FC<BusinessProps> = ({ windowWidth }) => {
  const [selectedTab, setSelectedTab] = useState("hmcfb");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  let content;
  if (selectedTab === "hmcfb") {
    content = <HmcFB windowWidth={windowWidth} />;
  } else if (selectedTab === "hmcmedical") {
    content = <HmcMedical windowWidth={windowWidth} />;
  } else if (selectedTab === "offline") {
    content = <Offline windowWidth={windowWidth} />;
  } else if (selectedTab === "hmcLab") {
    content = <HmcLab windowWidth={windowWidth} />;
  } else if (selectedTab === "hmcPayment") {
    content = <HmcPayment windowWidth={windowWidth} />;
  } else if (selectedTab === "subs") {
    content = <Subs windowWidth={windowWidth} />;
  }
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

      {content}
    </>
  );
};

export default Business;
