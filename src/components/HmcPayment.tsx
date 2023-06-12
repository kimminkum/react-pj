import Customers from "../components/Customers";

interface HmcPaymentProps {
  windowWidth: number;
}

const HmcPayment: React.FC<HmcPaymentProps> = ({ windowWidth }) => {
  return (
    <>
      <div className="bu_info">
        <div className="bu_txt">
          <h2>HMC PAYMENT</h2>
          <span></span>
          <p>
            간병비와 병원비 결제를 한 번에 할 수 있도록 온/오프라인 통합 결제
            시스템 및 종합 정보 보호 솔루션 페이먼트를 구축합니다.
          </p>
        </div>

        {windowWidth < 1050 && (
          <div className="bu_info_img_box_mb">
            <div className="bu_info_img1">
              <img
                src="https://hmcnetworks.co.kr/img/img_sub08.29750bd0.png"
                alt=""
              />
            </div>
            <div className="bu_info_img2">
              <img
                src="https://hmcnetworks.co.kr/img/img_sub09.3b7da522.png"
                alt=""
              />
            </div>
          </div>
        )}

        {windowWidth > 1051 && (
          <div className="bu_info_img_box_pc">
            <div className="bu_info_img1">
              <img
                src="https://hmcnetworks.co.kr/img/img_sub08.29750bd0.png"
                alt=""
              />
            </div>
            <div className="bu_info_img2">
              <img
                src="https://hmcnetworks.co.kr/img/img_sub09.3b7da522.png"
                alt=""
              />
            </div>
          </div>
        )}
      </div>

      <div className="pay">
        <div className="fb_bg"></div>
        {windowWidth < 1050 && (
          <div className="mb">
            <div className="top">
              <h2>
                HMC PAYMENT
                <br />
                통합 결제 시스템
              </h2>
            </div>
            <div className="bottom">
              <div>
                <h4>간편하게 한 번에 결제하자!</h4>
                <h5>
                  간병비와 병원비는 한 번에 결제가 불가능했습니다. 통합되지 않은
                  <br />
                  결제 시스템에서 오는 복잡함과 불편함. 이제 HMC PAYMENT 통합
                  <br />
                  결제 시스템을 만나보세요.
                </h5>
              </div>
            </div>
          </div>
        )}
        {windowWidth > 1051 && (
          <div className="pc flex_sb">
            <div className="left_box">
              <h1 className="title">
                HMC PAYMENT
                <br />
                통합 결제 시스템
              </h1>
            </div>
            <div className="right_box flex_start">
              <div className="fb_txt">
                <h3>간편하게 한 번에 결제하자!</h3>
                <h5>
                  간병비와 병원비는 한 번에 결제가 불가능했습니다. 통합되지 않은
                  결제 시스템에서 오는 복잡함과 불편함. 이제 HMC PAYMENT 통합
                  결제 시스템을 만나보세요.
                </h5>
              </div>
            </div>
          </div>
        )}
      </div>

      <Customers windowWidth={windowWidth} />
    </>
  );
};

export default HmcPayment;
