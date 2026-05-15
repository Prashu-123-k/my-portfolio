import NavBar from './components/NavBar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import SignatureIntro from './components/SignatureIntro'
import { useEffect, useRef, useState } from 'react'

const App = () => {
  const [showIntro, setShowIntro] = useState(true)
  const [isMainLive, setIsMainLive] = useState(false)
  const revealTimeoutRef = useRef(null)

  useEffect(() => {
    if (!showIntro) {
      revealTimeoutRef.current = window.setTimeout(() => {
        setIsMainLive(true)
      }, 60)
    }

    return () => {
      if (revealTimeoutRef.current) {
        window.clearTimeout(revealTimeoutRef.current)
      }
    }
  }, [showIntro])

  const handleIntroComplete = () => {
    setShowIntro(false)
  }

  return (
    <div className="relative ">
      {showIntro && <SignatureIntro onComplete={handleIntroComplete} />}

      {!showIntro && (
        <>
          <div className={`main-stage ${isMainLive ? 'main-stage-live' : 'main-stage-enter'}`}>
            <NavBar/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Testimonials/>
            <Contact/>
            <Footer/>
          </div>
        </>
      )}
    </div>
  )
}

export default App