import { useState } from "react";
import "./App.css";
import Header from "./componenets/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {

  return (
    <>
      < Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
