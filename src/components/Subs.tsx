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
              <img
                src="https://hmcnetworks.co.kr/img/img_sub10.fb7f6c6e.png"
                alt=""
              />
            </div>
            <div className="bu_info_img2">
              <img
                src="https://hmcnetworks.co.kr/img/img_sub11.cbc57988.png"
                alt=""
              />
            </div>
          </div>
        )}

        {windowWidth > 1051 && (
          <div className="bu_info_img_box_pc">
            <div className="bu_info_img1">
              <img
                src="https://hmcnetworks.co.kr/img/img_sub10.fb7f6c6e.png"
                alt=""
              />
            </div>
            <div className="bu_info_img2">
              <img
                src="https://hmcnetworks.co.kr/img/img_sub11.cbc57988.png"
                alt=""
              />
            </div>
          </div>
        )}
      </div>

      <div>
        <div>
          {windowWidth < 1023 && (
            <div>
              <div></div>

              <div></div>
            </div>
          )}
          {windowWidth > 1024 && (
            <div>
              <div></div>

              <div></div>
            </div>
          )}
        </div>

        <div>
          {windowWidth < 1023 && (
            <div>
              <div></div>

              <div></div>
            </div>
          )}
          {windowWidth > 1024 && (
            <div>
              <div></div>

              <div></div>
            </div>
          )}
        </div>

        <div>
          {windowWidth < 1023 && (
            <div>
              <div></div>

              <div></div>
            </div>
          )}
          {windowWidth > 1024 && (
            <div>
              <div></div>

              <div></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Subs;
