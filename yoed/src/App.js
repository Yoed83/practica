import react, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./componets/Footer/Footer";
import Navbar from "./componets/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import Work from "./pages/work";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import Dropdown from "./componets/Dropdown/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i rezedddd");
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
