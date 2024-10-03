import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Loading from './components/Loading';

// import Header from './components/Header';
// import Footer from './components/Footer';

const App = () => {
  return (
    <Router>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />

        {/* Loading 페이지 테스트 */}
        <Route path="/loading" element={<Loading />} />
      </Routes>      
    </Router>
  );
};

export default App;
