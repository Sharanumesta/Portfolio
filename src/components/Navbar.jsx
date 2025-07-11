import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return (
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });
  const { scrollY } = useScroll();

  // Scroll behavior
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < lastScrollY || latest < 100) {
      setHidden(false);
    } else if (latest > 100 && latest > lastScrollY + 15) {
      setHidden(true);
    }
    setLastScrollY(latest);
  });

  // Toggle dark class
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Skills", "Projects", "Resume", "Contact"];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 ${
        scrolled ? "bg-black/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      <div className="h-20 flex items-center justify-between md:px-5 max-w-7xl mx-auto p-4">
        {/* Logo */}
        <motion.div
          className="text-purple-500 font-bold text-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-3xl">&lt;</span>
          <span className="text-2xl">SHARANU /</span>
          <span className="text-3xl">&gt;</span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              className="text-gray-300 font-medium relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition-colors duration-300"
              >
                {item}
              </a>
              <motion.div className="absolute bottom-0 left-0 h-0.5 bg-purple-500 w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
            </motion.li>
          ))}

          {/* Dark/Light Mode Button (Desktop) */}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Toggle Dark Mode"
            >
              <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                size="lg"
                color={darkMode ? "#facc15" : "#4b5563"}
              />
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <motion.div
          className="md:hidden cursor-pointer z-50 flex items-center space-x-4"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {/* Mobile Theme Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setDarkMode(!darkMode);
            }}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
            aria-label="Toggle Dark Mode"
          >
            <FontAwesomeIcon
              icon={darkMode ? faSun : faMoon}
              size="lg"
              color={darkMode ? "#facc15" : "#4b5563"}
            />
          </button>

          {/* Hamburger */}
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            size="2x"
            color="#a855f7"
          />
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm pt-20 z-40"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
            >
              <motion.ul className="flex flex-col items-center justify-center h-full space-y-10">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item}
                    className="text-purple-400 font-semibold text-2xl relative group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => setIsOpen(false)}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-purple-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                    {/* Underline */}
                    <div className="absolute bottom-0 left-0 h-0.5 bg-purple-500 w-0 group-hover:w-full transition-all duration-1000 ease-in-out" />
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
