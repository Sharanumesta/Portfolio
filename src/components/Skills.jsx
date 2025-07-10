import { motion } from "framer-motion";

const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-purple-300 font-medium">{name}</span>
        <span className="text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-300"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "UI/UX Design", level: 75 },
    { name: "Node.js", level: 70 },
  ];

  return (
    <section className="py-20 px-4 md:px-20 bg-gradient-to-b from-black to-purple-900/10">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My <span className="text-purple-400">Skills</span>
      </motion.h2>
      
      <div className="max-w-2xl mx-auto">
        {skills.map((skill, index) => (
          <SkillBar 
            key={index}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;