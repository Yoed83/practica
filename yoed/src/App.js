import "./App.css";
import Footer from "./componets/Footer/Footer";
import Navbar from "./componets/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import Work from "./pages/work";
import Skills from "./pages/skills";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Navbar />
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
