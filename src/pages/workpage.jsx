import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const works = [
  {
    title: "Morire di Fame – McDonald's",
    category: "Spec Ad",
    video: "/assets/specmc.mp4",
    description:
      "Inspired by Hitchcock’s *Psycho*, this spec ad plays with cinematic tension. Fear turns into irony as darkness gives way to taste. A short commercial that transforms the ordinary into pure storytelling.",
  },
  {
    title: "Heartest Epilogue – Trilussa",
    category: "Videoclip",
    video: "/assets/trilussavideoclip.mp4",
    description:
      "A journey through emotion and introspection. Music becomes visual poetry, with cinematography suspended between dream and reality. Shot in digital film, it captures the fragility of memory.",
  },
  {
    title: "Jordan Richie – Nazar",
    category: "Videoclip",
    video: "/assets/nazarvideoclip.mp4",
    description:
      "An introspective video exploring the tension between light and shadow, desire and guilt. Fragmented editing and hypnotic pacing reveal the conflict between what’s hidden and what’s seen.",
  },
  {
    title: "Frantoio Vidili",
    category: "Documentary",
    video: "/assets/frantoiodoc.mp4",
    description:
      "A poetic documentary about tradition and craftsmanship. Natural light and ambient sound become narrative tools. The essence of time and care, told without a single spoken word.",
  },
  {
    title: "Larry P – Pelle Coat RMX",
    category: "Videoclip",
    video: "/assets/larrypvideoclip.mp4",
    description:
      "A raw, energetic urban performance. Every beat drives the rhythm of the edit. The video captures the pulse of the street, balancing chaos and control through cinematic precision.",
  },
];

export default function WorkPage() {
  const [soundOn, setSoundOn] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="work-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <section className="work-intro">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Vision Through Frames
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Every frame we create begins in the dark — where silence, emotion,
            and light collide. These projects reflect our belief that filmmaking
            is not about advertising, but about truth, rhythm, and atmosphere.
          </motion.p>

          <button
            className="sound-toggle"
            onClick={() => setSoundOn(!soundOn)}
            aria-label="Toggle sound"
          >
            {soundOn ? "🔊 Sound On" : "🔈 Sound Off"}
          </button>
        </section>

        <section className="work-list">
          {works.map((work, index) => (
            <motion.div
              key={index}
              className="work-item"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="work-video-full">
                <video
                  src={work.video}
                  autoPlay
                  loop
                  muted={!soundOn}
                  playsInline
                  preload="metadata"
                  controls={soundOn}
                />
              </div>
              <div className="work-info">
                <h2>{work.title}</h2>
                <span className="category">{work.category}</span>
                <p>{work.description}</p>
              </div>
            </motion.div>
          ))}
        </section>
      </motion.div>
    </AnimatePresence>
  );
}
