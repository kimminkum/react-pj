import sbt01 from "../image/sbt01.png";
import sbt02 from "../image/sbt02.png";

interface SubsProps {
  windowWidth: number;
}

const Subs: React.FC<SubsProps> = ({ windowWidth }) => {
  return (
    <>
      <div className="bu_info">
        <div className="bu_txt">
          <h2>Subsidiaries</h2>
          <span></span>
          <p>
            케어네이션은 헬스케어 시장 전체를 연결하는 비즈니스 서클을 구축하기
            위해 다양한 관계사들과 파트너십을 형성하여 성장하고 있습니다.
          </p>
        </div>

        {windowWidth < 1050 && (
          <div className="bu_info_img_box_mb">
            <div className="bu_info_img1">
              <img src={sbt01} alt="" />
            </div>
            <div className="bu_info_img2">
              <img src={sbt02} alt="" />
            </div>
          </div>
        )}

        {windowWidth > 1051 && (
          <div className="bu_info_img_box_pc">
            <div className="bu_info_img1">
              <img src={sbt01} alt="" />
            </div>
            <div className="bu_info_img2">
              <img src={sbt02} alt="" />
            </div>
          </div>
        )}
      </div>

      <div className="subsidiaries">
        <div>
          {windowWidth < 1023 && (
            <div className="mb">
              <div>
                <h3>CN Company</h3>

                <p>
                  CN Company는 전국 20여 개 이상의 서비스 센터를 통해 전국
                  단위의 결제/정산 서비스를 제공하는 온·오프라인 결제/정산 전문
                  기업입니다. 전국의 의료기관을 대상으로 PG, VAN, 키오스크 등
                  결제 시스템을 유통/공급합니다. 국내 최고의 결제/정산 시스템의
                  구축을 목표로 성장하고 있습니다.
                </p>
              </div>

              <div></div>
            </div>
          )}
          {windowWidth > 1024 && (
            <div className="pc">
              <div className="flex_sb">
                <h1>CN Company</h1>

                <p>
                  CN Company는 전국 20여 개 이상의 서비스 센터를 통해 전국
                  단위의 결제/정산 서비스를 제공하는 온·오프라인 결제/정산 전문
                  기업입니다. 전국의 의료기관을 대상으로 PG, VAN, 키오스크 등
                  결제 시스템을 유통/공급합니다. 국내 최고의 결제/정산 시스템의
                  구축을 목표로 성장하고 있습니다.
                </p>
              </div>

              <div className="flex_end">
                <div></div>
              </div>
            </div>
          )}
        </div>

        <div>
          {windowWidth < 1023 && (
            <div className="mb">
              <div>
                <h3>어르신세상</h3>

                <p>
                  어르신세상은 2009년 6월 설립한 맞춤형 요양 서비스 제공
                  기관으로, 13년간 방문요양, 방문간호, 주·야간보호 등 다양한
                  장기요양 서비스를 제공해 왔습니다. 장기요양보험공단으로부터
                  ‘최우수 서비스 제공 기관’으로 선정되었으며, 다년간 축적된 장기
                  요양기관 운영 노하우로 수급자에게 최상의 서비스를 제공합니다.
                  장기요양 서비스 제공을 비롯하여 요양보호사 교육원을 통한
                  요양보호사 양성에도 주력하며, 대한민국 요양산업의 새로운
                  패러다임을 창조하고자 노력하고 있습니다.
                </p>
              </div>

              <div></div>
            </div>
          )}
          {windowWidth > 1024 && (
            <div className="pc">
              <div className="flex_sb">
                <h1>어르신세상</h1>

                <p>
                  어르신세상은 2009년 6월 설립한 맞춤형 요양 서비스 제공
                  기관으로, 13년간 방문요양, 방문간호, 주·야간보호 등 다양한
                  장기요양 서비스를 제공해 왔습니다. 장기요양보험공단으로부터
                  ‘최우수 서비스 제공 기관’으로 선정되었으며, 다년간 축적된 장기
                  요양기관 운영 노하우로 수급자에게 최상의 서비스를 제공합니다.
                  장기요양 서비스 제공을 비롯하여 요양보호사 교육원을 통한
                  요양보호사 양성에도 주력하며, 대한민국 요양산업의 새로운
                  패러다임을 창조하고자 노력하고 있습니다.
                </p>
              </div>

              <div className="flex_end">
                <div></div>
              </div>
            </div>
          )}
        </div>

        <div>
          {windowWidth < 1023 && (
            <div className="mb">
              <div>
                <h3>(주) 케어네이션 인슈어런스</h3>

                <p>
                  케어네이션 인슈어런스는 2021년 1월 출범한 케어네이션의 보험
                  판매 및 중개 법인입니다. 삼성화재와 공동 출시한 ‘모바일 전용
                  간병인배상책임보험’을 시작으로 ‘동행서비스 특화 배상책임보험’
                  등 모바일 전용 보험상품 판매에 주력하고 있습니다.
                </p>
              </div>

              <div></div>
            </div>
          )}
          {windowWidth > 1024 && (
            <div className="pc">
              <div className="flex_sb">
                <h1>(주) 케어네이션 인슈어런스</h1>

                <p>
                  케어네이션 인슈어런스는 2021년 1월 출범한 케어네이션의 보험
                  판매 및 중개 법인입니다. 삼성화재와 공동 출시한 ‘모바일 전용
                  간병인배상책임보험’을 시작으로 ‘동행서비스 특화 배상책임보험’
                  등 모바일 전용 보험상품 판매에 주력하고 있습니다.
                </p>
              </div>

              <div className="flex_end">
                <div></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Subs;
