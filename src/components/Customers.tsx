import data from "../data/banner";

import "../css/Business.css";

interface CustomersProps {
  windowWidth: number;
}

const Customers: React.FC<CustomersProps> = ({ windowWidth }) => {
  return (
    <>
      {windowWidth < 1023 && (
        <div className="custom">
          <div>
            <h3>주요 고객사</h3>
          </div>

          <div className="grid3">
            {data.map((item: any) => (
              <div key={item.id}>
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      )}
      {windowWidth > 1024 && (
        <div className="custom_pc">
          <div>
            <h1>주요 고객사</h1>
          </div>

          <div className="grid6">
            {data.map((item: any) => (
              <div key={item.id}>
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Customers;
