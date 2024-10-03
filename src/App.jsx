import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// import Loading from './components/Loading';

const App = () => {
  return (
    <Router>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* Loading 페이지 테스트 */}
        {/* <Route path="/loading" element={<Loading />} /> */}
      </Routes>      
    </Router>
  );
};

export default App;
