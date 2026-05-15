import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const timeline = [
  {
    role: "Frontend Developer Intern",
    company: "Chalapathi Institute of Engineering & Technology",
    period: "Jan 2026 - Present",
    highlights: [
      "Built role-based dashboards (Chairman, HOD, Faculty, Mentor) for a College ERP platform serving 10,000+ students across 4 institutional branches using React, Tailwind CSS, and component-based architecture.",
      "Integrated Django + MongoDB REST APIs for student verification and course workflows; reduced manual data-entry overhead by an estimated 30%.",
      "Developed a verified student portfolio system enabling profile hosting for projects, certifications, and academics with faculty authentication.",
    ],
  },
  {
    role: "Growth & Innovation Associate",
    company: "OnwardCareerZ · Part-time",
    period: "Oct 2025 - Mar 2026 · 6 mos",
    highlights: [
      "Focused on scaling career services through innovation, process optimization, and growth-driven strategies that improve reach, engagement, and client success.",
      "Supported operational improvements across career service workflows to help the team move faster and deliver with more clarity.",
      "Contributed to growth-oriented initiatives designed to strengthen service quality and client outcomes.",
    ],
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="section-pad w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="tag-chip">Experience</p>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl text-white">
              Proven delivery across growth and product teams.
            </h2>
          </motion.div>
          <motion.p
            className="text-gray-300 max-w-xl"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            A snapshot of the roles where I’ve shipped measurable outcomes, improved workflows,
            and built systems that are easier to scale and maintain.
          </motion.p>
        </div>

        <div className="mt-12 relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-10">
            {timeline.map((item) => (
              <motion.div
                key={item.role}
                className="relative pl-16"
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              >
                <div className="absolute left-3 top-1 h-4 w-4 rounded-full bg-amber-200" />
                <div className="glass-card p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-2xl text-white font-semibold">{item.role}</h3>
                      <p className="text-sm text-gray-300">{item.company}</p>
                    </div>
                    <span className="text-xs uppercase tracking-[0.25em] text-amber-200">
                      {item.period}
                    </span>
                  </div>
                  <div className="mt-5 space-y-2 text-sm text-gray-200">
                    {item.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2">
                        <FiArrowRight className="mt-1 text-amber-200" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;