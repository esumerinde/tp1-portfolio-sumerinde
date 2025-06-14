import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import "./styles/App.css";
import useThemeStore from "./themeStore.js";

function App() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <Router>
      <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
