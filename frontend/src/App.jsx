import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import { useEffect } from "react"
import Skills from "./components/skills"
import Projects from "./components/Projects"
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
  </>  
  )
}
export default App