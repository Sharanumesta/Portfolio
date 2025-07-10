import { motion } from "framer-motion";

const ProjectCard = ({ title, description, tags = [], imageUrl }) => {
  return (
    <motion.div 
      className="bg-black/50 rounded-xl overflow-hidden border border-purple-900/50 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/30 transition-all duration-300"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-purple-400 mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full"
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