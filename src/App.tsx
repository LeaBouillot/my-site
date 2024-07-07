import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./nav/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}
