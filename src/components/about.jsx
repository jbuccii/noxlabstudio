import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        About
      </motion.h2>
      <p>
        We are a multidisciplinary studio exploring the intersection of design and storytelling. 
        Our mission is to craft digital experiences that connect emotionally with people.
      </p>
    </section>
  )
}
