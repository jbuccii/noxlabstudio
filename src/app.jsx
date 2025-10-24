import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import CursorOverlay from "./components/CursorOverlay";
import Philosophy from "./components/Philosophy";
import BehindTheLab from "./components/BehindTheLab";

// Pagine
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import WorkPage from "./pages/WorkPage";

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




