import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isContactActive = activeSection === "contact";
  const { scrollYProgress } = useScroll();
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) {
      return;
    }

    let rafId = 0;

    const updateActiveSection = () => {
      const scrollMarker = window.scrollY + 140;
      const firstTop = sections[0].offsetTop - 120;

      if (window.scrollY < firstTop) {
        setActiveSection("");
        return;
      }

      let currentSection = sections[0].id;

      for (const section of sections) {
        if (scrollMarker >= section.offsetTop) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    const handleScrollOrResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 card-glass shadow-lg shadow-black/20"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={() => {
              setActiveSection("");
              setIsOpen(false);
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="font-display text-xl font-bold text-gradient"
          >
            Ali.
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 rounded-full px-3 py-2 bg-secondary/35 border border-border/60 backdrop-blur-sm">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setActiveSection(item.href.replace("#", ""))}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeSection === item.href.replace("#", "") && (
                  <motion.span
                    layoutId="desktop-nav-active"
                    transition={{ type: "spring", stiffness: 340, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-primary"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setActiveSection("contact")}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={`text-sm py-2 px-4 ml-2 rounded-lg transition-all duration-300 ${
                isContactActive
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 ring-2 ring-primary/40"
                  : "btn-primary"
              }`}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <motion.div
        style={{ scaleX: smoothScrollProgress }}
        className="h-[2px] w-full origin-left bg-primary/80"
      />

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden card-glass border-t border-border"
          >
            <div className="section-container py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.href.replace("#", ""));
                    setIsOpen(false);
                  }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`rounded-lg px-3 py-2.5 transition-colors ${
                    activeSection === item.href.replace("#", "")
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => {
                  setActiveSection("contact");
                  setIsOpen(false);
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`text-center text-sm py-2 mt-2 rounded-lg transition-all duration-300 ${
                  isContactActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 ring-2 ring-primary/40"
                    : "btn-primary"
                }`}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
