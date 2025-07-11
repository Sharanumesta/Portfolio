import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-black py-24 px-6 md:px-20">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-white-500 mb-6">About <span className=" text-purple-500 ">Me</span></h2>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
          Hey there! I'm <span className="text-purple-400 font-semibold">Sharanu</span>, a passionate final-year CS student and full-stack web enthusiast.
          I specialize in building modern, responsive applications using the{" "}
          <span className="text-purple-400 font-semibold">MERN stack</span> and love crafting clean, intuitive user experiences through{" "}
          <span className="text-purple-400 font-semibold">UI/UX design</span>.
        </p>

        <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-3xl leading-relaxed">
          I'm always eager to learn, explore new technologies, and collaborate with like-minded developers. Whether it’s frontend magic or backend logic,
          I enjoy turning ideas into functional digital products. Let’s build something awesome together! 🚀
        </p>
      </motion.div>
    </section>
  );
};

export default About;
