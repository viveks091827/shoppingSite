import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Add from "./Pages/Add";
import { Link } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about/:id" exact element={<About />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/addproduct" exact element={<Add />} />
      </Routes>
    </BrowserRouter>
);
