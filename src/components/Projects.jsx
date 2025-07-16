import ProjectCard from "./ProjectCard";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const dummyProjects = [
  {
    title: "Comic Book Inventory Management",
    description: "Backend system for comic book e-commerce with full CRUD operations. Features search, pagination, and filtering with MongoDB.",
    overview: "A powerful backend engine that brings comic collections to life! Seamlessly manage thousands of titles with blazing-fast searches, intuitive categorization, and robust inventory controls. Perfect for collectors and store owners alike, this system transforms chaotic collections into perfectly organized digital archives.",
    tags: ["Node.js", "Express", "MongoDB", "REST API", "Postman"],
    imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820",
    githubUrl: "https://github.com/Sharanumesta/comic-book-inventory",
    demoUrl: "https://comic-inventory-demo.vercel.app"
  },
  {
    title: "Leaderboard UI (Frontend)",
    description: "Interactive leaderboard with real-time updates and point claiming. Integrated with backend API for live rankings.",
    overview: "A dynamic, eye-catching leaderboard that turns competition into an exhilarating experience! Watch as rankings update in real-time with smooth animations. Perfect for gaming platforms or educational apps, it transforms dry statistics into an engaging visual spectacle that motivates users to climb to the top!",
    tags: ["React", "Bootstrap", "Axios", "SweetAlert2", "React Router"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    githubUrl: "https://github.com/Sharanumesta/Leaderboard-client",
    demoUrl: "https://leaderboard-sharanu.netlify.app/"
  },
  {
    title: "Portfolio Website",
    description: "Modern personal portfolio with dark/light mode toggle. Showcases projects, skills and contact information.",
    overview: "A stunning digital showcase that leaps off the screen! This portfolio combines sleek aesthetics with buttery-smooth animations to present your work in the most captivating light. The magical dark/light mode transition creates an unforgettable first impression that keeps visitors engaged and exploring.",
    tags: ["React", "Framer Motion", "Tailwind"],
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
    githubUrl: "https://github.com/Sharanumesta/Portfolio",
    demoUrl: "https://portfolio-sharanu.netlify.app/"
  },
  // {
  //   title: "Task Manager",
  //   description: "Productivity app with drag-and-drop interface. Features task filtering and localStorage persistence.",
  //   overview: "Transform your workflow with this intuitive task wizard! Glide through your to-dos with satisfying drag-and-drop interactions that make organization feel like play. Watch productivity soar as tasks complete themselves with delightful animations and clever categorization magic!",
  //   tags: ["React", "Drag & Drop", "LocalStorage"],
  //   imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
  //   githubUrl: "https://github.com/yourusername/task-manager",
  //   demoUrl: "https://task-manager-demo.vercel.app"
  // },
  // {
  //   title: "E-commerce Platform",
  //   description: "Complete online store with product catalog and cart. Includes search and category filtering.",
  //   overview: "A shopping experience so smooth it feels like retail therapy! Browse beautifully presented products with instant search results and buttery-smooth transitions. The cart remembers your every whim, making checkout a breeze. Watch as products practically jump into your cart with delightful micro-interactions!",
  //   tags: ["React", "Node.js", "MongoDB"],
  //   imageUrl: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
  //   githubUrl: "https://github.com/yourusername/ecommerce-platform",
  //   demoUrl: "https://ecommerce-demo.vercel.app"
  // },
  // {
  //   title: "Recipe Finder",
  //   description: "Application for discovering recipes based on available ingredients.",
  //   overview: `Your culinary fairy godmother in app form! Wave goodbye to "what should I cook?" dilemmas as this magical tool transforms random ingredients into gourmet inspiration. Watch in awe as it conjures up perfect recipes from your pantry, complete with stunning food photography and step-by-step wizardry!`,
  //   tags: ["React", "API", "Material UI"],
  //   imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  //   githubUrl: "https://github.com/yourusername/recipe-finder",
  //   demoUrl: "https://recipe-finder-demo.vercel.app"
  // }
];
const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
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

export default Projects;
