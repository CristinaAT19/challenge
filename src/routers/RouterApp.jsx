import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../layouts/Home";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
