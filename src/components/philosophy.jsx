import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Philosophy() {
  useEffect(() => {
    const lines = document.querySelectorAll(".philosophy-line");
    lines.forEach((line, i) => {
      line.style.opacity = 0;
      line.style.transform = "translateY(20px)";
      setTimeout(() => {
        line.style.transition = "opacity 1s ease, transform 1s ease";
        line.style.opacity = 1;
        line.style.transform = "translateY(0)";
      }, i * 800);
    });
  }, []);

  return (
    <section className="philosophy-section">
      <div className="philosophy-content">
        <motion.h2
          className="philosophy-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          The Craft of Darkness
        </motion.h2>

        <div className="philosophy-text">
          <p className="philosophy-line">
            We don’t capture stories — we sculpt them from shadows.
          </p>
          <p className="philosophy-line">
            Every light we turn on has first lived in the dark.
          </p>
          <p className="philosophy-line">
            Every silence we hold hides a meaning.
          </p>
          <p className="philosophy-line">
            At NOxLAB, the frame is not a limit — it’s a portal.
          </p>
        </div>
      </div>
    </section>
  );
}

