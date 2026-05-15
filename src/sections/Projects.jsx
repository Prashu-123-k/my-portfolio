import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projectImage from "../assets/Screenshot 2026-05-06 004137.png";

const projectCards = [
  {
    label: "Major Project",
    title: "Ratnamayuri",
    title2: "E-commerce Platform",
    description:
      "Production multi-vendor platform with role-based dashboards, fast search, and optimized checkout flow.",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
    image: projectImage,
    liveLink: "https://ratnamayuri.live",
    codeLink: "https://github.com/saichandrav/RatnaMayuriwebmain",
  },
];

/* ─── Section ─── */
const Projects = () => (
  <motion.section
    id="projects"
    className="section-pad w-full"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
            Projects
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-tight">
            Featured Work
          </h2>
        </motion.div>
      </div>

      <div className="h-px w-full mb-12 bg-white/10" />

      <div className="flex flex-col gap-8">
        {projectCards.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            title2={project.title2}
            description={project.description}
            techStack={project.techStack}
            image={project.image}
            label={project.label}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </div>
  </motion.section>
);

export default Projects;