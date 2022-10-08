import "./App.css";
import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Products";
import ProductDetail from "./ProductDetail";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/product/:productId" element={<ProductDetail />} />
          <Route>404! Page not found.</Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
