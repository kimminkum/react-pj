import Customers from "../components/Customers";

import medit01 from "../image/medit01.png";
import medit02 from "../image/medit02.png";

interface HmcMedicalProps {
  windowWidth: number;
}

const HmcMedical: React.FC<HmcMedicalProps> = ({ windowWidth }) => {
  return (
    <>
      <div className="bu_info">
        <div className="bu_txt">
          <h2>HMC MEDICAL</h2>
          <span></span>
          <p>
            HMC 메디컬은 의료전문 B2B 와 B2C 쇼핑몰을 운영하면서 의료용품,
            의료기기, 한방용품, 복지용품 등 약 3,000여 가지 고품질 의료소모품을
            저렴한 가격으로 유통 및 온-오프라인 판매를 진행합니다.
          </p>
        </div>

        {windowWidth < 1050 && (
          <div className="bu_info_img_box_mb">
            <div className="bu_info_img1">
              <img src={medit01} alt="" />
            </div>
            <div className="bu_info_img2">
              <img src={medit02} alt="" />
            </div>
          </div>
        )}

        {windowWidth > 1051 && (
          <div className="bu_info_img_box_pc">
            <div className="bu_info_img1">
              <img src={medit01} alt="" />
            </div>
            <div className="bu_info_img2">
              <img src={medit02} alt="" />
            </div>
          </div>
        )}
      </div>

      <div className="shop">
        <a href="#">
          <div className="bg"></div>

          <div className="txt">
            <h1>일반회원 전용 쇼핑몰</h1>

            <button>홈페이지 가기&nbsp;&nbsp;&nbsp;&nbsp;→</button>
          </div>
        </a>

        <a href="#">
          <div className="bg"></div>

          <div className="txt">
            <h1>사업자회원 전용 쇼핑몰</h1>

            <button>홈페이지 가기&nbsp;&nbsp;&nbsp;&nbsp;→</button>
          </div>
        </a>
      </div>

      <Customers windowWidth={windowWidth} />
    </>
  );
};

export default HmcMedical;
