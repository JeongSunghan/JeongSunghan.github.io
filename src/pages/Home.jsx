import React from "react";
import "../styles/Home.css"; // 대각선 스타일을 적용한 CSS

const Home = () => {
  return (
    <div className="container">

      <div className="left-section" onClick="">
        <h1>Projects</h1>
        <p>Explore my web projects, React applications, and more.</p>
      </div>

      <div className="right-section" onClick="">
        <h1>About Me</h1>
        <p>Learn more about who I am, my background, and what I do.</p>
      </div>

    </div>
  );
};

export default Home;
