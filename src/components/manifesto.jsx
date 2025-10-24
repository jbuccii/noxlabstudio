import React, { useEffect } from "react";
import SplitType from "split-type";
import { motion } from "framer-motion";

const blocks = [
  {
    theme: "dark",
    title: "When the light goes out, the story begins.",
    text:
      "At NOxLAB, we shape ideas that move like films, not commercials. Every project begins with a vision — to tell the emotional truth behind a brand, a face, or an experience. We experiment with cinematic language to turn communication into storytelling, advertising into emotion, and messages into immersive experiences.",
  },
  {
    theme: "light",
    title: "Every brand has a soul. We give it voice and light.",
    text:
      "We live in a world full of visual noise. That’s why we seek authenticity — not just aesthetics. We study the identity of every client and craft a visual language that mirrors their values, rhythm, and tone. The goal isn’t to please everyone, but to stay unforgettable — because it’s real.",
  },
  {
    theme: "dark",
    title: "In the dark, we find the light. In silence, the truth.",
    text:
      "Darkness is our lab — a space for listening, intuition, and discovery. It’s where ideas spark and take form. Each production blends art direction, cinematic technique, and strategic thought to create lasting imagery. From writing to post-production, everything aims to reveal the visual truth within every story.",
  },
];

export default function Manifesto() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".animated-text");
    nodes.forEach((el) => {
      const split = new SplitType(el, { types: "words, chars" });
      split.chars.forEach((char, i) => {
        const delay = Math.sin(i * 0.27) * 0.18 + i * 0.028;
        const skew = (Math.random() * 6 - 3).toFixed(2);
        const rot = (Math.random() * 4 - 2).toFixed(2);
        const y = 40 + Math.random() * 15;
        char.style.opacity = 0;
        char.style.filter = "blur(6px)";
        char.style.transform = `translateY(${y}px) skewY(${skew}deg) rotate(${rot}deg)`;
        char.style.transition = `
          opacity .35s ${delay}s cubic-bezier(.2,.7,.2,1),
          transform .5s ${delay}s cubic-bezier(.2,.7,.2,1),
          filter .6s ${delay + 0.05}s ease
        `;
      });
    });

    const t = setTimeout(() => {
      document.querySelectorAll(".char").forEach((c) => {
        c.style.opacity = 1;
        c.style.filter = "blur(0)";
        c.style.transform = "translateY(0) skewY(0deg) rotate(0deg)";
      });
    }, 350);

    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {blocks.map((b, i) => (
        <section key={i} className={`manifesto-band ${b.theme}`}>
          <motion.div
  className="manifesto-row"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.35 }}
  transition={{ duration: 1, delay: i * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
  onViewportEnter={(e) => e.target.classList.add("visible")}
>
  <div className="manifesto-left">
    <h2 className="animated-text">{b.title}</h2>
  </div>
  <div className="manifesto-right">
    <p className="animated-text">{b.text}</p>
  </div>
</motion.div>

        </section>
      ))}
    </>
  );
}











