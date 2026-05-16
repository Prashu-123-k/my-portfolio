import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
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

  const closeMobileMenu = () => setMobileDrawerOpen(false);

  const handleMobileNavClick = () => {
    closeMobileMenu();
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = mobileDrawerOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileDrawerOpen]);

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
      className={`sticky top-0 z-50 px-4 sm:px-6 lg:px-10 py-3 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 text-white transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <a href="#home" className="text-2xl font-bold text-white">
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
          <div className="lg:hidden flex items-center justify-end">
            <button
              onClick={toggleNavbar}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-md transition hover:bg-black/50 active:scale-95"
              aria-label={mobileDrawerOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileDrawerOpen}
            >
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {typeof document !== "undefined" && createPortal(
          <div className="lg:hidden">
            <div
              className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-[2px] transition-opacity duration-200 ${
                mobileDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
              onClick={closeMobileMenu}
              aria-hidden={!mobileDrawerOpen}
            />

            <div
              className={`fixed inset-x-0 top-0 z-[110] flex justify-center px-4 pt-4 transition-transform duration-300 ${
                mobileDrawerOpen ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <div className="w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#050505]/95 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400">Navigation</p>
                  <p className="mt-1 text-sm text-white/85">Jump to a section</p>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 active:scale-95"
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="max-h-[72vh] overflow-y-auto px-4 py-4">
                {navItems.map((item, index) => (
                  <li key={index} className="mb-3 last:mb-0">
                    <a
                      href={item.href}
                      onClick={handleMobileNavClick}
                      className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/3 px-4 py-4 text-base font-medium text-white transition hover:bg-white/6 active:scale-[0.99]"
                    >
                      <span>{item.label}</span>
                      <span className="text-white/35">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>,
        document.body
        )}
      </div>
    </nav>
  );
};

export default Navbar;
