import Hero from "../components/Hero";
import About from "../components/About";
// import Skills from "../components/Skills";
import DataProjects from "./data-projects/page";
import WebProjects from "./web-projects/page";
import Services from "./services/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <Skills /> */}
      <WebProjects />
      <DataProjects />
      <Services />
      <Contact />
    </>
  );
}
