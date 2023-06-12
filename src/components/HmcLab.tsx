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
  const bullet = [
    "간병 서비스",
    "동행 서비스",
    "가사돌봄 서비스",
    "비대면 결제",
    "방문요양 서비스",
    "비대면 진료",
    "의료용품 스토어",
    "병원·약국 찾기",
    "복약 관리",
    "요양원 찾기",
    "상조·장례"
  ];

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
        <div></div>

        {windowWidth > 1051 && (
          <div className="pc">
            <a href="#">
              <div className="bg"></div>
              <div className="txt">
                <h4>진료부터 간병, 요양까지 </h4>
                <h2>
                  모든 헬스케어를
                  <br />
                  연결하다
                </h2>
                <p>
                  No.1 헬스케어 플랫폼 케어네이션2.0으로
                  <br /> 우리 가족 건강 관리, 지금 시작하세요!
                </p>

                <div>Google Play</div>

                <small className="gray">
                  2023년 04월 03일 기준 Google Play Store 간병앱 부문 다운로드
                  1위
                </small>
              </div>
            </a>

            <a href="#">
              <div className="bg"></div>
              <div className="txt">
                <h4></h4>
                <h2>
                  내가 직접찾는
                  <br />
                  간병 일자리!
                </h2>
                <p>
                  원하는 날짜/지역/병원을 직접 선택!
                  <br /> 앱 다운로드 후 내 도움이 필요한 환자를 케어해주세요!
                </p>

                <div>Google Play</div>
              </div>
            </a>
          </div>
        )}

        {windowWidth < 1050 && (
          <div className="mb">
            <a href="#">
              <div className="bg"></div>
              <div className="txt">
                <h4>진료부터 간병, 요양까지 </h4>
                <h2>
                  모든 헬스케어를
                  <br />
                  연결하다
                </h2>
                <p>
                  No.1 헬스케어 플랫폼 케어네이션2.0으로
                  <br /> 우리 가족 건강 관리, 지금 시작하세요!
                </p>

                <div>Google Play</div>

                <small className="gray">
                  2023년 04월 03일 기준 Google Play Store 간병앱 부문 다운로드
                  1위
                </small>
              </div>
            </a>

            <a href="#">
              <div className="bg"></div>
              <div className="txt">
                <h4></h4>
                <h2>
                  내가 직접찾는
                  <br />
                  간병 일자리!
                </h2>
                <p>
                  원하는 날짜/지역/병원을 직접 선택!
                  <br /> 앱 다운로드 후 내 도움이 필요한 환자를 케어해주세요!
                </p>

                <div>Google Play</div>
              </div>
            </a>
          </div>
        )}
      </div>

      <div className="lab_center flex_center">
        <h1>
          케어네이션은 라이프 사이클에 맞는
          <br /> 모든 헬스케어 서비스를 상황별로 제공합니다.
        </h1>
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
                <div>
                  <h2>간병 서비스</h2>
                  <p>
                    간병인 프로필/후기/간병비 확인 후,
                    <br />
                    카드로 간편 결제하세요
                  </p>
                </div>

                <div></div>
              </div>
            )}
            {windowWidth > 1051 && (
              <div className="pc flex_center">
                <div>
                  <h1>간병 서비스</h1>
                  <h4>
                    간병인 프로필/후기/간병비 확인 후,
                    <br />
                    카드로 간편 결제하세요
                  </h4>

                  <p>
                    대한민국 1등 간병인 찾기
                    <br />
                    오늘도 더 좋은 간병 문화를 만들어갑니다
                  </p>
                </div>

                <div>
                  <div></div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {windowWidth < 1050 && (
              <div className="mb">
                <div>
                  <h2>동행 서비스</h2>
                  <p>
                    집부터 병원까지,
                    <br />
                    든든한 동행인을 찾아보세요
                  </p>
                </div>

                <div></div>
              </div>
            )}
            {windowWidth > 1051 && (
              <div className="pc flex_center">
                <div>
                  <h1>동행 서비스</h1>
                  <h4>
                    집부터 병원까지,
                    <br />
                    든든한 동행인을 찾아보세요
                  </h4>

                  <p>
                    대한민국 1등 간병인 찾기
                    <br />
                    오늘도 더 좋은 간병 문화를 만들어갑니다
                  </p>
                </div>

                <div>
                  <div></div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {windowWidth < 1050 && (
              <div className="mb">
                <div>
                  <h2>가사돌봄 서비스</h2>
                  <p>
                    가사부터 돌봄까지, <br /> 필요한 만큼 편리하게 이용해 보세요
                  </p>
                </div>

                <div></div>
              </div>
            )}
            {windowWidth > 1051 && (
              <div className="pc flex_center">
                <div>
                  <h1>가사돌봄 서비스</h1>
                  <h4>
                    가사부터 돌봄까지, <br /> 필요한 만큼 편리하게 이용해 보세요
                  </h4>

                  <p>
                    대한민국 1등 간병인 찾기
                    <br />
                    오늘도 더 좋은 간병 문화를 만들어갑니다
                  </p>
                </div>

                <div>
                  <div></div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {windowWidth < 1050 && (
              <div className="mb">
                <div>
                  <h2>간병비·병원비 비대면 결제</h2>
                  <p>
                    병원에 갈 필요 없이 간병비 따로 병원비 따로!
                    <br />
                    이제 앱으로 편하게 결제하세요
                  </p>
                </div>

                <div></div>
              </div>
            )}
            {windowWidth > 1051 && (
              <div className="pc flex_center">
                <div>
                  <h1>간병비·병원비 비대면 결제</h1>
                  <h4>
                    병원에 갈 필요 없이 간병비 따로 병원비 따로!
                    <br />
                    이제 앱으로 편하게 결제하세요
                  </h4>

                  <p>
                    대한민국 1등 간병인 찾기
                    <br />
                    오늘도 더 좋은 간병 문화를 만들어갑니다
                  </p>
                </div>

                <div>
                  <div></div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {windowWidth < 1050 && (
              <div className="mb">
                <div>
                  <h2>방문요양 서비스</h2>
                  <p>
                    방뭔요양, 주야간보호, 방문간호, 방문목욕,
                    <br />
                    단기보호, 복지용구 시설들을 편하게 찾아보세요
                  </p>
                </div>

                <div></div>
              </div>
            )}
            {windowWidth > 1051 && (
              <div className="pc flex_center">
                <div>
                  <h1>방문요양 서비스</h1>
                  <h4>
                    방뭔요양, 주야간보호, 방문간호, 방문목욕,
                    <br />
                    단기보호, 복지용구 시설들을 편하게 찾아보세요
                  </h4>

                  <p>
                    대한민국 1등 간병인 찾기
                    <br />
                    오늘도 더 좋은 간병 문화를 만들어갑니다
                  </p>
                </div>

                <div>
                  <div></div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {windowWidth < 1050 && (
              <div className="mb">
                <div>
                  <h2>비대면 진료</h2>
                  <p>
                    진료신청부터 예약까지
                    <br />
                    편하게 신청하세요
                  </p>
                </div>

                <div></div>
              </div>
            )}
            {windowWidth > 1051 && (
              <div className="pc flex_center">
                <div>
                  <h1>비대면 진료</h1>
                  <h4>
                    진료신청부터 예약까지
                    <br />
                    편하게 신청하세요
                  </h4>

                  <p>
                    대한민국 1등 간병인 찾기
                    <br />
                    오늘도 더 좋은 간병 문화를 만들어갑니다
                  </p>
                </div>

                <div>
                  <div></div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {windowWidth < 1050 && (
              <div className="mb">
                <div>
                  <h2>의료용품 스토어</h2>
                  <p>
                    매번 구매해야 하는 의료용품,
                    <br />
                    합리적인 가격에 간편하게 구매하세요
                  </p>
                </div>

                <div></div>
              </div>
            )}
            {windowWidth > 1051 && (
              <div className="pc flex_center">
                <div>
                  <h1>의료용품 스토어</h1>
                  <h4>
                    매번 구매해야 하는 의료용품,
                    <br />
                    합리적인 가격에 간편하게 구매하세요
                  </h4>

                  <p>
                    대한민국 1등 간병인 찾기
                    <br />
                    오늘도 더 좋은 간병 문화를 만들어갑니다
                  </p>
                </div>

                <div>
                  <div></div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {windowWidth < 1050 && (
              <div className="mb">
                <div>
                  <h2>병원·약국 찾기</h2>
                  <p>
                    근처 병원·약국의
                    <br />
                    영업시간, 진료과목을 확인하세요
                  </p>
                </div>

                <div></div>
              </div>
            )}
            {windowWidth > 1051 && (
              <div className="pc flex_center">
                <div>
                  <h1>병원·약국 찾기</h1>
                  <h4>
                    근처 병원·약국의
                    <br />
                    영업시간, 진료과목을 확인하세요
                  </h4>

                  <p>
                    대한민국 1등 간병인 찾기
                    <br />
                    오늘도 더 좋은 간병 문화를 만들어갑니다
                  </p>
                </div>

                <div>
                  <div></div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {windowWidth < 1050 && (
              <div className="mb">
                <div>
                  <h2>복약 정보 검색·알림 관리</h2>
                  <p>
                    잊기 쉬운 약 복용 방법
                    <br />
                    대신 챙겨드릴게요
                  </p>
                </div>

                <div></div>
              </div>
            )}
            {windowWidth > 1051 && (
              <div className="pc flex_center">
                <div>
                  <h1>복약 정보 검색·알림 관리</h1>
                  <h4>
                    잊기 쉬운 약 복용 방법
                    <br />
                    대신 챙겨드릴게요
                  </h4>

                  <p>
                    대한민국 1등 간병인 찾기
                    <br />
                    오늘도 더 좋은 간병 문화를 만들어갑니다
                  </p>
                </div>

                <div>
                  <div></div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {windowWidth < 1050 && (
              <div className="mb">
                <div>
                  <h2>요양원 찾기</h2>
                  <p>
                    우리 부모님 더욱 편안하게 모실 수 있도록
                    <br />
                    원하는 등급의 시설을 찾아보세요
                  </p>
                </div>

                <div></div>
              </div>
            )}
            {windowWidth > 1051 && (
              <div className="pc flex_center">
                <div>
                  <h1>요양원 찾기</h1>
                  <h4>
                    우리 부모님 더욱 편안하게 모실 수 있도록
                    <br />
                    원하는 등급의 시설을 찾아보세요
                  </h4>

                  <p>
                    대한민국 1등 간병인 찾기
                    <br />
                    오늘도 더 좋은 간병 문화를 만들어갑니다
                  </p>
                </div>

                <div>
                  <div></div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {windowWidth < 1050 && (
              <div className="mb">
                <div>
                  <h2>부고장 관리·상조·장례</h2>
                  <p>
                    장례 시설 찾기, 부고장 작성 및 관리,
                    <br />
                    상조가입 등이 가능해요
                  </p>
                </div>

                <div></div>
              </div>
            )}
            {windowWidth > 1051 && (
              <div className="pc flex_center">
                <div>
                  <h1>부고장 관리·상조·장례</h1>
                  <h4>
                    장례 시설 찾기, 부고장 작성 및 관리,
                    <br />
                    상조가입 등이 가능해요
                  </h4>

                  <p>
                    대한민국 1등 간병인 찾기
                    <br />
                    오늘도 더 좋은 간병 문화를 만들어갑니다
                  </p>
                </div>

                <div>
                  <div></div>
                </div>
              </div>
            )}
          </SwiperSlide>
        </Swiper>

        <div className="custom-navigation">
          <div className="custom-prev"></div>
          <div className="custom-next"></div>
        </div>
      </div>

      <div className="blue_btn">
        <a href="#">간병인 문의하러 가기</a>
      </div>
    </>
  );
};

export default HmcLab;
