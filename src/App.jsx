import About from "./components/About"
import Contact from "./components/Contact"
import Experiences from "./components/Experiences"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Cta from "./components/cta"
import Technologies from "./components/Technologies"


function App() {

  return (
    <div className="overflow-x-hidden  antialiased selection:bg-cyan-50 selection:text-cyan-900 scroll-smooth">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="relative h-full w-full bg-black"><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>
      </div>
      
      
      <div className="container mx-auto px-5">
      <Navbar /> 
      </div>
      <div className="container mx-auto px-10 lg:px-28 ">
        <Hero />
        {/* <Technologies /> */}
        {/* <Experiences /> */}
        <section id="project">
          <Project />
        </section>
        <Cta />
        {/* <About /> */}
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default App
