import './App.css'
import { useInView } from 'react-intersection-observer'
import Header from '../Components/Header/Header'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Resume from './Resume/Resume'
import Contact from './Contact/Contact'
import Footer from '../Components/Footer/Footer'

export default function App() {
  // checks if a specific page is in view for navbar to show which page is "active"
  const { ref: topRef, inView: isTopActive } = useInView()
  const { ref: aboutRef, inView: isAboutActive } = useInView({rootMargin: '100px 0px 0px 0px'})
  const { ref: projectRef, inView: isProjectActive } = useInView()
  const { ref: resumeRef, inView: isResumeActive } = useInView()
  const { ref: contactRef, inView: isContactActive } = useInView()

  return (
    <>
      <div className='app'>
        <Home topRef={topRef} />
        <Header
          isTopActive={isTopActive}
          isAboutActive={isAboutActive}
          isProjectActive={isProjectActive}
          isContactActive={isContactActive}
          isResumeActive={isResumeActive}
        />
        <About aboutRef={aboutRef} />
        <Projects projectRef={projectRef} />
        <Resume resumeRef={resumeRef} />
        <Contact contactRef={contactRef} />
        <Footer />
      </div>
    </>
  )
}
