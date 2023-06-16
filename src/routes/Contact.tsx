import React, { useState } from "react";
import { Navigation, Scrollbar, A11y, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface ContactProps {
  windowWidth: number;
}

const Contact: React.FC<ContactProps> = ({ windowWidth }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="contact_box">
        <div className="contact_txt">
          <h1>Contact</h1>
        </div>

        <div className="contact_bg"></div>
      </div>

      <div className="com_info">
        <div className="info_txt">
          <h2>상담 신청하기</h2>
          <span></span>
          <p>
            주식회사 에이치엠씨네트웍스의 새로운 소식과 유용한 자료들을 생생하게
            알려드립니다.
          </p>
        </div>
      </div>

      <div className="information">
        <div>
          <h4>개인정보 수집 및 이용안내</h4>
        </div>

        {windowWidth < 1023 && (
          <div className="textarea_mb">
            <p>
              주식회사 에이치엠씨네트웍스는 상담 신청서 제출자에게 아래와 같이
              개인정보를 수집하고 있습니다.
            </p>
            <ol>
              <li>
                수집 개인정보 항목
                <br /> [필수] 이름, 연락처, 이메일 주소 / [선택] 기업명
              </li>
              <li>
                개인정보의 수집 및 이용목적
                <br /> 상담 신청서 제출자의 본인 확인 및 문의 대응
              </li>
              <li>
                개인정보의 이용 기간
                <br /> 상담 신청서에 작성된 개인정보는 상담 신청서 제출자의
                조회를 위하여 수집일로부터 1년간 보관하며, 이후 해당 정보를 지체
                없이 파기합니다.
              </li>
              <li>
                동의 거부권리 및 유의사항 안내
                <br /> 위와 같은 개인정보 수집 동의를 거부할 수 있습니다. 다만
                동의를 거부하는 경우, 상담 신청서를 제출할 수 없습니다.
              </li>
            </ol>
            <p>
              주식회사 에이치엠씨네트웍스는 [제목] , [기업명], [상담 신청
              내용]에 개인정보를 입력하는 행위를 금지하고 있습니다.
              <br /> [제목] , [기업명], [상담 신청 내용]에 개인정보가 포함된
              경우, 해당 문의는 삭제될 수 있습니다.{" "}
            </p>
          </div>
        )}
        {windowWidth > 1024 && (
          <div className="textarea_pc">
            <p>
              주식회사 에이치엠씨네트웍스는 상담 신청서 제출자에게 아래와 같이
              개인정보를 수집하고 있습니다.
            </p>
            <ol>
              <li>
                수집 개인정보 항목
                <br /> [필수] 이름, 연락처, 이메일 주소 / [선택] 기업명
              </li>
              <li>
                개인정보의 수집 및 이용목적
                <br /> 상담 신청서 제출자의 본인 확인 및 문의 대응
              </li>
              <li>
                개인정보의 이용 기간
                <br /> 상담 신청서에 작성된 개인정보는 상담 신청서 제출자의
                조회를 위하여 수집일로부터 1년간 보관하며, 이후 해당 정보를 지체
                없이 파기합니다.
              </li>
              <li>
                동의 거부권리 및 유의사항 안내
                <br /> 위와 같은 개인정보 수집 동의를 거부할 수 있습니다. 다만
                동의를 거부하는 경우, 상담 신청서를 제출할 수 없습니다.
              </li>
            </ol>
            <p>
              주식회사 에이치엠씨네트웍스는 [제목] , [기업명], [상담 신청
              내용]에 개인정보를 입력하는 행위를 금지하고 있습니다.
              <br /> [제목] , [기업명], [상담 신청 내용]에 개인정보가 포함된
              경우, 해당 문의는 삭제될 수 있습니다.{" "}
            </p>
          </div>
        )}
        <div className={`infor_check ${isChecked ? "onAct" : ""}`}>
          <label onClick={handleCheckboxChange} htmlFor="chk1_1">
            개인정보 수집 및 이용에 대해서 동의합니다.
          </label>
        </div>

        {windowWidth < 1023 && (
          <div className="contactForm_mb">
            <ul>
              <li>
                <label htmlFor="txt1_1">
                  이름
                  <span>필수</span>
                </label>
                <input
                  type="text"
                  id="txt1_1"
                  placeholder="이름을 입력해주세요."
                />
              </li>
              <li>
                <label htmlFor="">
                  연락처
                  <span>필수</span>
                </label>
                <input
                  type="text"
                  id="txt2_1"
                  placeholder="연락처를 입력해주세요."
                />
              </li>
              <li>
                <label htmlFor="">
                  이메일 주소
                  <span>필수</span>
                </label>
                <input
                  type="text"
                  id="txt3_1"
                  placeholder="이메일 주소를 입력해주세요."
                />
              </li>
              <li>
                <label htmlFor="">기업명</label>
                <input
                  type="text"
                  id="txt4_1"
                  placeholder="기업명을 입력해주세요."
                />
              </li>
              <li>
                <label htmlFor="">
                  상담 신청 내용
                  <span>필수</span>
                </label>
                <textarea
                  id="txt5_1"
                  placeholder="상담 신청 내용을 입력해주세요."
                ></textarea>
              </li>
            </ul>

            <button type="button" className="contactBtn">
              상담 신청서 제출하기
            </button>
          </div>
        )}
        {windowWidth > 1024 && (
          <div className="contactForm_pc">
            <ul>
              <li>
                <label htmlFor="txt1_1">
                  이름
                  <span>필수</span>
                </label>
                <input
                  type="text"
                  id="txt1_1"
                  placeholder="이름을 입력해주세요."
                />
              </li>
              <li>
                <label htmlFor="">
                  연락처
                  <span>필수</span>
                </label>
                <input
                  type="text"
                  id="txt2_1"
                  placeholder="연락처를 입력해주세요."
                />
              </li>
              <li>
                <label htmlFor="">
                  이메일 주소
                  <span>필수</span>
                </label>
                <input
                  type="text"
                  id="txt3_1"
                  placeholder="이메일 주소를 입력해주세요."
                />
              </li>
              <li>
                <label htmlFor="">기업명</label>
                <input
                  type="text"
                  id="txt4_1"
                  placeholder="기업명을 입력해주세요."
                />
              </li>
              <li>
                <label htmlFor="">
                  상담 신청 내용
                  <span>필수</span>
                </label>
                <textarea
                  id="txt5_1"
                  placeholder="상담 신청 내용을 입력해주세요."
                ></textarea>
              </li>
            </ul>

            <button type="button" className="contactBtn">
              상담 신청서 제출하기
            </button>
          </div>
        )}
      </div>

      <div className="con">
        <div className="con_bg"></div>
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
            {windowWidth < 1023 && (
              <div className="mb">
                <div className="top">
                  <h2>지사별 정보</h2>
                </div>
                <div className="bottom">
                  <div>
                    <h3>HMC F&B</h3>
                    <p>
                      충청남도 천안시 동남구 삼룡1길 50
                      <br /> Tel. 041-551-5060 / Fax. 0303-3139-7410
                    </p>
                  </div>
                  <div>
                    <h3>HMC MEDICAL</h3>
                    <p>
                      경기도 광주시 오포읍 오포로 480
                      <br /> Tel. 02-6925-5009 / Fax. 0303-3139-7410
                    </p>
                  </div>
                  <div>
                    <h3>HMC LAB.</h3>
                    <p>
                      서울시 강남구 테헤란로 8길 37 한동빌딩 3층, 5층 <br />
                      Tel. 1811-5949 / Fax. 070-7966-5949
                      <br /> 홈페이지 www.carenation.kr
                    </p>
                  </div>
                  <div>
                    <h3>HMC PAYMENT</h3>
                    <p>
                      경기도 성남시 수정구 위례광장로 19,
                      <br /> 아이페리온 9층 906호
                      <br /> Tel. 031-423-8891 / Fax. 0303-3447-8891
                    </p>
                  </div>
                  <h3>오프라인 간병</h3>
                  <p>
                    *개인 간병사업부
                    <br /> 서울시 강남구 테헤란로8길 37 한동빌딩 5층 <br /> Tel.
                    02.572.7774 / Fax. 0303.3447.8891
                  </p>
                  <p>
                    *공동 간병사업부
                    <br /> 경기도 광주시 오포읍 오포로 480
                    <br /> Tel. 031.423.8891 / Fax. 0303.3447.8891
                  </p>
                </div>
              </div>
            )}
            {windowWidth > 1024 && (
              <div className="pc flex_sb">
                <div className="left_box">
                  <h1 className="title">지사별 정보</h1>
                </div>
                <div className="right_box">
                  <ul>
                    <li>
                      <h3>HMC F&B</h3>
                      <p>
                        충청남도 천안시 동남구 삼룡1길 50
                        <br /> Tel. 041-551-5060 / Fax. 0303-3139-7410
                      </p>
                    </li>
                    <li>
                      <h3>HMC MEDICAL</h3>
                      <p>
                        경기도 광주시 오포읍 오포로 480
                        <br /> Tel. 02-6925-5009 / Fax. 0303-3139-7410
                      </p>
                    </li>
                    <li>
                      <h3>HMC LAB.</h3>
                      <p>
                        서울시 강남구 테헤란로 8길 37 한동빌딩 3층, 5층 <br />
                        Tel. 1811-5949 / Fax. 070-7966-5949
                        <br /> 홈페이지 www.carenation.kr
                      </p>
                    </li>
                    <li>
                      <h3>HMC PAYMENT</h3>
                      <p>
                        경기도 성남시 수정구 위례광장로 19,
                        <br /> 아이페리온 9층 906호
                        <br /> Tel. 031-423-8891 / Fax. 0303-3447-8891
                      </p>
                    </li>
                  </ul>
                  <div>
                    <h3>오프라인 간병</h3>
                    <p>
                      *개인 간병사업부
                      <br /> 서울시 강남구 테헤란로8길 37 한동빌딩 5층 <br />{" "}
                      Tel. 02.572.7774 / Fax. 0303.3447.8891
                    </p>
                    <p>
                      *공동 간병사업부
                      <br /> 경기도 광주시 오포읍 오포로 480
                      <br /> Tel. 031.423.8891 / Fax. 0303.3447.8891
                    </p>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {windowWidth < 1023 && (
              <div className="mb">
                <div className="top">
                  <h2>자회사 별 정보</h2>
                </div>
                <div className="bottom">
                  <div>
                    <h3>어르신 세상</h3>
                    <p>
                      [본부]
                      <br /> 경기도 안양시 동안구 흥안대로457(평촌동) 4층
                      <br /> Tel. 031-422-1090 / Fax. 070-4369-0276
                    </p>
                    <p>
                      *동안센터 <br /> 경기도 안양시 동안구 홍안대로457(평촌동)
                      2층
                      <br /> Tel. 031-426-1090 / Fax. 031-426-1096
                    </p>
                    <p>
                      *만안센터 <br /> 경기도 안양시 만안구 안양로216 공평빌딩
                      4층, 7층
                      <br /> Tel. 031-464-0220 / Fax. 031-464-0221
                    </p>
                    <p>
                      *의왕센터
                      <br /> 경기도 의왕시 안양판교로215(청계동)
                      <br /> 골드프라자 3층
                      <br /> Tel. 031-422-2022 / Fax. 031-422-2023
                    </p>
                    <p>
                      *요양보호사교육원 <br /> 경기도 동안구 관악대로476(관앙동)
                      3층
                      <br /> Tel. 031-422-4111 / Fax. 031-422-1096
                    </p>
                  </div>
                  <div>
                    <h3>씨엔컴퍼니</h3>
                    <p>
                      경기도 광명시 새빛공원로 67, 자이타워 A동 2409호
                      <br /> Tel. 1661-9110 / E. office@cncompany.co.kr
                    </p>
                  </div>
                  <div>
                    <h3>케어네이션 인슈어런스</h3>
                    <p>
                      서울시 강남구 역삼로 128, 3층 (역삼동, 양원빌딩별관)
                      <br /> Tel. 070-4681-0443
                    </p>
                  </div>
                  <div>
                    <h3>그로우플러스</h3>
                    <p>
                      서울시 마포구 동교로 193 7층 <br /> Tel. 010-7194-4222
                    </p>
                  </div>
                </div>
              </div>
            )}
            {windowWidth > 1024 && (
              <div className="pc flex_sb">
                <div className="left_box">
                  <h1 className="title">자회사 별 정보</h1>
                </div>
                <div className="right_box2 flex_sb">
                  <div>
                    <h3>어르신 세상</h3>
                    <p>
                      [본부]
                      <br /> 경기도 안양시 동안구 흥안대로457(평촌동) 4층
                      <br /> Tel. 031-422-1090 / Fax. 070-4369-0276
                    </p>
                    <p>
                      *동안센터 <br /> 경기도 안양시 동안구 홍안대로457(평촌동)
                      2층
                      <br /> Tel. 031-426-1090 / Fax. 031-426-1096
                    </p>
                    <p>
                      *만안센터 <br /> 경기도 안양시 만안구 안양로216 공평빌딩
                      4층, 7층
                      <br /> Tel. 031-464-0220 / Fax. 031-464-0221
                    </p>
                    <p>
                      *의왕센터
                      <br /> 경기도 의왕시 안양판교로215(청계동)
                      <br /> 골드프라자 3층
                      <br /> Tel. 031-422-2022 / Fax. 031-422-2023
                    </p>
                    <p>
                      *요양보호사교육원 <br /> 경기도 동안구 관악대로476(관앙동)
                      3층
                      <br /> Tel. 031-422-4111 / Fax. 031-422-1096
                    </p>
                  </div>
                  <div>
                    <div>
                      <h3>씨엔컴퍼니</h3>
                      <p>
                        경기도 광명시 새빛공원로 67, 자이타워 A동 2409호
                        <br /> Tel. 1661-9110 / E. office@cncompany.co.kr
                      </p>
                    </div>
                    <div>
                      <h3>케어네이션 인슈어런스</h3>
                      <p>
                        서울시 강남구 역삼로 128, 3층 (역삼동, 양원빌딩별관)
                        <br /> Tel. 070-4681-0443
                      </p>
                    </div>
                    <div>
                      <h3>그로우플러스</h3>
                      <p>
                        서울시 마포구 동교로 193 7층 <br /> Tel. 010-7194-4222
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <div className="box">
            {windowWidth > 1201 && (
              <div className="custom-navigation">
                <div className="custom-prev"></div>
                <div className="custom-next"></div>
              </div>
            )}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Contact;
