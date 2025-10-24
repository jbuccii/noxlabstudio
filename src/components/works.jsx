import React from "react";
import { motion } from "framer-motion";

const works = [
  {
    title: "Morire di Fame – McDonald's",
    youtubeUrl: "https://www.youtube.com/embed/D2mVMvEaHQI",
    description:
      "A spec commercial that reimagines the raw hunger of ambition. Visual intensity meets ironic narrative in this bold reinterpretation of modern advertising.",
    category: "Spec Ad / Commercial",
  },
  {
    title: "Più ascolti, più immagini – Audible",
    youtubeUrl: "https://www.youtube.com/embed/kOjZrIfjJ6c",
    description:
      "A minimalist, cinematic promo exploring the power of imagination. Sound becomes the main character — transforming silence into visual poetry.",
    category: "Spec Ad / Commercial",
  },
  {
    title: "Jordan Richie – Nazar",
    youtubeUrl: "https://www.youtube.com/embed/3jSkEqiJ6yA",
    description:
      "A music video built on contrast — beauty and chaos, rhythm and stillness. Shot with an experimental approach that merges performance and emotional texture.",
    category: "Music Video",
  },
  {
    title: "Larry P – Pelle Coat RMX",
    youtubeUrl: "https://www.youtube.com/embed/r9UYSnSpXcg",
    description:
      "An urban portrait where movement and light define attitude. The track becomes the lens through which identity and power are reframed.",
    category: "Music Video",
  },
  {
    title: "Frantoio Vidili",
    youtubeUrl: "https://www.youtube.com/embed/FkT9fr7TOh8",
    description:
      "A poetic documentary that blends tradition, craftsmanship, and human connection. Light and time intertwine to tell the story of genuine creation.",
    category: "Documentary",
  },
];

export default function WorkPage() {
  return (
    <section className="work-page">
      <div className="work-header">
        <h1>Our Works</h1>
        <p>
          Each frame is crafted with purpose. Our films explore identity, light,
          and the invisible dialogue between story and sound.
        </p>
      </div>

      <div className="work-list">
        {works.map((work, index) => (
          <motion.div
            key={index}
            className="work-item"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="work-video-container">
              <iframe
                src={`${work.youtubeUrl}?autoplay=0&controls=1&modestbranding=1&rel=0`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={work.title}
              ></iframe>
            </div>

            <div className="work-description">
              <h2>{work.title}</h2>
              <h4>{work.category}</h4>
              <p>{work.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

