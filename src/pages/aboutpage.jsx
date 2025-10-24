import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div className="about-page" ref={ref}>
      {/* === ABOUT US === */}
      <section className="about-section">
        <div className="about-container">
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2>About Us</h2>
          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p>
              <span className="highlight">Nox Lab</span> is a cinematic
              production lab based in Rome where every project becomes a story.
              <br />
              <br />
              We work with <em>light, sound and time</em> as emotional
              instruments — shaping identity, tension and truth. Our goal isn’t
              to advertise. It’s to <strong>evoke</strong>.
            </p>

            <motion.div
              className="about-image"
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.img
                src="/assets/IMG_2976.jpg"
                alt="About NOxLAB"
                style={{ y }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* === PRINCIPLES === */}
      <section className="principles-section">
        <div className="about-container">
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2>Principles</h2>
          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p>
              We believe every frame should tell a <strong>truth</strong>.  
              Aesthetic is secondary to <em>feeling</em>, and imperfection often
              reveals beauty.  
              <br />
              <br />
              Our principles are rooted in light, movement, and honesty — the
              tools that turn filmmaking into an act of <span className="highlight">listening</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === SERVICES === */}
      <section className="services-section">
        <div className="about-container">
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2>Services</h2>
          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p>
              We produce across genres and formats:
              <br />
              <strong>
                films, short films, commercials, documentaries, brand strategy,
                music videos, and social storytelling.
              </strong>
              <br />
              <br />
              Each project merges <em>cinematic language</em> and creative
              strategy to make brands unforgettable.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

