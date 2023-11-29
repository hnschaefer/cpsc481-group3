import React from "react";
import Menu from "../src/Menu Pages/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart";
import Description from "./App";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Description" index element={<Description />} />
        <Route path="/Menu" index element={<Menu />} />
        <Route index element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
