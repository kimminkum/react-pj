import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MainSectionMb: React.FC = () => {
  return (
    <div>
      <div className="second_article flex_center">
        <div className="flex_box_mb">
          <div className="second_title">
            <h1>Our Service</h1>
            <p>
              주식회사 에이치엠네트웍스는 전문성, 창의성, 혁신을 추구하여 최고의
              서비스를 제공하기 위해 끊임없이 노력합니다.
            </p>
          </div>

          <div className="mb_section">
            <div className="banner">
              <Swiper
                spaceBetween={20}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="section_box">
                    <div className="second_img_box">
                      <img
                        src="https://hmcnetworks.co.kr/img/img_mainser_02.403ea325.jpg"
                        alt="의약품 사진"
                      />
                    </div>

                    <div className="second_txt_box">
                      <h3>HMC MEDICAL</h3>
                      <p>
                        의료기기 및 의료, 임상, 복지 용품 등 약 3,000 여 가지의
                        의료소모품 유통 및 온-오프라인 판매를 진행합니다.
                      </p>
                      <button className="second_button_mb">
                        <span>Detail View</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="section_box">
                    <div className="second_img_box">
                      <img
                        src="https://hmcnetworks.co.kr/img/img_mainser_02.403ea325.jpg"
                        alt="의약품 사진"
                      />
                    </div>

                    <div className="second_txt_box">
                      <h3>HMC MEDICAL</h3>
                      <p>
                        의료기기 및 의료, 임상, 복지 용품 등 약 3,000 여 가지의
                        의료소모품 유통 및 온-오프라인 판매를 진행합니다.
                      </p>
                      <button className="second_button_mb">
                        <span>Detail View</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="section_box">
                    <div className="second_img_box">
                      <img
                        src="https://hmcnetworks.co.kr/img/img_mainser_02.403ea325.jpg"
                        alt="의약품 사진"
                      />
                    </div>

                    <div className="second_txt_box">
                      <h3>HMC MEDICAL</h3>
                      <p>
                        의료기기 및 의료, 임상, 복지 용품 등 약 3,000 여 가지의
                        의료소모품 유통 및 온-오프라인 판매를 진행합니다.
                      </p>
                      <button className="second_button_mb">
                        <span>Detail View</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="section_box">
                    <div className="second_img_box">
                      <img
                        src="https://hmcnetworks.co.kr/img/img_mainser_02.403ea325.jpg"
                        alt="의약품 사진"
                      />
                    </div>

                    <div className="second_txt_box">
                      <h3>HMC MEDICAL</h3>
                      <p>
                        의료기기 및 의료, 임상, 복지 용품 등 약 3,000 여 가지의
                        의료소모품 유통 및 온-오프라인 판매를 진행합니다.
                      </p>
                      <button className="second_button_mb">
                        <span>Detail View</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSectionMb;
