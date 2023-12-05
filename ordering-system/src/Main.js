import React from "react";
import Menu from "../src/Menu Pages/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart";
import DetailedItem from "./DetailedItem";
import OrderAlert from "./OrderAlert";
import AddToCart from "./AddToCart";
import Pay from "./Pay";
import Testpage from "./Testpage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/DetailedItem" index element={<DetailedItem />} />
        <Route path="/" index element={<Menu />} />
        <Route path="/Cart" index element={<Cart />} />
        <Route path="/Alert" index element={<OrderAlert />} />
        <Route path="/Popup" index element={<AddToCart />} />
        <Route path="/Pay" index element={<Pay />} />
        <Route path="/test" index element={<Testpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
