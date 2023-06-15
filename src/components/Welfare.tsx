interface WelfareProps {
  windowWidth: number;
}

const Welfare: React.FC<WelfareProps> = ({ windowWidth }) => {
  return (
    <>
      <div className="com_info">
        <div className="info_txt">
          <h2>복리후생</h2>
          <span></span>
        </div>
      </div>

      {windowWidth < 1023 && (
        <div className="wel_mb">
          <div>
            <div>
              <img
                src="https://hmcnetworks.co.kr/img/img_careers05.187d45a4.png"
                alt=""
              />
            </div>

            <div>
              <h4>음료 및 간식제공</h4>
              <p>
                든든하게 먹어야 일도 잘하죠!
                <br /> HMC는 점심과 저녁, 커피 및 간식을 제공합니다!
                <br /> 마음껏 드세요!
              </p>
            </div>
          </div>

          <div>
            <div>
              <img
                src="https://hmcnetworks.co.kr/img/img_careers06.8e43b50d.png"
                alt=""
              />
            </div>

            <div>
              <h4>무한 도서, 의무 교육 지원</h4>
              <p>
                우리는 구성원들과 함께 성장하고 싶습니다.
                <br /> 구성원들의 능률을 높이기 위해서 투자를 아끼지 않습니다.
                <br /> 지적 성장을 위해 무한 도서 지원, 전문성 스킬 향상을 위한
                <br /> 의무 교육을 지원해 드리고 있습니다.
              </p>
            </div>
          </div>

          <div>
            <div>
              <img
                src="https://hmcnetworks.co.kr/img/img_careers07.ec46ca47.png"
                alt=""
              />
            </div>

            <div>
              <h4>듀얼 모니터, 노트북 제공</h4>
              <p>
                HMC는 업무의 효율성을 위해 노트북과
                <br /> 듀얼 모니터를 지원해드리고 있습니다.
              </p>
            </div>
          </div>
        </div>
      )}
      {windowWidth > 1024 && (
        <div className="wel_pc">
          <div className="flex_sb">
            <div>
              <img
                src="https://hmcnetworks.co.kr/img/img_careers05.187d45a4.png"
                alt=""
              />
            </div>

            <div>
              <h4>음료 및 간식제공</h4>
              <p>
                든든하게 먹어야 일도 잘하죠!
                <br /> HMC는 점심과 저녁, 커피 및 간식을 제공합니다!
                <br /> 마음껏 드세요!
              </p>
            </div>
          </div>

          <div className="flex_sb">
            <div>
              <img
                src="https://hmcnetworks.co.kr/img/img_careers06.8e43b50d.png"
                alt=""
              />
            </div>

            <div>
              <h4>무한 도서, 의무 교육 지원</h4>
              <p>
                우리는 구성원들과 함께 성장하고 싶습니다.
                <br /> 구성원들의 능률을 높이기 위해서 투자를 아끼지 않습니다.
                <br /> 지적 성장을 위해 무한 도서 지원, 전문성 스킬 향상을 위한
                <br /> 의무 교육을 지원해 드리고 있습니다.
              </p>
            </div>
          </div>

          <div className="flex_sb">
            <div>
              <img
                src="https://hmcnetworks.co.kr/img/img_careers07.ec46ca47.png"
                alt=""
              />
            </div>

            <div>
              <h4>듀얼 모니터, 노트북 제공</h4>
              <p>
                HMC는 업무의 효율성을 위해 노트북과
                <br /> 듀얼 모니터를 지원해드리고 있습니다.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="certification">
        <div>
          <h2>인증현황</h2>
        </div>

        {windowWidth > 1024 && (
          <div className="pc">
            <ul>
              <li>
                <div>
                  <h4>
                    기업부설연구소
                    <br />
                    인증
                  </h4>
                </div>

                <div>
                  <p>기술력 향상 기업 인증</p>
                </div>
              </li>
              <li>
                <div>
                  <h4>
                    근로(노동)시간
                    <br />
                    인증 단축 확인
                  </h4>
                </div>

                <div>
                  <p>주 52시간 이하 근무 인증</p>
                </div>
              </li>
              <li>
                <div>
                  <h4>
                    메인비즈
                    <br />
                    인증
                  </h4>
                </div>

                <div>
                  <p>경영혁신 중소기업 인증</p>
                </div>
              </li>
              <li>
                <div>
                  <h4>
                    이노비즈
                    <br />
                    인증
                  </h4>
                </div>

                <div>
                  <p>기술혁신 중소기업 인증</p>
                </div>
              </li>
              <li>
                <div>
                  <h4>
                    미래성과공유기업
                    <br />
                    확인
                  </h4>
                </div>

                <div>
                  <p>
                    성과급 지급, 매년 임금수준 상승,
                    <br /> 스톡옵션의 보장 인증
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>
                    벤처기업
                    <br />
                    인증
                  </h4>
                </div>

                <div>
                  <p>벤처 투자 기업 인증</p>
                </div>
              </li>
            </ul>
          </div>
        )}
        {windowWidth < 1023 && (
          <div className="mb">
            <ul>
              <li>
                <div>
                  <h4>
                    기업부설연구소
                    <br />
                    인증
                  </h4>
                </div>

                <div>
                  <p>기술력 향상 기업 인증</p>
                </div>
              </li>
              <li>
                <div>
                  <h4>
                    근로(노동)시간
                    <br />
                    인증 단축 확인
                  </h4>
                </div>

                <div>
                  <p>주 52시간 이하 근무 인증</p>
                </div>
              </li>
              <li>
                <div>
                  <h4>
                    메인비즈
                    <br />
                    인증
                  </h4>
                </div>

                <div>
                  <p>경영혁신 중소기업 인증</p>
                </div>
              </li>
              <li>
                <div>
                  <h4>
                    이노비즈
                    <br />
                    인증
                  </h4>
                </div>

                <div>
                  <p>기술혁신 중소기업 인증</p>
                </div>
              </li>
              <li>
                <div>
                  <h4>
                    미래성과공유기업
                    <br />
                    확인
                  </h4>
                </div>

                <div>
                  <p>
                    성과급 지급, 매년 임금수준 상승,
                    <br /> 스톡옵션의 보장 인증
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>
                    벤처기업
                    <br />
                    인증
                  </h4>
                </div>

                <div>
                  <p>벤처 투자 기업 인증</p>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Welfare;
