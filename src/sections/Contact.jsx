import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

const web3formsKey = "de6767f2-88e2-4424-84d6-06434dfc8579";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });

    // Use Web3Forms for submissions
    if (!web3formsKey) {
      setStatus({ type: "error", message: "Form service is not configured. Please set VITE_WEB3FORMS_ACCESS_KEY." });
      setIsSending(false);
      return;
    }

    try {
      const fd = new FormData();
      fd.append("access_key", web3formsKey);
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("message", formData.message);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();
      if (data.success) {
        setStatus({ type: "success", message: "Message sent successfully." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Web3Forms error:", data);
        setStatus({ type: "error", message: data.message || "Failed to send message." });
      }
    } catch (error) {
      console.error("Web3Forms send failed:", error);
      setStatus({ type: "error", message: "Failed to send message. Please try again later." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="w-full min-h-screen bg-black text-white px-5 md:px-12 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]">
            Get In Touch
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed text-base md:text-lg">
            I&apos;m always open to exploring new projects, ideas, and opportunities in tech. Whether you have a question, collaboration in mind, or just want to connect, feel free to reach out.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4">
                 <div className="bg-[#3B4252] rounded-full p-3 shrink-0 mt-1">
                <MdEmail className="text-2xl text-[#ffffff]" />
              </div>
              <div>
                <p className="text-sm text-[#C0C5CE] uppercase tracking-wider">Email</p>
                <a
                  href="mailto:chanduvinnakota26@gmail.com"
                  className="text-[15px] sm:text-lg text-[#C2A878] hover:text-[#A38B5C] transition-colors break-all"
                >
                  chanduvinnakota26@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
                 <div className="bg-[#3B4252] rounded-full p-3 shrink-0 mt-1">
                <FaLinkedinIn className="text-2xl text-[#ffffff]" />
              </div>
              <div>
                <p className="text-sm text-[#C0C5CE] uppercase tracking-wider">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/sai-chandra-vinnakota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] sm:text-lg text-[#C2A878] hover:text-[#A38B5C] transition-colors break-all"
                >
                  linkedin.com/in/saichandravinnakota
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
                 <div className="bg-[#3B4252] rounded-full p-3 shrink-0 mt-1">
                <FaGithub className="text-2xl text-[#ffffff]" />
              </div>
              <div>
                <p className="text-sm text-[#C0C5CE] uppercase tracking-wider">GitHub</p>
                <a
                  href="https://github.com/saichandrav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] sm:text-lg text-[#C2A878] hover:text-[#A38B5C] transition-colors break-all"
                >
                  github.com/saichandrav
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-5"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm text-[#C0C5CE]">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#1F1F1F] border border-[#3B4252] text-[#E5E9F0] placeholder:text-[#C0C5CE]/70 rounded-xl px-4 py-3 outline-none focus:border-[#C2A878]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm text-[#C0C5CE]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#1F1F1F] border border-[#3B4252] text-[#E5E9F0] placeholder:text-[#C0C5CE]/70 rounded-xl px-4 py-3 outline-none focus:border-[#C2A878]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm text-[#C0C5CE]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-[#1F1F1F] border border-[#3B4252] text-[#E5E9F0] placeholder:text-[#C0C5CE]/70 rounded-xl px-4 py-3 outline-none resize-none focus:border-[#C2A878]"
            />
          </div>

          {status.message && (
            <p
              className={`text-sm ${status.type === "success" ? "text-emerald-400" : "text-rose-400"}`}
              role="status"
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSending}
            className="w-full md:w-auto px-8 md:px-16 py-3 rounded-full font-medium text-[#1F1F1F] bg-white hover:bg-[#dedcd9] cursor-pointer transition-colors disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;