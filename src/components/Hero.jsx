import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-purple-900/10 px-4">
      <div className="text-center max-w-4xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-purple-400">Sharanu</span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-3xl text-purple-300 mb-8 h-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* <TypeAnimation
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
          /> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30">
            Contact Me
          </button>
          <button className="bg-transparent border-2 border-purple-500 hover:bg-purple-500/10 text-purple-400 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/10">
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
