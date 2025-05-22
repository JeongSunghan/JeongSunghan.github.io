import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import profileImage from "../assets/image/about-me-home.png";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { motion } from "framer-motion";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleAboutMeClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/about");
    }, 1500);
  };

  const handleProjectsClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/projects");
    }, 1500);
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <motion.div 
            className="home-left-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="home-image-container">
              <motion.img 
                src={profileImage} 
                alt="Profile" 
                className="home-profile-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div 
                className="home-text-overlay"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)`
                }}
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  반갑습니다!
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  JEONG SUNGHAN
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  JUNIOR Developer 입니다
                </motion.p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="home-right-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="home-section home-about-me-section"
              onClick={handleAboutMeClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h2>About Me</h2>
              <div className="section-overlay" />
            </motion.div>
            <motion.div 
              className="home-section home-projects-section"
              onClick={handleProjectsClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h2>Projects</h2>
              <div className="section-overlay" />
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Home;
