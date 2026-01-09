
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Aboutme from "./Components/Aboutme";
import Myskills from "./Components/Myskills";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Background from "./Components/Background";

export default function App() {
  return (
    <div className="w-full relative">
      <Background />
      <Navbar />
      <Hero />
      <Myskills />
      <Project />
      <Contact />
    </div>
  )
}