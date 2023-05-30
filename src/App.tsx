import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./routes/Header";
import Footer from "./routes/Footer";
import Main from "./routes/Main";
import Product from "./routes/Product";
import Nav from "./components/Nav";
import "./App.css";
import NotFound from "./routes/NotFound";
import RouterPropsTest from "./routes/RouterPropsTest";
import RouterPropsResult from "./routes/RouterPropsResult";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" Component={Main}></Route>
          <Route path="/product/*" Component={Product}></Route>

          <Route path="/routerpropstest" Component={RouterPropsTest}></Route>
          <Route
            path="/routerpropsresult"
            Component={RouterPropsResult}
          ></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
