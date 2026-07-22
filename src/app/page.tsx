// import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Expertise from "@/components/sections/Expertise/Expertise";
import Projects from "@/components/sections/Projects/Project";
import Contact from "@/components/sections/Contact/Contact";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}

      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Contact />
        {/* <section id="contact" /> */}
      </main>
    </>
  );
}
