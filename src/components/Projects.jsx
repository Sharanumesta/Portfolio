import ProjectCard from "./ProjectCard";

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
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-black text-white px-4 md:px-20">
      <h2 className="text-3xl font-bold text-white mb-15 text-center">
        My <span className="text-purple-400">Projects</span>
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {dummyProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
