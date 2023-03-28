import React from "react";
import { Routes, Route } from "react-router-dom";

//defining routes
import { Home } from "./pages/Home/Home";
import { Warehouse } from "./pages/Warehouse/Warehouse";
import { ProductForm } from "./pages/Product/ProductForm";
import { ColorForm } from "./pages/Product/ColorForm";
import { Detailt } from "./pages/Details/Detail";
import { Signup } from "./pages/User/Signup/Signup";
import { Signin } from "./pages/User/Signin/Signin";

import "./App.css";

//use this context provider
import { UserContextProvider } from "./context/UserContext";
import { ProductContextProvider } from "./context/ProductContext";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";
import { CategoryContextProvider } from "./context/CategoryContext";
import { ColorContextProvider } from "./context/ColorContext";

function App() {
  return (
    <UserContextProvider>
      <ShoppingCartContextProvider>
        <CategoryContextProvider>
          <ColorContextProvider>
            <ProductContextProvider>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/warehouse" element={<Warehouse />} />
                <Route path="/product" element={<ProductForm />} />
                <Route path="/color" element={<ColorForm />} />
                <Route path="/detail/:id" element={<Detailt />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
              </Routes>
            </ProductContextProvider>
          </ColorContextProvider>
        </CategoryContextProvider>
      </ShoppingCartContextProvider>
    </UserContextProvider>
  );
}

export default App;
