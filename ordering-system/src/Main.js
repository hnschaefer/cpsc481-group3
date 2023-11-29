import React from "react";
import Menu from "../src/Menu Pages/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart";
import DetailedItem from "./DetailedItem";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/DetailedItem" index element={<DetailedItem />} />
        <Route path="/Menu" index element={<Menu />} />
        <Route path="/Cart" index element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
