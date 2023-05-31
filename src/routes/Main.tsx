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

interface MainProps {
  windowWidth: number;
}

export default class Main extends React.Component<MainProps> {
  render() {
    const { windowWidth } = this.props;

    return (
      <div>
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
                {windowWidth > 769 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_01.bba41750.jpg"
                    alt=""
                  />
                )}

                {/* mb */}
                {windowWidth < 768 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_m01.c7b45578.jpg"
                    alt=""
                  />
                )}
              </div>

              {/* txt button */}
              {windowWidth > 769 && (
                <div className="txt_box">
                  <h1>에이치엠씨</h1>
                  <hr />
                  <h4></h4>
                  <button className="img_button">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              )}
              {windowWidth < 768 && (
                <div className="txt_box_mb">
                  <h2>에이치엠씨</h2>
                  <p></p>
                  <button className="img_button_m">
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
                {windowWidth > 769 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_02.bd47f48f.jpg"
                    alt=""
                  />
                )}

                {/* mb */}
                {windowWidth < 768 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_m02.ed88ed49.jpg"
                    alt=""
                  />
                )}
              </div>

              {/* txt button */}
              <div className="txt_box">
                <h1></h1>
                <hr />
                <h4></h4>
                <button className="img_button">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
              <div className="txt_box_mb">
                <h2></h2>
                <p></p>
                <button className="img_button_m">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              {/* img */}
              <div className="img_box">
                {/* pc */}
                {windowWidth > 769 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_03.7231785b.jpg"
                    alt=""
                  />
                )}

                {/* mb */}
                {windowWidth < 768 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_m03.734b4617.jpg"
                    alt=""
                  />
                )}
              </div>

              {/* txt button */}
              <div className="txt_box">
                <h1></h1>
                <hr />
                <h4></h4>
                <button className="img_button">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
              <div className="txt_box_mb">
                <h2></h2>
                <p></p>
                <button className="img_button_m">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_box">
              {/* img */}
              <div className="img_box">
                {/* pc */}
                {windowWidth > 769 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_04.944b1a50.jpg"
                    alt=""
                  />
                )}

                {/* mb */}
                {windowWidth < 768 && (
                  <img
                    src="https://hmcnetworks.co.kr/img/bg_main_m04.9c4e7a32.jpg"
                    alt=""
                  />
                )}
              </div>

              {/* txt button */}
              {/* txt button */}
              <div className="txt_box">
                <h1></h1>
                <hr />
                <h4></h4>
                <button className="img_button">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
              <div className="txt_box_mb">
                <h2></h2>
                <p></p>
                <button className="img_button_m">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </SwiperSlide>
          ...
        </Swiper>
        <div className="custom-navigation">
          <div className="custom-prev"></div>
          <div className="custom-next"></div>
        </div>
      </div>
    );
  }
}
