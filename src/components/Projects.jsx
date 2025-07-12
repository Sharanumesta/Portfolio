import ProjectCard from "./ProjectCard";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const dummyProjects = [
  {
    title: "AI Image Generator",
    description: "A web app that generates realistic images from text prompts using OpenAI's DALL·E API.",
    tags: ["React", "Tailwind", "OpenAI", "Framer Motion"],
    imageUrl: "https://as1.ftcdn.net/v2/jpg/03/93/37/24/1000_F_393372407_u34qDqrJuvMZICQC0oKnKgEUi8XqVPJG.jpg",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects, skills, and contact info, with dark/light mode toggle.",
    tags: ["React", "Framer Motion", "Tailwind"],
    imageUrl: "https://as1.ftcdn.net/v2/jpg/03/93/37/24/1000_F_393372407_u34qDqrJuvMZICQC0oKnKgEUi8XqVPJG.jpg",
  },
  {
    title: "Weather Dashboard",
    description: "Responsive weather app with location search and real-time data from OpenWeatherMap API.",
    tags: ["JavaScript", "API", "Responsive UI"],
    imageUrl: "https://as1.ftcdn.net/v2/jpg/03/93/37/24/1000_F_393372407_u34qDqrJuvMZICQC0oKnKgEUi8XqVPJG.jpg",
  },
  {
    title: "Task Manager",
    description: "Task manager with drag-and-drop, filtering, and persistent local storage.",
    tags: ["React", "Drag & Drop", "LocalStorage"],
    imageUrl: "https://as1.ftcdn.net/v2/jpg/03/93/37/24/1000_F_393372407_u34qDqrJuvMZICQC0oKnKgEUi8XqVPJG.jpg",
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured online store with product filtering and cart functionality.",
    tags: ["React", "Node.js", "MongoDB"],
    imageUrl: "https://as1.ftcdn.net/v2/jpg/03/93/37/24/1000_F_393372407_u34qDqrJuvMZICQC0oKnKgEUi8XqVPJG.jpg",
  },
  {
    title: "Recipe Finder",
    description: "Application for discovering recipes based on available ingredients.",
    tags: ["React", "API", "Material UI"],
    imageUrl: "https://as1.ftcdn.net/v2/jpg/03/93/37/24/1000_F_393372407_u34qDqrJuvMZICQC0oKnKgEUi8XqVPJG.jpg",
  }
];

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section 
      id="projects" 
      className={`py-20 px-4 md:px-20 transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className={`text-3xl md:text-4xl font-bold mb-16 text-center ${
            isDark ? "text-gray-100" : "text-gray-800"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My <span className="text-purple-500">Projects</span>
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dummyProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;