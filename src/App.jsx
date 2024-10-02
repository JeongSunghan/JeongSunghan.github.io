import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Sidebar from './pages/Sidebar';
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./App.css";
import Header from "./pages/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
