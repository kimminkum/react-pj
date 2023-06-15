import { Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

interface HmcTalentProps {
  windowWidth: number;
}

const HmcTalent: React.FC<HmcTalentProps> = ({ windowWidth }) => {
  return (
    <>
      <div className="com_info">
        <div className="info_txt">
          <h3>함께 나아갈 우리의 모습</h3>
          <span className="twoline"></span>
        </div>
      </div>

      {windowWidth > 1024 && (
        <div className="tel_pc flex_sb">
          {/* 4개 다보이기 */}
          <div>
            <div>
              <img
                src="https://hmcnetworks.co.kr/img/ic_careers01.c804c23c.png"
                alt=""
              />
            </div>
            <div>
              <h4>소통</h4>
              <p>
                존중하는 마음과 열린 마음으로
                <br /> 다양한 사람들과 유연한 협업을 한다.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://hmcnetworks.co.kr/img/ic_careers02.c0ede1d6.png"
                alt=""
              />
            </div>
            <div>
              <h4>도전</h4>
              <p>
                실패를 두려하지 않고
                <br />
                끊임없이 새로운 시도를 한다.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://hmcnetworks.co.kr/img/ic_careers03.df136173.png"
                alt=""
              />
            </div>
            <div>
              <h4>동반 성장</h4>
              <p>
                책임감과 주도성으로
                <br /> 회사와 함께 성장하고
                <br /> 팀과 함께 성과를 만들어낸다.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://hmcnetworks.co.kr/img/ic_careers04.e63406e2.png"
                alt=""
              />
            </div>
            <div>
              <h4>긍정적 자신감</h4>
              <p>
                '할 수 있는 방법'을 찾는
                <br />
                긍정적인 마음으로
                <br />
                적극적으로 행동한다.
              </p>
            </div>
          </div>
        </div>
      )}
      {windowWidth < 1023 && (
        <div>
          {/* 1개 */}
          <Swiper
            modules={[Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="tel_mb">
                <div>
                  <img
                    src="https://hmcnetworks.co.kr/img/ic_careers01.c804c23c.png"
                    alt=""
                  />
                </div>
                <div>
                  <h4>소통</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tel_mb">
                <div>
                  <img
                    src="https://hmcnetworks.co.kr/img/ic_careers02.c0ede1d6.png"
                    alt=""
                  />
                </div>
                <div>
                  <h4>도전</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tel_mb">
                <div>
                  <img
                    src="https://hmcnetworks.co.kr/img/ic_careers03.df136173.png"
                    alt=""
                  />
                </div>
                <div>
                  <h4>동반 성장</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tel_mb">
                <div>
                  <img
                    src="https://hmcnetworks.co.kr/img/ic_careers04.e63406e2.png"
                    alt=""
                  />
                </div>
                <div>
                  <h4>긍정적 자신감</h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}

      <div className="tel_second">
        <div>
          <h3>
            평범한 사람들이 모여서
            <br />
            비범한 일을 해낸다.
          </h3>
          <p>
            주식회사 에이치엠씨네트웍스는 전문성, 창의성, 혁신을 추구하여 최고의
            서비스를
            <br /> 제공하기위해 끊임없이 노력하며 투명성, 정의와 배려를 바탕으로
            <br /> 회사를 운영하며 사회에 기여하는 기업으로 되고자 노력합니다.
            <br />
          </p>
        </div>

        {windowWidth < 1023 && (
          <div className="mb">
            <Swiper
              modules={[Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <section>
                  <div></div>
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <section>
                  <div></div>
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <section>
                  <div></div>
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <section>
                  <div></div>
                </section>
              </SwiperSlide>
            </Swiper>
          </div>
        )}
        {windowWidth > 1024 && (
          <div className="pc">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>

      <div className="tel_third">
        <div>
          <h3>채용절차</h3>
        </div>

        <div className="flex_sb">
          <div>
            <div>
              <img
                src="https://hmcnetworks.co.kr/img/ic_recruit01.506edfa3.png"
                alt=""
              />
            </div>

            <h3>서류 전형</h3>
          </div>

          <div>
            <div>
              <img
                src="https://hmcnetworks.co.kr/img/ic_recruit02.887f9b44.png"
                alt=""
              />
            </div>

            <h3>1차 면접(실무)</h3>
          </div>

          <div>
            <div>
              <img
                src="https://hmcnetworks.co.kr/img/ic_recruit03.52928068.png"
                alt=""
              />
            </div>

            <h3>최종결과</h3>
          </div>
        </div>

        <div>
          <button>이메일 접수: hr@hmcnetworks.co.kr</button>
        </div>
      </div>
    </>
  );
};

export default HmcTalent;
