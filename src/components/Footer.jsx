import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <div className="site-footer__name">Jeong Sunghan</div>
          <p className="site-footer__tag">
            Full-stack Junior Developer — Seoul, KR
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="site-footer__social">
          <a
            href="https://github.com/JeongSunghan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a href="mailto:sh2683@naver.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span className="mono">© {year} Jeong Sunghan</span>
        <span className="mono site-footer__built">
          Built with React · Framer Motion
        </span>
      </div>
    </footer>
  );
}
