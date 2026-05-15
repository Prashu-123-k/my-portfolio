import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa6";

const testimonials = [
  {
    quote:
      "Sai brings clarity to chaos. Our roadmap is very fasinating and his ui creativity and vision hits different",
    name: "K Prasanth",
    role: "frontend developer",
  },
  {
    quote:
      "Pixel-perfect and performance-focused. He shipped a complete UI refresh ahead of schedule.",
    name: "Rohit S.",
    role: "Design Lead",
  },
  {
    quote:
      "He understands business outcomes, not just code. The dashboards landed immediate ROI.",
    name: "Ayesha K.",
    role: "Operations Director",
  },
];

const Testimonials = () => {
  return (
    <motion.section
      id="testimonials"
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
            <p className="tag-chip">Testimonials</p>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl text-white">
              Trusted by teams who value momentum.
            </h2>
          </motion.div>
          <motion.p
            className="text-gray-300 max-w-xl"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            A quick snapshot of how leaders describe working with me. Real feedback from recent
            collaborations.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              className="glass-card p-6 hover-lift"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <FaQuoteLeft className="text-amber-200 text-xl" />
              <p className="mt-4 text-gray-200 text-sm leading-relaxed">{item.quote}</p>
              <div className="mt-6">
                <p className="text-white font-semibold">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;