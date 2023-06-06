import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

interface HistoryProps {
  windowWidth: number;
}

const History: React.FC<HistoryProps> = ({ windowWidth }) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div className="com_info">
        <div className="info_txt">
          <h2>연혁</h2>
          <span></span>
          <p>
            주식회사 에이치엠씨네트웍스는 의료업계 전반에서 탄탄한 기업으로
            성장했습니다. 간병 시장의 선두주자로 자리잡고자 노력하는 주식회사
            에이치엠씨네트웍스를 만나보세요.
          </p>
        </div>
      </div>

      <div className="his_social">
        <div className="bg"></div>
        <div className="txt_box">
          {windowWidth < 768 && (
            <h1 className="mb">Social Care Data Concierge</h1>
          )}
          {windowWidth > 769 && (
            <h1 className="pc">Social Care Data Concierge</h1>
          )}
        </div>
      </div>

      <div className="history">
        <div>
          <div className="year" data-aos="fade-up" data-aos-once="false">
            <h1>2013</h1>
          </div>

          <div
            data-aos="fade-up"
            data-aos-once="false"
            className="circle"
          ></div>

          {windowWidth < 768 && (
            <div className="mb" data-aos="fade-up" data-aos-once="false">
              <div className="img_boxs">
                <img
                  src="https://hmcnetworks.co.kr/img/img_history01.27a0846d.jpg"
                  alt=""
                />
              </div>

              <div className="txt_boxs">
                <strong>주식회사 에이치엠씨네트웍스 설립</strong>
                <p>법인 설립</p>
                <p>HMC 메디몰 오픈</p>
                <p>HMC 메디컬 오픈</p>
                <p>요양포털닷컴 오픈</p>
              </div>
            </div>
          )}
          {windowWidth > 769 && (
            <div className="pc" data-aos="fade-up" data-aos-once="false">
              <div className="img_boxs">
                <img
                  src="https://hmcnetworks.co.kr/img/img_history01.27a0846d.jpg"
                  alt=""
                />
              </div>

              <div className="txt_boxs">
                <strong>주식회사 에이치엠씨네트웍스 설립</strong>
                <p>법인 설립</p>
                <p>HMC 메디몰 오픈</p>
                <p>HMC 메디컬 오픈</p>
                <p>요양포털닷컴 오픈</p>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="year" data-aos="fade-up" data-aos-once="false">
            <h1>2014</h1>
          </div>

          <div
            data-aos="fade-up"
            data-aos-once="false"
            className="circle"
          ></div>

          {windowWidth < 768 && (
            <div className="mb" data-aos="fade-up" data-aos-once="false">
              <div className="img_boxs">
                <img
                  src="https://hmcnetworks.co.kr/img/img_history01.27a0846d.jpg"
                  alt=""
                />
              </div>

              <div className="txt_boxs">
                <strong>간병 서비스의 가능성</strong>
                <p>현대그린푸드 식자재 납품 계약</p>
                <p>병원천사 MOU 체결</p>
              </div>
            </div>
          )}
          {windowWidth > 769 && (
            <div className="pc even" data-aos="fade-up" data-aos-once="false">
              <div className="img_boxs">
                <img
                  src="https://hmcnetworks.co.kr/img/img_history01.27a0846d.jpg"
                  alt=""
                />
              </div>

              <div className="txt_boxs">
                <strong>간병 서비스의 가능성</strong>
                <p>현대그린푸드 식자재 납품 계약</p>
                <p>병원천사 MOU 체결</p>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="year" data-aos="fade-up" data-aos-once="false">
            <h1>2016</h1>
          </div>

          <div
            data-aos="fade-up"
            data-aos-once="false"
            className="circle"
          ></div>

          {windowWidth < 768 && (
            <div className="mb" data-aos="fade-up" data-aos-once="false">
              <div className="img_boxs">
                <img
                  src="https://hmcnetworks.co.kr/img/img_history01.27a0846d.jpg"
                  alt=""
                />
              </div>

              <div className="txt_boxs">
                <strong>오프라인 간병 간병인 협회 인수</strong>
                <p>간병인 협회 인수</p>
                <p>식자재 업체 인수</p>
                <p>한화푸디스트 식자재 납품 계약</p>
                <p>벤처기업 인증</p>
              </div>
            </div>
          )}
          {windowWidth > 769 && (
            <div className="pc" data-aos="fade-up" data-aos-once="false">
              <div className="img_boxs">
                <img
                  src="https://hmcnetworks.co.kr/img/img_history01.27a0846d.jpg"
                  alt=""
                />
              </div>

              <div className="txt_boxs">
                <strong>오프라인 간병 간병인 협회 인수</strong>
                <p>간병인 협회 인수</p>
                <p>식자재 업체 인수</p>
                <p>한화푸디스트 식자재 납품 계약</p>
                <p>벤처기업 인증</p>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="year" data-aos="fade-up" data-aos-once="false">
            <h1>2019</h1>
          </div>

          <div
            data-aos="fade-up"
            data-aos-once="false"
            className="circle"
          ></div>

          {windowWidth < 768 && (
            <div className="mb" data-aos="fade-up" data-aos-once="false">
              <div className="img_boxs">
                <img
                  src="https://hmcnetworks.co.kr/img/img_history01.27a0846d.jpg"
                  alt=""
                />
              </div>

              <div className="txt_boxs">
                <strong>HMC F&B, MEDICAL 사업부 확장</strong>
                <p>법인 설립</p>
                <p>HMC 메디몰 오픈</p>
                <p>HMC 메디컬 오픈</p>
                <p>요양포털닷컴 오픈</p>
              </div>
            </div>
          )}
          {windowWidth > 769 && (
            <div className="pc" data-aos="fade-up" data-aos-once="false">
              <div className="img_boxs">
                <img
                  src="https://hmcnetworks.co.kr/img/img_history01.27a0846d.jpg"
                  alt=""
                />
              </div>

              <div className="txt_boxs">
                <strong>HMC F&B, MEDICAL 사업부 확장</strong>
                <span>SEED</span>
                <p>로우파트너스 투자 유치</p>
                <span>Pre-A</span>
                <p>㈜HB인베스트먼트 투자 유치</p>
                <p>신용보증기금 투자 유치</p>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="year" data-aos="fade-up" data-aos-once="false">
            <h1>2013</h1>
          </div>

          <div
            data-aos="fade-up"
            data-aos-once="false"
            className="circle"
          ></div>

          {windowWidth < 768 && (
            <div className="mb" data-aos="fade-up" data-aos-once="false">
              <div className="img_boxs">
                <img
                  src="https://hmcnetworks.co.kr/img/img_history01.27a0846d.jpg"
                  alt=""
                />
              </div>

              <div className="txt_boxs">
                <strong>주식회사 에이치엠씨네트웍스 설립</strong>
                <p>법인 설립</p>
                <p>HMC 메디몰 오픈</p>
                <p>HMC 메디컬 오픈</p>
                <p>요양포털닷컴 오픈</p>
              </div>
            </div>
          )}
          {windowWidth > 769 && (
            <div className="pc" data-aos="fade-up" data-aos-once="false">
              <div className="img_boxs">
                <img
                  src="https://hmcnetworks.co.kr/img/img_history01.27a0846d.jpg"
                  alt=""
                />
              </div>

              <div className="txt_boxs">
                <strong>주식회사 에이치엠씨네트웍스 설립</strong>
                <p>법인 설립</p>
                <p>HMC 메디몰 오픈</p>
                <p>HMC 메디컬 오픈</p>
                <p>요양포털닷컴 오픈</p>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="year" data-aos="fade-up" data-aos-once="false">
            <h1>2013</h1>
          </div>

          <div
            data-aos="fade-up"
            data-aos-once="false"
            className="circle"
          ></div>

          {windowWidth < 768 && (
            <div className="mb" data-aos="fade-up" data-aos-once="false">
              <div className="img_boxs">
                <img
                  src="https://hmcnetworks.co.kr/img/img_history01.27a0846d.jpg"
                  alt=""
                />
              </div>

              <div className="txt_boxs">
                <strong>주식회사 에이치엠씨네트웍스 설립</strong>
                <p>법인 설립</p>
                <p>HMC 메디몰 오픈</p>
                <p>HMC 메디컬 오픈</p>
                <p>요양포털닷컴 오픈</p>
              </div>
            </div>
          )}
          {windowWidth > 769 && (
            <div className="pc" data-aos="fade-up" data-aos-once="false">
              <div className="img_boxs">
                <img
                  src="https://hmcnetworks.co.kr/img/img_history01.27a0846d.jpg"
                  alt=""
                />
              </div>

              <div className="txt_boxs">
                <strong>주식회사 에이치엠씨네트웍스 설립</strong>
                <p>법인 설립</p>
                <p>HMC 메디몰 오픈</p>
                <p>HMC 메디컬 오픈</p>
                <p>요양포털닷컴 오픈</p>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="year" data-aos="fade-up" data-aos-once="false">
            <h1>2013</h1>
          </div>

          <div
            data-aos="fade-up"
            data-aos-once="false"
            className="circle"
          ></div>

          {windowWidth < 768 && (
            <div className="mb" data-aos="fade-up" data-aos-once="false">
              <div className="img_boxs">
                <img
                  src="https://hmcnetworks.co.kr/img/img_history01.27a0846d.jpg"
                  alt=""
                />
              </div>

              <div className="txt_boxs">
                <strong>주식회사 에이치엠씨네트웍스 설립</strong>
                <p>법인 설립</p>
                <p>HMC 메디몰 오픈</p>
                <p>HMC 메디컬 오픈</p>
                <p>요양포털닷컴 오픈</p>
              </div>
            </div>
          )}
          {windowWidth > 769 && (
            <div className="pc" data-aos="fade-up" data-aos-once="false">
              <div className="img_boxs">
                <img
                  src="https://hmcnetworks.co.kr/img/img_history01.27a0846d.jpg"
                  alt=""
                />
              </div>

              <div className="txt_boxs">
                <strong>주식회사 에이치엠씨네트웍스 설립</strong>
                <p>법인 설립</p>
                <p>HMC 메디몰 오픈</p>
                <p>HMC 메디컬 오픈</p>
                <p>요양포털닷컴 오픈</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default History;
