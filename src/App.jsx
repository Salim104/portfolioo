
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Aboutme from "./Components/Aboutme";
import Myskills from "./Components/Myskills";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Aboutme />
      <Myskills />
      <Project />
      <Contact />
    </div>
  )
}