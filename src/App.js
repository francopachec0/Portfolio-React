import { About } from "./components/About";
import Contact from "./components/Contact";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { SocialMedia } from "./components/SocialMedia";
import { SoftSkills } from "./components/SoftSkills";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <SoftSkills />
      <Projects />
      <Contact />
      <SocialMedia />
    </div>
  );
}

export default App;
