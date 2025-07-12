import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const ProjectCard = ({ title, description, tags = [], imageUrl }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div 
      className={`rounded-xl overflow-hidden border shadow-lg transition-all duration-300 ${
        isDark
          ? "bg-gray-800/50 border-purple-900/50 shadow-purple-500/10 hover:shadow-purple-500/30"
          : "bg-purple-100 border-purple-300/50 shadow-purple-400/10 hover:shadow-purple-400/20"
      }`}
      whileHover={{ y: -10 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-48 overflow-hidden m-3 rounded-xl">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-7">
        <h3 className={`text-xl font-bold mb-2 ${
          isDark ? "text-purple-400" : "text-purple-600"
        }`}>
          {title}
        </h3>
        <p className={`mb-4 ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}>
          {description}
        </p>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className={`text-xs px-3 py-1 rounded-full ${
                isDark
                  ? "bg-purple-900/50 text-purple-300"
                  : "bg-purple-300 text-purple-700"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;