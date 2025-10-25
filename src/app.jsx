import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// === COMPONENTI PRINCIPALI ===
import Header from "./components/header";
import Hero from "./components/hero";
import Manifesto from "./components/manifesto";
import Projects from "./components/projects";
import Footer from "./components/footer";
import CursorOverlay from "./components/cursoroverlay";
import Philosophy from "./components/philosophy";
import BehindTheLab from "./components/behindthelab";

// === PAGINE ===
import AboutPage from "./pages/aboutpage";
import ContactsPage from "./pages/contactspage";
import WorkPage from "./pages/workpage";

import { AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Manifesto />
                  <Philosophy />
                  <div className="light-transition"></div>
                  <BehindTheLab />
                  <Projects />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/work" element={<WorkPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <CursorOverlay />
        <div className="grain-overlay" />
      </div>
    </Router>
  );
}





