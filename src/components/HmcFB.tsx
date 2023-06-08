import { Scrollbar, A11y, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

interface HmcFBProps {
  windowWidth: number;
}

const HmcFB: React.FC<HmcFBProps> = ({ windowWidth }) => {
  return (
    <>
      <div className="bu_info">
        <div className="bu_txt">
          <h2>HMC F&B</h2>
          <span></span>
          <p>
            HMC F&B는 대기업 3사를 통한 위탁 공급망과 HMC 자체 다이렉트 공급망
            병행 운영으로 고객 경쟁력을 극대화합니다. 또한, 고객사의 운영여건 및
            선호방식에 맞춰 자유롭게 식자재 납품 시스템을 선택할 수 있어 최고의
            경쟁력을 선사합니다!
          </p>
        </div>

        {windowWidth < 1050 && (
          <div className="bu_info_img_box_mb">
            <div className="bu_info_img1">
              <img
                src="https://hmcnetworks.co.kr/img/img_mainser_01.c19a47a4.png"
                alt=""
              />
            </div>
            <div className="bu_info_img2">
              <img
                src="https://hmcnetworks.co.kr/img/img_sub03.a4e7dcc0.png"
                alt=""
              />
            </div>
          </div>
        )}

        {windowWidth > 1051 && (
          <div className="bu_info_img_box_pc">
            <div className="bu_info_img1">
              <img
                src="https://hmcnetworks.co.kr/img/img_mainser_01.c19a47a4.png"
                alt=""
              />
            </div>
            <div className="bu_info_img2">
              <img
                src="https://hmcnetworks.co.kr/img/img_sub03.a4e7dcc0.png"
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HmcFB;
