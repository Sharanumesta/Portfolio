import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowUp, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion, useScroll, useSpring } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import AboutPage from './pages/AboutPage';
// import ProjectsPage from './pages/ProjectsPage';
// import SkillsPage from './pages/SkillsPage';
// import NotFound from './pages/NotFound';
import Footer from "./components/Footer";

const App = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Smooth scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Add cursor effect
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", moveCursor);

    // Add hover effects
    const hoverElements = document.querySelectorAll("a, button, .hover-effect");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-hover");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-hover");
      });
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans antialiased">
        {/* Scroll progress indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-purple-500 z-50 origin-left"
          style={{ scaleX }}
        />

        {/* Custom cursor (hidden on mobile) */}
        <style jsx global>{`
          .custom-cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid #a855f7;
            border-radius: 50%;
            pointer-events: none;
            transform: translate(-50%, -50%);
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.2s ease, width 0.3s ease, height 0.3s ease;
          }
          .cursor-hover {
            transform: translate(-50%, -50%) scale(1.5);
            background-color: #a855f7;
            opacity: 0.5;
          }
          @media (pointer: coarse) {
            .custom-cursor {
              display: none;
            }
          }
        `}</style>

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

        <Footer />

        {/* Floating action button - Only shown on home page sections */}
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                className="fixed bottom-8 right-8 z-40"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
              >
                <motion.button
                  onClick={scrollToTop}
                  className="w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30 transition-all hover:scale-110"
                  whileHover={{ y: -2 }}
                  aria-label="Back to top"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
