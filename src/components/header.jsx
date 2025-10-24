import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NAV_OFFSET = 90;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // === Gestione scroll dinamico ===
  useEffect(() => {
    const hero = document.getElementById("hero");

    let observer;
    const handleScroll = () => setScrolled(window.scrollY > 60);

    if (hero && location.pathname === "/") {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          const isVisible =
            entry.isIntersecting && entry.intersectionRatio > 0.65;
          setScrolled(!isVisible);
          if (isVisible) setMenuOpen(false);
        },
        { threshold: [0.35, 0.65] }
      );
      observer.observe(hero);
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  // === Reset header quando torni alla home ===
  useEffect(() => {
    if (location.pathname === "/") setScrolled(false);
  }, [location.pathname]);

  // === Scroll fluido per sezioni interne (solo homepage) ===
  const smoothScrollTo = (e, targetId) => {
    e.preventDefault();

    const scrollToTarget = () => {
      const el = document.getElementById(targetId);
      if (el) {
        const y =
          el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToTarget, 400);
    } else {
      scrollToTarget();
    }

    setMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <Link to="/" className="logo-link" aria-label="Go to home">
          <div className="logo-container">
            <img
              src="/assets/logo.png"
              alt="NOxLAB Logo"
              className={`logo-icon ${scrolled ? "logo-small" : ""}`}
            />
            <div className={`logo-text ${scrolled ? "logo-hidden" : ""}`}>
              NO<span className="logo-x">x</span>LAB
              <span className="logo-r">®</span>
            </div>
          </div>
        </Link>

        <nav className={`nav-links ${scrolled ? "nav-hidden" : ""}`}>
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link> 
          <Link to="/contacts">Contacts</Link>
        </nav>

        <button
          className={`menu-toggle ${scrolled ? "show" : ""}`}
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="menu-panel" onClick={(e) => e.stopPropagation()}>
            <button
              className="menu-close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
            <nav className="menu-list">
              <Link to="/about">About</Link>
              <Link to="/work">Work</Link> 
              <Link to="/contacts">Contacts</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}







