import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <section
        id="about"
        className={`relative overflow-hidden py-24 px-6 md:px-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <motion.div
          className="max-w-5xl mx-auto flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={`text-4xl font-bold mb-6 ${
              isDark ? "text-gray-100" : "text-gray-800"
            }`}
          >
            About <span className="text-purple-500">Me</span>
          </h2>

          <p
            className={`text-lg md:text-xl leading-relaxed max-w-3xl ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Hey there! I'm{" "}
            <span
              className={`font-semibold ${
                isDark ? "text-purple-400" : "text-purple-600"
              }`}
            >
              Sharanu
            </span>
            , a passionate final-year CS student and full-stack web enthusiast.
            I specialize in building modern, responsive applications using the{" "}
            <span
              className={`font-semibold ${
                isDark ? "text-purple-400" : "text-purple-600"
              }`}
            >
              MERN stack
            </span>{" "}
            and love crafting clean, intuitive user experiences through{" "}
            <span
              className={`font-semibold ${
                isDark ? "text-purple-400" : "text-purple-600"
              }`}
            >
              UI/UX design
            </span>
            .
          </p>

          <p
            className={`text-lg md:text-xl mt-6 max-w-3xl leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I'm always eager to learn, explore new technologies, and collaborate
            with like-minded developers. Whether it's frontend magic or backend
            logic, I enjoy turning ideas into functional digital products. Let's
            build something awesome together! 🚀
          </p>
        </motion.div>
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

export default About;
