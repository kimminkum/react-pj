import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import styled from "styled-components";
import "./App.css";

import Header from "./routes/Header";
import Main from "./routes/Main";
import Business from "./routes/Business";
import About from "./routes/About";
import Nav from "./components/Nav";
import Footer from "./routes/Footer";
import Pr from "./routes/Pr";
import Careers from "./routes/Careers";
import Contact from "./routes/Contact";

const App: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isNavToggle, setIsNavToggle] = useState(false);

  const handleToggle = () => {
    setIsNavToggle(!isNavToggle);
  };

  const pathName = new URL(window.location.href).pathname;

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
        <BrowserRouter basename={pathName}>
          {/* <BrowserRouter> */}
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
              <Route
                path="/business/*"
                element={<Business windowWidth={windowWidth} />}
              ></Route>
              <Route
                path="/pr"
                element={<Pr windowWidth={windowWidth} />}
              ></Route>
              <Route
                path="/careers/*"
                element={<Careers windowWidth={windowWidth} />}
              ></Route>
              <Route
                path="/contact"
                element={<Contact windowWidth={windowWidth} />}
              ></Route>
            </Routes>
          )}

          {isNavToggle && (
            <Nav isNavToggle={isNavToggle} onToggle={handleToggle}></Nav>
          )}
          <Footer onToggle={handleToggle} windowWidth={windowWidth} />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
