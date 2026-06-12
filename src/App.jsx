
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Aboutme from "./Components/Aboutme";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Background from "./Components/Background";

export default function App() {
  return (
    <div className="w-full relative overflow-x-hidden">
      <Background />
      <Navbar />
      <Hero />
      <Project />
      <Contact />
    </div>
  )
}