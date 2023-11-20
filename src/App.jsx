import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Exp from "./components/Exp";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div className=" mx-[6%] md:ml-[90px] md:mr-[80px] lg:ml-[140px] lg:mr-[115px] flex flex-col gap-32 md:gap-44 lg:gap-52">
        <Hero />
        <About />
        <Exp />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
