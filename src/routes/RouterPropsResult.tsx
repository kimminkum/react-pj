import { useLocation } from "react-router-dom";

export default function RouterPropsResult() {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  return (
    <>
      <h1>Router Prop Result</h1>
    </>
  );
}
