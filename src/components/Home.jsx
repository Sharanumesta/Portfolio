import Hero from './Hero';
// import About from 'About';
import SkillsSection from './Skills';
import Projects from './Projects';

const Home = () => {
  return (
    <>
      <Hero id="home" />
      {/* <About id="about" /> */}
      <SkillsSection id="skills" />
      <Projects id="projects" />
    </>
  );
};

export default Home;