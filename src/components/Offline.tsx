import { Navigation, Scrollbar, A11y, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Customers from "../components/Customers";

interface OfflineProps {
  windowWidth: number;
}

const Offline: React.FC<OfflineProps> = ({ windowWidth }) => {
  return (
    <div className="offline">
      <div className="bu_info">
        <div className="bu_txt">
          <h2>오프라인 간병</h2>
          <span></span>
          <p>
            오프라인 간병은 다년간의 업계 경력 노하우로 60여 곳의 1,2,3차
            의료기관에 간병 서비스를 안정적으로 공급하는 국내 유일 기업입니다.
          </p>
        </div>

        {windowWidth < 1050 && (
          <div className="bu_info_img_box_mb">
            <div className="bu_info_img1">
              <img
                src="https://hmcnetworks.co.kr/img/img_sub06.14edc97c.png"
                alt=""
              />
            </div>
            <div className="bu_info_img2">
              <img
                src="https://hmcnetworks.co.kr/img/img_sub07.b074c8b2.png"
                alt=""
              />
            </div>
          </div>
        )}

        {windowWidth > 1051 && (
          <div className="bu_info_img_box_pc">
            <div className="bu_info_img1">
              <img
                src="https://hmcnetworks.co.kr/img/img_sub06.14edc97c.png"
                alt=""
              />
            </div>
            <div className="bu_info_img2">
              <img
                src="https://hmcnetworks.co.kr/img/img_sub07.b074c8b2.png"
                alt=""
              />
            </div>
          </div>
        )}
      </div>

      <div className="fb">
        <div className="fb_bg"></div>
        <Swiper
          modules={[Navigation, Scrollbar, A11y, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev"
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            {windowWidth < 1050 && (
              <div className="mb">
                <div className="top">
                  <h2>HMC 오프라인 간병의 강점</h2>
                </div>
                <div className="bottom">
                  <div>
                    <h3 className="title_number">01</h3>
                  </div>
                  <div>
                    <h4>일일 공급량 국내 최대 규모</h4>
                    <h5>
                      간병 서비스 공급량이 400명 ~ 600명으로 국내 최대 규모를
                      자랑합니다.
                    </h5>
                  </div>
                </div>
              </div>
            )}
            {windowWidth > 1051 && (
              <div className="pc flex_sb">
                <div className="left_box">
                  <h1 className="title">HMC 오프라인 간병의 강점</h1>
                </div>
                <div className="right_box flex_start">
                  <div>
                    <h1 className="title_number">01</h1>
                  </div>
                  <div className="fb_txt">
                    <h3>일일 공급량 국내 최대 규모</h3>
                    <h5>
                      간병 서비스 공급량이 400명 ~ 600명으로 국내 최대 규모를
                      자랑합니다.
                    </h5>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {windowWidth < 1050 && (
              <div className="mb">
                <div className="top">
                  <h2>HMC 오프라인 간병의 강점</h2>
                </div>
                <div className="bottom">
                  <div>
                    <h3 className="title_number">02</h3>
                  </div>
                  <div>
                    <h4>간병인 공급병원 60개사 이상</h4>
                    <h5>
                      오프라인 강병은 60여 곳의 1,2,3차 의료 기관에 간병인을
                      공급하는 유일한 회사입니다.
                    </h5>
                  </div>
                </div>
              </div>
            )}
            {windowWidth > 1051 && (
              <div className="pc flex_sb">
                <div className="left_box">
                  <h1 className="title">HMC 오프라인 간병의 강점</h1>
                </div>
                <div className="right_box">
                  <div className="flex_start">
                    <div>
                      <h1 className="title_number">02</h1>
                    </div>
                    <div className="fb_txt">
                      <h3>간병인 공급병원 60개사 이상</h3>
                      <h5>
                        오프라인 강병은 60여 곳의 1,2,3차 의료 기관에 간병인을
                        공급하는 유일한 회사입니다.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {windowWidth < 1050 && (
              <div className="mb">
                <div className="top">
                  <h2>HMC 오프라인 간병의 강점</h2>
                </div>
                <div className="bottom">
                  <div>
                    <h3 className="title_number">03</h3>
                  </div>
                  <div>
                    <h4>간병인배상책임보험</h4>
                    <h5>
                      다년간의 업력을 인정받아 단체보험 가입을 완료했습니다.
                    </h5>
                  </div>
                </div>
              </div>
            )}
            {windowWidth > 1051 && (
              <div className="pc flex_sb">
                <div className="left_box">
                  <h1 className="title">HMC 오프라인 간병의 강점</h1>
                </div>
                <div className="right_box flex_start">
                  <div>
                    <h1 className="title_number">03</h1>
                  </div>
                  <div className="fb_txt">
                    <h3>간병인배상책임보험</h3>
                    <h5>
                      다년간의 업력을 인정받아 단체보험 가입을 완료했습니다.
                    </h5>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>

      <Customers windowWidth={windowWidth} />
    </div>
  );
};

export default Offline;
