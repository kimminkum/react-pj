import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const MainSectionPc: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="second_article flex_center">
      <div className="flex_box">
        <div className="second_title">
          <h1>Our Service</h1>
          <p>
            주식회사 에이치엠네트웍스는 전문성, 창의성, 혁신을 추구하여 최고의
            서비스를 제공하기 위해 끊임없이 노력합니다.
          </p>
        </div>

        <div
          className="second_section odd"
          data-aos="fade-up"
          data-aos-once="false"
        >
          <div className="second_img_box">
            <img
              src="https://hmcnetworks.co.kr/img/img_mainser_02.403ea325.jpg"
              alt="의약품 사진"
            />
          </div>

          <div className="second_txt_box">
            <h3>HMC MEDICAL</h3>
            <p>
              의료기기 및 의료, 임상, 복지 용품 등 약 3,000 여 가지의 의료소모품
              유통 및 온-오프라인 판매를 진행합니다.
            </p>
            <button className="second_button">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        <div
          className="second_section even"
          data-aos="fade-up"
          data-aos-once="false"
        >
          <div className="second_img_box">
            <img
              src="https://hmcnetworks.co.kr/img/img_mainser_04.76e33c3d.jpg"
              alt="핸드폰 앱 사진"
            />
          </div>

          <div className="second_txt_box">
            <h3>HMC LAB.</h3>
            <p>
              환자의 의료 정보 및 이동을 기반으로 한 개인 맞춤형 연결 플랫폼으로
              환자와 간병인, 의료기관을 연결하는 앱 서비스, 케어네이션을
              개발합니다.
            </p>
            <button className="second_button">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        <div
          className="second_section odd"
          data-aos="fade-up"
          data-aos-once="false"
        >
          <div className="second_img_box">
            <img
              src="https://hmcnetworks.co.kr/img/img_mainser_06.ce4f8fa3.jpg"
              alt="손 모으는 사진"
            />
          </div>

          <div className="second_txt_box">
            <h3>Subsidiaries</h3>
            <p>
              헬스케어 시장 전체를 연결하는 비즈니스 서클을 구축하기 위해 다양한
              파트너십을 형성하며 성장하고 있습니다.
            </p>
            <button className="second_button">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex_box">
        <div
          className="second_section even"
          data-aos="fade-up"
          data-aos-once="false"
        >
          <div className="second_img_box">
            <img
              src="https://hmcnetworks.co.kr/img/img_mainser_01.c19a47a4.png"
              alt="건강한 식품 사진"
            />
          </div>

          <div className="second_txt_box">
            <h3>HMC F&B</h3>
            <p>
              친환경 물류 인프라를 기반으로 3만 여종의 건강한 식자재를 병원 및
              다수의 기관에 신선하게 공급합니다.
            </p>
            <button className="second_button">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        <div
          className="second_section odd"
          data-aos="fade-up"
          data-aos-once="false"
        >
          <div className="second_img_box">
            <img
              src="https://hmcnetworks.co.kr/img/img_mainser_03.c73f8c7c.jpg"
              alt="사진"
            />
          </div>

          <div className="second_txt_box">
            <h3>오프라인 간병</h3>
            <p>
              국내 최대 규모의 간병인협회로써 다년간의 업계 경력 노하우로 60여
              곳의 1,2,3차 의료기관에 간병 서비스를 안정적으로 연결하고
              있습니다.
            </p>
            <button className="second_button">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        <div
          className="second_section even"
          data-aos="fade-up"
          data-aos-once="false"
        >
          <div className="second_img_box">
            <img
              src="https://hmcnetworks.co.kr/img/img_mainser_05.0cc6b059.jpg"
              alt="손쉬운 결제 사진"
            />
          </div>

          <div className="second_txt_box">
            <h3>HMC PAYMENT</h3>
            <p>
              간병비와 병원비 결제를 한 번에 할 수 있도록 온/오프라인 통합 결제
              시스템 및 종합 정보 보호 솔루션 페이먼트를 구축합니다.
            </p>
            <button className="second_button">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSectionPc;
