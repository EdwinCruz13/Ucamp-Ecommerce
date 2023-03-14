import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//defining routes
import { Home } from "./pages/Home/Home";
import { Warehouse } from "./pages/Warehouse/Warehouse";
import { Detailt } from "./pages/Details/Detail";
import { Signup } from "./pages/User/Signup/Signup";
import { Signin } from "./pages/User/Signin/Signin";

import './App.css';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home  />} />
        <Route path="/home" element={<Home  />} />
        <Route path="/warehouse" element={<Warehouse  />} />
        <Route path="/detail" element={<Detailt  />} />
        <Route path="/signup" element={<Signup  />} />
        <Route path="/signin" element={<Signin  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
