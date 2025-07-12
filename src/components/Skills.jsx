import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { BiData } from "react-icons/bi";

const skills = [
  {
    title: "Frontend",
    list: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
      { name: "React", icon: <FaReact className="text-blue-400" /> },
    ],
  },
  {
    title: "Backend",
    list: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    ],
  },
  {
    title: "Database",
    list: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      {
        name: "MySQL",
        icon: <BiData className="text-purple-400 text-xl" />,
      },
    ],
  },
  {
    title: "Version Control & Tools",
    list: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-gray-300" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Figma", icon: <FaFigma className="text-purple-400" /> },
    ],
  },
];

const Category = ({ title, list }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const cardRef = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothRotateX = useSpring(rotateX, { damping: 15, stiffness: 150 });
  const smoothRotateY = useSpring(rotateY, { damping: 15, stiffness: 150 });

  const maxTilt = 15;
  const perspective = 1000;
  const responseFactor = 0.7;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -maxTilt * responseFactor;
    const tiltY = ((x - centerX) / centerX) * maxTilt * responseFactor;

    rotateX.set(tiltX);
    rotateY.set(tiltY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group h-auto md:h-48 flex flex-col justify-start rounded-2xl p-6 backdrop-blur-md shadow-md relative overflow-hidden border transition-colors duration-300 ${
        isDark
          ? "bg-purple-900/10 border-purple-700/40"
          : "bg-white/90 border-purple-300/40"
      }`}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformPerspective: perspective,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { type: "spring", damping: 15, stiffness: 100 },
      }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      whileTap={{ scale: 0.98 }}
    >
      <h3
        className={`text-xl font-semibold mb-8 text-center relative z-10 ${
          isDark ? "text-purple-400" : "text-purple-600"
        }`}
      >
        {title}
      </h3>

      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
        {list.map((skill, idx) => (
          <motion.li
            key={idx}
            className={`flex items-center gap-2 cursor-default ${
              isDark
                ? "text-gray-300 hover:text-purple-300"
                : "text-gray-700 hover:text-purple-600"
            }`}
            whileHover={{
              scale: 1.05,
              x: 3,
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 10,
              },
            }}
          >
            <motion.span
              className={`text-xl ${
                isDark
                  ? skill.icon.props.className?.includes("text-")
                    ? skill.icon.props.className
                    : "text-gray-400"
                  : skill.icon.props.className?.includes("text-")
                  ? skill.icon.props.className.replace(
                      /text-(.*?)-(\d+)/,
                      (match, color, shade) =>
                        `text-${color}-${Math.min(parseInt(shade) + 200)}`
                    )
                  : "text-gray-500"
              }`}
              whileHover={{
                rotate: 15,
                scale: 1.2,
                transition: { type: "spring", stiffness: 400 },
              }}
            >
              {skill.icon}
            </motion.span>
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <section
        id="skills"
        className={`py-24 px-6 md:px-20 transition-colors duration-300 ${
          isDark
            ? "bg-gradient-to-b from-gray-900 to-purple-900/10"
            : "bg-gradient-to-b from-gray-50 to-purple-50"
        }`}
      >
        <motion.h2
          className={`text-4xl font-bold text-center mb-16 ${
            isDark ? "text-white" : "text-gray-800"
          }`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tech <span className="text-purple-500">Stack</span>
        </motion.h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto my-auto">
          {skills.map((category, index) => (
            <div
              key={index}
              className={
                skills.length % 2 !== 0 && index === skills.length - 1
                  ? "md:col-span-2 md:w-1/2 mx-auto"
                  : ""
              }
            >
              <Category title={category.title} list={category.list} />
            </div>
          ))}
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

export default Skills;
