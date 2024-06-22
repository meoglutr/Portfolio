import { Routes, Route } from "react-router-dom";
import Header from "./componenets/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./componenets/Footer";

function App() {
  return (
    <>
      <div className="bg-cover bg-center min-h-screen w-full bg-[#455A64]">
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
