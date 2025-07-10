import Hero from './Hero';
// import About from 'About';
import SkillsSection from './Skills';
import Projects from './Projects';
// import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero id="home" />
      {/* <About id="about" /> */}
      <SkillsSection id="skills" />
      <Projects id="projects" />
      {/* <Contact id="contact" /> */}
    </>
  );
};

export default Home;