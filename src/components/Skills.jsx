import { motion } from "framer-motion";
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

const Category = ({ title, list }) => (
  <motion.div
    className="h-48 flex flex-col justify-start bg-purple-900/10 border border-purple-700/40 rounded-2xl p-6 backdrop-blur-md shadow-md relative overflow-hidden transform transition-transform duration-500 hover:scale-105"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{
      boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.4)",
      transition: { type: "spring", stiffness: 300 },
    }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {/* Background highlight on hover */}
    <motion.div
      className="absolute inset-0 bg-purple-900/10 z-0"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 0.2 }}
      transition={{ duration: 0.3 }}
    />

    <h3 className="text-purple-400 text-xl font-semibold mb-8 text-center relative z-10">
      {title}
    </h3>
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300 relative z-10">
      {list.map((skill, idx) => (
        <motion.li
          key={idx}
          className="flex items-center gap-2 hover:text-purple-300"
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 400 },
          }}
        >
          <motion.span className="text-xl" whileHover={{ rotate: 10 }}>
            {skill.icon}
          </motion.span>
          {skill.name}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-20 bg-gradient-to-b from-black to-purple-900/10 "
    >
      <motion.h2
        className="text-4xl font-bold text-center text-white mb-16"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Tech <span className="text-purple-400">Stack</span>
      </motion.h2>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
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
  );
};

export default Skills;
