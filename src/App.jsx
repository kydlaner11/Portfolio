import About from "./components/About"
import Contact from "./components/Contact"
import Experiences from "./components/Experiences"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Technologies from "./components/Technologies"


function App() {

  return (
    <div className="overflow-x-hidden  antialiased selection:bg-cyan-50 selection:text-cyan-900 scroll-smooth">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="relative h-full w-full bg-white"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div>
      </div>
      
      
      <div className="container mx-auto px-10 lg:px-40 ">
        <Navbar /> 
        <Hero />
        <Technologies />
        <Experiences />
        <section id="project">
          <Project />
        </section>
        {/* <About /> */}
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default App
