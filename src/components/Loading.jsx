import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Loading.css';

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + 10, 100));
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [progress]);

  const loadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="loading-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="loading-text"
        variants={loadingVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="loading-letter" variants={letterVariants}>L</motion.span>
        <motion.span className="loading-letter" variants={letterVariants}>O</motion.span>
        <motion.span className="loading-letter" variants={letterVariants}>A</motion.span>
        <motion.span className="loading-letter" variants={letterVariants}>D</motion.span>
        <motion.span className="loading-letter" variants={letterVariants}>I</motion.span>
        <motion.span className="loading-letter" variants={letterVariants}>N</motion.span>
        <motion.span className="loading-letter" variants={letterVariants}>G</motion.span>
      </motion.div>
      
      <motion.div 
        className="loading-progress"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress / 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default Loading;
