import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";
import Checkout from "../pages/Checkout";
import Cart from "../pages/Cart";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/shop/:id" element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
