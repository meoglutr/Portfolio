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
      <div
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url("src/images/Background.jpg")` }}
      >
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
