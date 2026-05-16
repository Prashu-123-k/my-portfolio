import React from "react";
import { motion } from "framer-motion";
import avatar from "../assets/avator.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const JOB_ROLES = ["Software Engineer", "MERN Stack Developer", "AI Enthusiast"];
const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sai-chandra-vinnakota/",
    Icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/saichandrav",
    Icon: FaGithub,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/chanduvk/",
    Icon: SiLeetcode,
  },
];

const Home = React.forwardRef((props, ref) => {
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [typedRole, setTypedRole] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentRole = JOB_ROLES[roleIndex];
    let timeoutId;

    if (!isDeleting && typedRole.length < currentRole.length) {
      timeoutId = window.setTimeout(() => {
        setTypedRole(currentRole.slice(0, typedRole.length + 1));
      }, 85);
    } else if (!isDeleting && typedRole.length === currentRole.length) {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(true);
      }, 1100);
    } else if (isDeleting && typedRole.length > 0) {
      timeoutId = window.setTimeout(() => {
        setTypedRole(currentRole.slice(0, typedRole.length - 1));
      }, 45);
    } else {
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % JOB_ROLES.length);
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [typedRole, isDeleting, roleIndex]);

  return (
    <section
      ref={ref}
      id="home"
      className="w-full min-h-screen relative bg-[#050505] text-white flex flex-col overflow-hidden font-sans -mt-16"
    >
      {/* Background radial gradient to give an extremely subtle lighting effect */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-[#111111] via-[#050505] to-[#050505] opacity-60 pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 w-full h-screen flex flex-col justify-center px-4 md:px-12 lg:px-24">

        {/* Central Moody Image */}
        <motion.div
          className="absolute inset-0 flex justify-center items-center pointer-events-none z-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Avatar with extreme contrast and grayscale to mimic the moody portrait style */}
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img
              src={avatar}
              alt="Sai Chandra"
              className="h-[60vh] md:h-[80vh] w-auto object-contain grayscale-[1] contrast-[1.4] brightness-175 opacity-80"
              style={{
                WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
                maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)"
              }}
            />
          </div>
        </motion.div>

        {/* Text Layer - Left side main title, Right side small paragraph */}
        <div className="relative z-20 w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-32 pb-20">
          
          {/* Left Text Box */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center h-full mt-8 lg:mt-25"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-[2.25rem] min-[380px]:text-[2.75rem] sm:text-[4rem] lg:text-[4.5rem] font-bold leading-[1.1] tracking-tight text-white mb-5 sm:mb-7 drop-shadow-lg">
              I Craft Seamless <br className="hidden md:block"/>
              <span className="text-gray-200">& Scalable Apps</span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.65rem] sm:text-xs font-semibold text-gray-400 uppercase tracking-[0.2em]">
              <span className="inline-flex items-center min-w-[15ch] sm:min-w-[20ch] normal-case tracking-[0.08em] text-gray-300 break-all sm:break-normal">
                {typedRole}
                <span className="ml-1 text-gray-400 animate-pulse">|</span>
              </span>
              <span>Based In India</span>
              <span>©2026</span>
            </div>

            <div className="mt-8 flex items-center gap-5 sm:gap-6 text-white/85">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group inline-flex items-center justify-center transition-transform hover:-translate-y-0.5"
                  whileHover={{ y: -2, scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="text-[1.5rem] lg:text-3xl sm:text-[2.1rem] transition-colors group-hover:text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.08)]" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Text Box */}
          <motion.div
            className="lg:col-span-4 lg:col-start-8 flex flex-col justify-start lg:justify-center h-full mt-4 lg:-mt-90"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          >
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm lg:pr-8">
              With 2+ years of experience in building modern, scalable web applications, and hands-on experience in MERN stack and React development.
            </p>
          </motion.div>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col justify-center items-center cursor-pointer text-[#8a2be2] hover:text-[#a64dff] transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="text-xs tracking-[0.2em] font-medium mb-3 uppercase text-gray-500">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-lg"
        >
          ↓
        </motion.div>
      </motion.div>

    </section>
  );
});

Home.displayName = "Home";
export default Home;