import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface HmcLabProps {
  windowWidth: number;
}

const HmcLab: React.FC<HmcLabProps> = ({ windowWidth }) => {
  const bullet = ["1번", "2번", "3번"];

  SwiperCore.use([Navigation, Pagination]);

  return (
    <>
      <div className="bu_info">
        <div className="bu_txt">
          <h2>HMC LAB.</h2>
          <span></span>
          <p>
            케어네이션은 빅데이터를 활용하여 의료산업 서비스의 혁신을 이끌고자
            합니다. 가벼운 경증 환자부터 만성질환 환자 모두가 편하게 이용할 수
            있는 최고의 헬스케어 서비스를 제공하기 위해 노력하겠습니다.
          </p>
        </div>
      </div>

      <div className="lab">
        <div>
          <img src="" alt="" />
        </div>

        {windowWidth > 1051 && (
          <div className="pc">
            <div></div>

            <div></div>
          </div>
        )}

        {windowWidth < 1050 && (
          <div className="mb">
            <div></div>

            <div></div>
          </div>
        )}
      </div>

      <div className="hmcLab">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<div class="${className}"><span>${bullet[index]}</span></div>`;
            }
          }}
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
                  <h2>HMC F&B만의 특징</h2>
                </div>
                <div className="bottom">
                  <div>
                    <h3 className="title_number">01</h3>
                  </div>
                  <div>
                    <h4>다이렉트 공급 시스템</h4>
                    <h5>
                      주식회사 에이치엠씨네트웍스만의 현지 시장조사와 물류
                      시스템을 기반으로
                      <br />
                      기존 식자재 대비 합리적인 가격 및 품질 경쟁력을
                      제공합니다.
                    </h5>
                  </div>
                </div>
              </div>
            )}
            {windowWidth > 1051 && (
              <div className="pc flex_sb">
                <div className="left_box">
                  <h1 className="title">HMC F&B만의 특징</h1>
                </div>
                <div className="right_box flex_start">
                  <div>
                    <h1 className="title_number">01</h1>
                  </div>
                  <div className="fb_txt">
                    <h3>다이렉트 공급 시스템</h3>
                    <h5>
                      주식회사 에이치엠씨네트웍스만의 현지 시장조사와 물류
                      시스템을 기반으로
                      <br />
                      기존 식자재 대비 합리적인 가격 및 품질 경쟁력을
                      제공합니다.
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
                  <h2>HMC F&B만의 특징</h2>
                </div>
                <div className="bottom">
                  <div>
                    <h3 className="title_number">02</h3>
                  </div>
                  <div>
                    <h4>위탁 공급 시스템</h4>
                    <h5>
                      국내 식자재 공급을 대표하는 대기업 3사의 비교 견적을 통해
                      <br /> 보다 다양한 품목을 보다 저렴하게 공급합니다.
                    </h5>
                  </div>
                  <div className="grid">
                    <div>
                      <img
                        src="https://hmcnetworks.co.kr/img/img_fnb01.bf129b0f.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://hmcnetworks.co.kr/img/img_fnb02.373b7c24.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://hmcnetworks.co.kr/img/img_fnb03.df246f79.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {windowWidth > 1051 && (
              <div className="pc flex_sb">
                <div className="left_box">
                  <h1 className="title">HMC F&B만의 특징</h1>
                </div>
                <div className="right_box">
                  <div className="flex_start">
                    <div>
                      <h1 className="title_number">02</h1>
                    </div>
                    <div className="fb_txt">
                      <h3>위탁 공급 시스템</h3>
                      <h5>
                        국내 식자재 공급을 대표하는 대기업 3사의 비교 견적을
                        통해
                        <br /> 보다 다양한 품목을 보다 저렴하게 공급합니다.
                      </h5>
                    </div>
                  </div>

                  <div className="grid">
                    <div>
                      <img
                        src="https://hmcnetworks.co.kr/img/img_fnb01.bf129b0f.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://hmcnetworks.co.kr/img/img_fnb02.373b7c24.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://hmcnetworks.co.kr/img/img_fnb03.df246f79.png"
                        alt=""
                      />
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
                  <h2>HMC F&B만의 특징</h2>
                </div>
                <div className="bottom">
                  <div>
                    <h3 className="title_number">03</h3>
                  </div>
                  <div>
                    <h4>식자재 관리 전산시스템</h4>
                    <h5>
                      편리한 검색 및 발주는 물론, 오발주 예방을 위한 식자재 전산
                      시스템으로
                      <br /> 보다 편리하게 이용하실 수 있습니다.
                    </h5>
                  </div>
                </div>
              </div>
            )}
            {windowWidth > 1051 && (
              <div className="pc flex_sb">
                <div className="left_box">
                  <h1 className="title">HMC F&B만의 특징</h1>
                </div>
                <div className="right_box flex_start">
                  <div>
                    <h1 className="title_number">03</h1>
                  </div>
                  <div className="fb_txt">
                    <h3>식자재 관리 전산시스템</h3>
                    <h5>
                      편리한 검색 및 발주는 물론, 오발주 예방을 위한 식자재 전산
                      시스템으로
                      <br /> 보다 편리하게 이용하실 수 있습니다.
                    </h5>
                  </div>
                </div>
              </div>
            )}
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
      </div>
    </>
  );
};

export default HmcLab;
