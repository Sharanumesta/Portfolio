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
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, toggleTheme } = useTheme();

  const { scrollY } = useScroll();

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isOpen) return;

    if (latest < lastScrollY || latest < 100) {
      setHidden(false);
    } else if (latest > 100 && latest > lastScrollY + 15) {
      setHidden(true);
    }
    setLastScrollY(latest);
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Skills", "Projects", "Resume", "Contact"];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 ${
        theme === "dark"
          ? scrolled
            ? "bg-gray-900/90 backdrop-blur-sm shadow-lg"
            : ""
          : "bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-200"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: hidden ? -100 : 0,
        opacity: hidden ? 0 : 1,
        transition: { type: "spring", damping: 20, stiffness: 300, mass: 0.5 },
      }}
    >
      <div className="h-20 flex items-center justify-between md:px-5 max-w-7xl mx-auto p-4">
        {/* Logo */}
        <motion.div
          className="text-purple-500 font-bold text-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
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
              className="relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 500,
                  damping: 20,
                },
              }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors duration-200 relative inline-block ${
                  theme === "dark"
                    ? "text-gray-300 hover:text-purple-400"
                    : "text-gray-700 hover:text-purple-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-purple-500 dark:bg-purple-400 w-0 group-hover:w-full transition-all duration-300 ease-out"
                  initial={{ width: 0 }}
                  animate={{ width: "0" }}
                  whileHover={{ width: "100%" }}
                />
              </a>
            </motion.li>
          ))}

          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="ml-4"
          >
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                theme === "dark"
                  ? "bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400"
                  : "bg-purple-500/10 hover:bg-purple-500/20 text-purple-600"
              }`}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
            >
              <FontAwesomeIcon
                icon={theme === "dark" ? faSun : faMoon}
                size="lg"
              />
            </button>
          </motion.li>
        </ul>

        {/* Mobile Menu Toggle */}
        <motion.div
          className={`flex items-center gap-4 ${
            isOpen ? "fixed right-4 top-4 z-50" : "md:hidden"
          }`}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              toggleTheme();
            }}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isOpen ? "hidden" : ""
            } ${
              theme === "dark"
                ? "bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400"
                : "bg-purple-500/10 hover:bg-purple-500/20 text-purple-600"
            }`}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <FontAwesomeIcon
              icon={theme === "dark" ? faSun : faMoon}
              size="lg"
            />
          </motion.button>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg ${
              isOpen
                ? "text-purple-600 dark:text-purple-400"
                : theme === "dark"
                ? "text-gray-300"
                : "text-gray-700"
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
          </motion.button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden fixed inset-0 pt-20 z-40"
              style={{
                backgroundColor:
                  theme === "dark"
                    ? "rgba(17, 24, 39, 0.98)"
                    : "rgba(255, 255, 255, 0.98)",
                backdropFilter: "blur(10px)",
              }}
              initial={{ opacity: 0, x: "100%" }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                },
              }}
              exit={{
                opacity: 0,
                x: "100%",
                transition: {
                  type: "spring",
                  damping: 30,
                  stiffness: 300,
                },
              }}
              onClick={() => setIsOpen(false)}
            >
              <motion.ul className="flex flex-col items-center justify-center h-full gap-10">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item}
                    className="relative group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: 0.1 * index,
                        type: "spring",
                        stiffness: 500,
                        damping: 20,
                      },
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`text-2xl font-semibold transition-colors duration-200 relative inline-block ${
                        theme === "dark"
                          ? "text-gray-300 hover:text-purple-400"
                          : "text-gray-700 hover:text-purple-600"
                      }`}
                    >
                      {item}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-purple-500 dark:bg-purple-400 w-0 group-hover:w-full transition-all duration-300 ease-out"
                        initial={{ width: 0 }}
                        animate={{ width: "0" }}
                        whileHover={{ width: "100%" }}
                      />
                    </a>
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
