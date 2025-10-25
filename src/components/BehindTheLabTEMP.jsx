import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Research",
    text: "Every story begins in silence. We listen before we light.",
  },
  {
    title: "Shoot",
    text: "We light the unseen, sculpting emotion through framing and rhythm.",
  },
  {
    title: "Post",
    text: "We cut to the truth. Color, sound, and timing become meaning.",
  },
];

export default function BehindTheLab() {
  return (
    <section className="lab-section">
      <div className="lab-grid">
        {processSteps.map((step, i) => (
          <motion.div
            key={i}
            className="lab-step"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
