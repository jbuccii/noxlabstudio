import React from "react";

const projects = [
  {
    title: "Morire di Fame – McDonald's",
    youtubeUrl: "https://www.youtube.com/embed/D2mVMvEaHQI",
    category: "Spec Ad / Commercial",
  },

   {
    title: "Trilussa - Heartest Epilogue",
    youtubeUrl: "https://youtu.be/Dk4aHhOeP3w",
    category: "Videoclip",
  },

  {
    title: "Più ascolti, più immagini – Audible",
    youtubeUrl: "https://www.youtube.com/embed/kOjZrIfjJ6c",
    category: "Spec Ad / Commercial",
  },
  {
    title: "Jordan Richie – Nazar",
    youtubeUrl: "https://www.youtube.com/embed/3jSkEqiJ6yA",
    category: "Videoclip",
  },
  {
    title: "Larry P – Pelle Coat RMX",
    youtubeUrl: "https://www.youtube.com/embed/r9UYSnSpXcg",
    category: "Videoclip",
  },
  {
    title: "Frantoio Vidili",
    youtubeUrl: "https://www.youtube.com/embed/FkT9fr7TOh8",
    category: "Documentary",
  },


];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Selected Works</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-item">
            <div className="project-video-wrapper">
              <iframe
                src={`${p.youtubeUrl}?autoplay=0&controls=0&modestbranding=1&rel=0`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={p.title}
                className="project-video"
              ></iframe>
            </div>

            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

