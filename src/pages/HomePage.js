import About from "../components/layout/sections/aboutUs/AboutUs";
import Hero from "../components/layout/sections/hero/Hero";
import Services from "../components/layout/sections/services/Services";
import Projects from "../components/layout/sections/projects/Projects";
import WhoWeAre from "../components/layout/sections/whoWeAre/WhoWeAre";
import Contact from "../components/layout/sections/contact/Contact";
import GetInTouch from "../components/layout/sections/getInTouch/GetInTouch";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhoWeAre />
      <GetInTouch />
      <Contact />
    </>
  );
};

export default HomePage;
