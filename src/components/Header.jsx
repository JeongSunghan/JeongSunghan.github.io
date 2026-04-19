import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import "../styles/Header.css";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header__inner">
        <Link to="/" className="site-logo" aria-label="Jeong Sunghan — Home">
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="lg" x1="0" y1="0" x2="32" y2="32">
                <stop offset="0%" stopColor="#7c9cff" />
                <stop offset="50%" stopColor="#b794ff" />
                <stop offset="100%" stopColor="#5eead4" />
              </linearGradient>
            </defs>
            <path
              d="M6 6 L26 6 L16 16 L26 26 L6 26"
              stroke="url(#lg)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <span className="site-logo__text">
            <span className="site-logo__name">Sunghan</span>
            <span className="site-logo__dot">.</span>
            <span className="site-logo__role mono">dev</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `site-nav__link ${isActive ? "is-active" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="site-nav__underline"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <a
            href="https://github.com/JeongSunghan"
            target="_blank"
            rel="noopener noreferrer"
            className="site-header__github"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>
          <button
            className="site-header__menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="site-mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `site-mobile-nav__link ${isActive ? "is-active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
