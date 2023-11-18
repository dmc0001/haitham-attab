import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Exp from "./components/Exp"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  return (
    <>
       <Navbar />
       <div className="ml-[140px] mr-[115px] flex flex-col gap-52">
       <Hero />
       <About/>
       <Exp/>
       <Projects/>
       <Contact/>

       </div>
       
    </>
  )
}

export default App
