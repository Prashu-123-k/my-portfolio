import React from "react";
import { motion } from "framer-motion";
import { FiCpu, FiTrendingUp, FiZap } from "react-icons/fi";

const highlights = [
  {
    icon: FiTrendingUp,
    title: "Product-Driven Engineering",
    description:
      "Blend user research, metrics, and system design to ship features that move KPIs.",
  },
  {
    icon: FiCpu,
    title: "Scalable Web Systems",
    description:
      "Design MERN + Python services that scale smoothly with clean APIs and zero drama.",
  },
  {
    icon: FiZap,
    title: "Performance Obsessed",
    description:
      "From Lighthouse 95+ to lazy-loaded experiences, every millisecond matters.",
  },
];

const stats = [
  { label: "Years of Experience", value: "2+" },
  { label: "Projects Shipped", value: "5+" },
  { label: "Happy Collaborations", value: "20+" },
];

const About = () => {
  return (
    <motion.section
      id="about"
      className="section-pad w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="tag-chip">About Me</p>
          <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl text-white">
            Building bold, reliable digital experiences.
          </h2>
          <p className="mt-6 text-gray-300 leading-relaxed text-base sm:text-lg">
            I am a full-stack developer who thrives at the intersection of product, design,
            and engineering. I love translating ambiguous requirements into pixel-perfect
            interfaces backed by resilient APIs. Every project is an opportunity to create
            something that feels premium and performs flawlessly.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((item) => (
              <div key={item.label} className="glass-card p-4 text-center">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5">
          {highlights.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              className="glass-card p-6 hover-lift"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl text-amber-200">
                  <Icon />
                </div>
                <div>
                  <h3 className="text-xl text-white font-semibold">{title}</h3>
                  <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;