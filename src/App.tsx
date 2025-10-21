import { useState, useEffect } from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Navigation from "./components/Navigation"

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  return (
    <div className="min-h-screen">
      <Navigation isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
