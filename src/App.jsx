import React from "react";
import Home from "./component/Home";
import Header from "./component/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./component/Cart";
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;
