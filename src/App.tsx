import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import styled from "styled-components";
import "./App.css";

import Header from "./routes/Header";
import Main from "./routes/Main";
import Product from "./routes/Product";
import Nav from "./components/Nav";
import RouterPropsTest from "./routes/RouterPropsTest";
import RouterPropsResult from "./routes/RouterPropsResult";

const App: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isNavToggle, setIsNavToggle] = useState(false);

  const handleToggle = () => {
    setIsNavToggle(!isNavToggle);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header
            isNavToggle={isNavToggle}
            onToggle={handleToggle}
            windowWidth={windowWidth}
          />

          <Routes>
            <Route path="/" Component={Main}></Route>
            <Route path="/product/*" Component={Product}></Route>

            <Route path="/routerpropstest" Component={RouterPropsTest}></Route>
            <Route
              path="/routerpropsresult"
              Component={RouterPropsResult}
            ></Route>
          </Routes>

          {isNavToggle && <Nav></Nav>}
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
