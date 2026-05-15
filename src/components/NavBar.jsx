import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo1.png";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);
  const THRESHOLD = 10;

// navBar link items
const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];


  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // scroll logic (same)
  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const lastY = lastScrollYRef.current;
        const landingPageHeight = window.innerHeight;

        if (currentScrollY < landingPageHeight) {
          if (!showNavbar) setShowNavbar(true);
        } else {
          const delta = Math.abs(currentScrollY - lastY);
          if (delta > THRESHOLD) {
            if (currentScrollY > lastY && showNavbar) setShowNavbar(false);
            else if (currentScrollY < lastY && !showNavbar) setShowNavbar(true);
          }
        }

        lastScrollYRef.current = currentScrollY;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showNavbar]);

  return (
    <nav
      className={`sticky top-0 z-50 px-4 sm:px-6 lg:px-10 pt-4 text-white transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <a href="/" className="text-2xl font-bold text-white">
              <img src={logo} alt="Logo" className="h-7 opacity-95" />
            </a>
          </div>

          {/* Desktop Nav */}
          <ul
            className="hidden lg:flex items-center gap-3 rounded-full px-2 py-2"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
              border: '1px solid rgba(255,255,255,0.12)',
              WebkitBackdropFilter: 'blur(12px) saturate(120%)',
              backdropFilter: 'blur(12px) saturate(120%)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
            }}
          >
            {navItems.map((item, index) => (
              <li key={index} className="text-sm uppercase tracking-[0.16em]">
                <a
                  href={item.href}
                  className="inline-flex items-center rounded-full px-4 py-2 text-zinc-200 transition-colors duration-200 hover:text-white hover:bg-white/6"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#contact"
              className="py-2 px-4 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button
              onClick={toggleNavbar}
              className="rounded-full border border-white/20 bg-black/30 p-2 backdrop-blur-md"
              aria-label="Toggle navigation menu"
            >
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-20 bg-black/95 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href} onClick={() => setMobileDrawerOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex space-x-6 mt-6">
              <a
                href="#contact"
                className="py-4 px-4 border bg-linear-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] rounded-md transition font-semibold"
              >
                Get In Touch 
              </a>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
