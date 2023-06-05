import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import styled from "styled-components";
import "./App.css";

import Header from "./routes/Header";
import Main from "./routes/Main";
import Product from "./routes/Product";
import About from "./routes/About";
import Nav from "./components/Nav";
import Footer from "./routes/Footer";

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

          {!isNavToggle && (
            <Routes>
              <Route
                path="/"
                element={<Main windowWidth={windowWidth} />}
              ></Route>
              <Route
                path="/about/*"
                element={<About windowWidth={windowWidth} />}
              ></Route>
              <Route path="/product/*" Component={Product}></Route>
            </Routes>
          )}

          {isNavToggle && <Nav></Nav>}
          <Footer onToggle={handleToggle} windowWidth={windowWidth} />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
