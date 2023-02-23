import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//defining routes
import { Home } from "./pages/Home/Home";
import { Warehouse } from "./pages/Warehouse/Warehouse";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home  />} />
        <Route path="/home" element={<Home  />} />
        <Route path="/warehouse" element={<Warehouse  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
