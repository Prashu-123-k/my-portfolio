import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiOpenai,
  SiOpencv,
  SiCloudinary,
  SiGithub,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend Loadout",
    subtitle: "Fast UI, smooth motion, sharp visuals.",
    skills: [
      { name: "React", Icon: SiReact },
      { name: "Vite", Icon: SiVite },
      { name: "Tailwind", Icon: SiTailwindcss },
      { name: "Framer", Icon: SiFramer },
    ],
  },
  {
    title: "Backend Engine",
    subtitle: "APIs, databases, and service power.",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express", Icon: SiExpress },
      { name: "FastAPI", Icon: SiFastapi },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: SiMongodb },
    ],
  },
  {
    title: "Tooling + AI",
    subtitle: "Automation, assistants, and deployment gear.",
    skills: [
      { name: "OpenAI", Icon: SiOpenai },
      { name: "OpenCV", Icon: SiOpencv },
      { name: "Cloudinary", Icon: SiCloudinary },
      { name: "GitHub", Icon: SiGithub },
    ],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="section-pad w-full"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div variants={itemVariants}>
            <p className="tag-chip">Skills</p>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl text-white">
              Choose the right loadout for the mission.
            </h2>
          </motion.div>
          <motion.p className="text-gray-300 max-w-xl" variants={itemVariants}>
            A compact kit of frameworks, services, and automation tools I use to keep builds
            responsive, stable, and battle-ready.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.28)]"
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
            >
              <div className="pointer-events-none absolute inset-0 " />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-amber-200/80">
                      System
                    </p>
                    <h3 className="mt-2 text-xl text-white font-semibold">{group.title}</h3>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gray-200">
                    Ready
                  </span>
                </div>

                <p className="mt-3 text-sm text-gray-300 leading-relaxed">{group.subtitle}</p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-3 py-3 transition-colors duration-300 hover:border-white/20 hover:bg-white/10"
                    whileHover={{ scale: 1.03, transition: { duration: 0.2, ease: "easeOut" } }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-2xl text-amber-200 transition-transform duration-300 group-hover:scale-110">
                      <skill.Icon />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{skill.name}</p>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400">
                        Equipped
                      </p>
                    </div>
                  </motion.div>
                ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;