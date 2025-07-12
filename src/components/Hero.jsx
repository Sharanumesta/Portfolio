import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.className = isDark ? "dark" : "";
  }, [theme]);

  return (
    <>
      <section
        id="home"
        className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
          isDark
            ? "bg-gradient-to-b from-gray-900 to-purple-900/10"
            : "" // Changed to solid purple-100 background for light mode
        }`}
      >
        <div className="text-center max-w-4xl">
          <motion.h1
            className={`text-4xl md:text-6xl font-bold mb-6 ${
              isDark ? "text-gray-50" : "text-gray-800"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm{" "}
            <span className="text-purple-500 dark:text-purple-500">
              Sharanu
            </span>
          </motion.h1>

          <motion.div
            className={`text-xl md:text-3xl mb-8 h-12 ${
              isDark ? "text-purple-300" : "text-purple-600" // Darkened purple for better contrast
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000,
                "UI/UX Enthusiast",
                1000,
                "React Specialist",
                1000,
                "Creative Problem Solver",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg ${
                isDark
                  ? "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-500/30"
                  : "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-500/30" // Darker purple for better contrast
              }`}
            >
              <a href="#contact">Contact Me</a>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`font-bold py-3 px-8 rounded-full transition-all duration-300 border-2 shadow-lg ${
                isDark
                  ? "border-purple-400 hover:bg-purple-400/10 text-purple-300 shadow-purple-500/10"
                  : "border-purple-600 hover:bg-purple-600/10 text-purple-700 shadow-purple-400/10" // Darker border for better contrast
              }`}
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </section>
      {/* Divider */}
      <div
        className={`h-px w-full my-1 ${
          isDark
            ? "bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            : "bg-gradient-to-r from-transparent via-purple-400 to-transparent"
        }`}
      />
    </>
  );
};

export default Hero;
