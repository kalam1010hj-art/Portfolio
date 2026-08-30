import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import { useEffect } from "react"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
function App(){
  console.log("App component rendered!")
  useEffect(()=>{
          console.log("App component mounted!")
          return console.log("App component Unmounted")
      },[])
  return(
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
  </>  
  )
}
export default App