import React from "react";
import { Routes, Route } from "react-router-dom";

//defining routes
import { Home } from "./pages/Home/Home";
import { Warehouse } from "./pages/Warehouse/Warehouse";
import { ProductForm } from "./pages/Product/ProductForm";
import { Detailt } from "./pages/Details/Detail";
import { Signup } from "./pages/User/Signup/Signup";
import { Signin } from "./pages/User/Signin/Signin";

import "./App.css";

//use this context provider
import { UserContextProvider } from "./context/UserContext";
import { ProductContextProvider } from "./context/ProductContext";
import { CategoryContextProvider } from "./context/CategoryContext";


function App() {
  return (
    <UserContextProvider>
      <CategoryContextProvider>
      <ProductContextProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path="/product" element={<ProductForm />} />
          <Route path="/detail" element={<Detailt />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          
        </Routes>
      </ProductContextProvider>
    </CategoryContextProvider>
    </UserContextProvider>
    
  );
}

export default App;
