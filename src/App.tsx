import React from "react";
import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import SingleSurat from "./Layouts/SingleSurat";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Layouts/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="surat/:idsurat/:namaLatin" element={<SingleSurat />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
