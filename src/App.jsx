import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import "./index.css"

function App() {

  return (
    <div className="montserrat-font bg-gradient-to-b from-blue-950 to-sky-950 text-white">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
