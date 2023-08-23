import React from "react";
// import { Link } from "react-router-dom";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "../css/Main.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import MainSectionPc from "../components/MainSectionPc";
import MainSectionMb from "../components/MainSectionMb";

import main01 from "../image/main01.png";
import mainm01 from "../image/mainm01.jpg";
import main02 from "../image/main02.jpg";
import mainm02 from "../image/mainm02.jpg";
import main03 from "../image/main03.jpg";
import mainm03 from "../image/mainm03.jpg";
import main04 from "../image/main04.jpg";
import mainm04 from "../image/mainm04.jpg";
import main05 from "../image/main05.jpg";
import mainm05 from "../image/mainm05.jpg";
import main06 from "../image/main06.jpg";
import mainm06 from "../image/mainm06.jpg";
import main07 from "../image/main07.jpg";
import mainm07 from "../image/mainm07.jpg";

interface MainProps {
  windowWidth: number;
}

const Main: React.FC<MainProps> = ({ windowWidth }) => {
  return (
    <div>
      <div className="banner">
        <Swiper
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev"
          }}
          autoplay={{ delay: 3000 }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="banner_box">
              {/* img */}
              <div className="img_box">
                {/* pc */}
                {windowWidth > 769 && <img src={main01} alt="" />}

                {/* mb */}
                {windowWidth < 768 && <img src={mainm01} alt="" />}
              </div>

              {/* txt button */}
              {windowWidth > 769 && (
                <div className="txt_box">
                  <h1>주식회사 에이치엠씨네트웍스</h1>
                  <hr />
                  <h4>
                    환자존중 이념을 바탕으로 의료산업에 선한 영향력을
                    행사합니다.
                  </h4>
                  <button className="img_button">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
              {windowWidth < 768 && (
                <div className="txt_box_mb">
                  <h2>주식회사 에이치엠씨네트웍스</h2>
                  <p>
                    환자존중 이념을 바탕으로 의료산업에 선한 영향력을
                    행사합니다.
                  </p>
                  <button className="img_button_m">
                    <span>Deatail view</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              {/* img */}
              <div className="img_box">
                {/* pc */}
                {windowWidth > 769 && <img src={main02} alt="" />}

                {/* mb */}
                {windowWidth < 768 && <img src={mainm02} alt="" />}
              </div>

              {/* txt button */}
              {windowWidth > 769 && (
                <div className="txt_box">
                  <h1>HMC F&B</h1>
                  <hr />
                  <h4>
                    친환경 물류 인프라를 기반으로 3만 여종의 건강한 식자재를
                    병원 및 다수의 기관에 신선하게 공급합니다.
                  </h4>
                  <button className="img_button">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
              {windowWidth < 768 && (
                <div className="txt_box_mb">
                  <h2>HMC F&B</h2>
                  <p>
                    친환경 물류 인프라를 기반으로 3만 여종의 건강한 식자재를
                    병원 및 다수의 기관에 신선하게 공급합니다.
                  </p>
                  <button className="img_button_m">
                    <span>Deatail view</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              {/* img */}
              <div className="img_box">
                {/* pc */}
                {windowWidth > 769 && <img src={main03} alt="" />}

                {/* mb */}
                {windowWidth < 768 && <img src={mainm03} alt="" />}
              </div>

              {/* txt button */}
              {windowWidth > 769 && (
                <div className="txt_box">
                  <h1 className="black_txt">HMC MEDICAL</h1>
                  <hr />
                  <h4 className="black_txt">
                    의료기기 및 의료, 임상, 복지 용품 등 약 3,000 여 가지의
                    의료소모품 유통 및 온-오프라인 판매를 진행합니다.
                  </h4>
                  <button className="img_button black_txt">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
              {windowWidth < 768 && (
                <div className="txt_box_mb">
                  <h2 className="black_txt">HMC MEDICAL</h2>
                  <p className="black_txt">
                    의료기기 및 의료, 임상, 복지 용품 등 약 3,000 여 가지의
                    의료소모품 유통 및 온-오프라인 판매를 진행합니다.
                  </p>
                  <button className="img_button_m black_txt">
                    <span>Deatail view</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              {/* img */}
              <div className="img_box">
                {/* pc */}
                {windowWidth > 769 && <img src={main04} alt="" />}

                {/* mb */}
                {windowWidth < 768 && <img src={mainm04} alt="" />}
              </div>

              {/* txt button */}
              {windowWidth > 769 && (
                <div className="txt_box">
                  <h1>오프라인 간병</h1>
                  <hr />
                  <h4>
                    다년간의 업계 경력 노하우로 60여 곳의 1,2,3차 의료기관에
                    간병 서비스를 안정적으로 연결하고 있습니다.
                  </h4>
                  <button className="img_button">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
              {windowWidth < 768 && (
                <div className="txt_box_mb">
                  <h2>오프라인 간병</h2>
                  <p>
                    다년간의 업계 경력 노하우로 60여 곳의 1,2,3차 의료기관에
                    간병 서비스를 안정적으로 연결하고 있습니다.
                  </p>
                  <button className="img_button_m">
                    <span>Deatail view</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              {/* img */}
              <div className="img_box">
                {/* pc */}
                {windowWidth > 769 && <img src={main05} alt="" />}

                {/* mb */}
                {windowWidth < 768 && <img src={mainm05} alt="" />}
              </div>

              {/* txt button */}
              {windowWidth > 769 && (
                <div className="txt_box">
                  <h1 className="black_txt">HMC LAB.</h1>
                  <hr />
                  <h4 className="black_txt">
                    환자의 의료 정보 및 이동을 기반으로 한 개인 맞춤형 연결
                    플랫폼으로 환자와 간병인, 의료기관을 연결하는 앱 서비스,
                    케어네이션을 개발합니다.
                  </h4>
                  <button className="img_button black_txt">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
              {windowWidth < 768 && (
                <div className="txt_box_mb">
                  <h2 className="black_txt">HMC LAB.</h2>
                  <p className="black_txt">
                    환자의 의료 정보 및 이동을 기반으로 한 개인 맞춤형 연결
                    플랫폼으로 환자와 간병인, 의료기관을 연결하는 앱 서비스,
                    케어네이션을 개발합니다.
                  </p>
                  <button className="img_button_m black_txt">
                    <span>Deatail view</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              {/* img */}
              <div className="img_box">
                {/* pc */}
                {windowWidth > 769 && <img src={main06} alt="" />}

                {/* mb */}
                {windowWidth < 768 && <img src={mainm06} alt="" />}
              </div>

              {/* txt button */}
              {windowWidth > 769 && (
                <div className="txt_box">
                  <h1>HMC PAYMENT</h1>
                  <hr />
                  <h4>
                    간병비와 병원비 결제를 한 번에 할 수 있도록 온/오프라인 통합
                    결제 시스템 및 종합 정보 보호 솔루션 페이먼트를 구축합니다.
                  </h4>
                  <button className="img_button">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
              {windowWidth < 768 && (
                <div className="txt_box_mb">
                  <h2>HMC PAYMENT</h2>
                  <p>
                    간병비와 병원비 결제를 한 번에 할 수 있도록 온/오프라인 통합
                    결제 시스템 및 종합 정보 보호 솔루션 페이먼트를 구축합니다.
                  </p>
                  <button className="img_button_m">
                    <span>Deatail view</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              {/* img */}
              <div className="img_box">
                {/* pc */}
                {windowWidth > 769 && <img src={main07} alt="" />}

                {/* mb */}
                {windowWidth < 768 && <img src={mainm07} alt="" />}
              </div>

              {/* txt button */}
              {windowWidth > 769 && (
                <div className="txt_box">
                  <h1>Subsidiaries</h1>
                  <hr />
                  <h4>
                    헬스케어 시장 전체를 연결하는 비즈니스 서클을 구축하기 위해
                    다양한 파트너십을 형성하며 성장하고 있습니다.
                  </h4>
                  <button className="img_button">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
              {windowWidth < 768 && (
                <div className="txt_box_mb">
                  <h2>Subsidiaries</h2>
                  <p>
                    헬스케어 시장 전체를 연결하는 비즈니스 서클을 구축하기 위해
                    다양한 파트너십을 형성하며 성장하고 있습니다.
                  </p>
                  <button className="img_button_m">
                    <span>Deatail view</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        </Swiper>

        {windowWidth > 1201 && (
          <div className="nav_pc">
            <div className="custom-navigation">
              <div className="custom-prev"></div>
              <div className="custom-next"></div>
            </div>
          </div>
        )}
        {windowWidth < 1200 && (
          <div className="custom-navigation nav_mb">
            <div className="custom-prev"></div>
            <div className="custom-next"></div>
          </div>
        )}
      </div>

      <div>
        {windowWidth > 769 && <MainSectionPc></MainSectionPc>}
        {windowWidth < 768 && <MainSectionMb></MainSectionMb>}
      </div>

      <div className="news">
        {windowWidth > 1201 && (
          <div className="news_pc">
            <div className="news_left">
              <h1>HMC NEWS</h1>
              <h4>
                주식회사 에이치엠씨네트웍스의 새로운 소식과 유용한 자료들을
                생생하게 알려드립니다.
              </h4>
              <button className="second_button">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="news_right">
              <ul>
                <li>
                  <h3>
                    케어네이션, 코바코 혁신 AD-Venture 대상 '지역상생 부문' 수상
                  </h3>
                  <p>
                    케어네이션은 일자리 창출, 매출 성장, 크리에이티브 평가 등의
                    종합 평가에서 우수한 점수를 받았다.
                  </p>
                </li>
                <li>
                  <h3>
                    케어네이션, 헬스케어 슈퍼 플랫폼 '케어네이션 2.0' 런칭
                  </h3>
                  <p>
                    간병 플랫폼을 넘어 진료부터 간병, 요양까지 다양한 헬스케어
                    서비스를 담은 '케어네이션 2.0'을 새롭게 런칭했다.
                  </p>
                </li>
                <li>
                  <h3>
                    헬스케어 슈퍼 플랫폼 케어네이션, 배우 차승원 전속 모델 발탁
                  </h3>
                  <p>
                    모두에게 사랑받는 차승원과 헬스케어 서비스로 확장한
                    케어네이션이 만나 큰 시너지 효과를 낼 것으로 기대된다.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        )}
        {windowWidth < 1200 && (
          <div className="news_mb">
            <div className="news_top">
              <h2>HMC NEWS</h2>
              <p>
                주식회사 에이치엠씨네트웍스의 새로운 소식과
                <br />
                유용한 자료들을 생생하게 알려드립니다.
              </p>
              <button>
                Detail view <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

            <div>
              <ul>
                <li>
                  <h4>
                    케어네이션, 코바코 혁신 AD-Venture 대상 '지역상생 부문' 수상
                  </h4>
                  <p>
                    케어네이션은 일자리 창출, 매출 성장, 크리에이티브 평가 등의
                    종합 평가에서 우수한 점수를 받았다.
                  </p>
                </li>
                <li>
                  <h4>
                    케어네이션, 헬스케어 슈퍼 플랫폼 '케어네이션 2.0' 런칭
                  </h4>
                  <p>
                    간병 플랫폼을 넘어 진료부터 간병, 요양까지 다양한 헬스케어
                    서비스를 담은 '케어네이션 2.0'을 새롭게 런칭했다.
                  </p>
                </li>
                <li>
                  <h4>
                    헬스케어 슈퍼 플랫폼 케어네이션, 배우 차승원 전속 모델 발탁
                  </h4>
                  <p>
                    모두에게 사랑받는 차승원과 헬스케어 서비스로 확장한
                    케어네이션이 만나 큰 시너지 효과를 낼 것으로 기대된다.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        )}
        <div className="news_bg"></div>
      </div>
    </div>
  );
};

export default Main;
