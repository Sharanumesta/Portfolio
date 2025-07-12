import { motion } from "framer-motion";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

const sectionAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Home = () => {
  return (
    <>
      <motion.div
        {...sectionAnimation}
        viewport={{ once: true }}
      >
        <Hero />
      </motion.div>

      <motion.div
        {...sectionAnimation}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>

      <motion.div
        {...sectionAnimation}
        viewport={{ once: true }}
      >
        <Skills />
      </motion.div>

      <motion.div
        {...sectionAnimation}
        viewport={{ once: true }}
      >
        <Projects />
      </motion.div>
    </>
  );
};

export default Home;
