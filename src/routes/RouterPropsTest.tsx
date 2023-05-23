import { Link } from "react-router-dom";

export default function RouterPropsTest() {
  const menu = {
    name: "간짜장",
    price: 5000
  };

  return (
    <>
      <h1>Router Prop Test</h1>
      <Link to="/routerpropsresult" state={menu}>
        RouterPropsResult
      </Link>
    </>
  );
}
