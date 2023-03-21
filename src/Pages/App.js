import './App.css'
import { useInView } from 'react-intersection-observer'
import Header from '../Components/Header/Header'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Resume from './Resume/Resume'
import Contact from './Contact/Contact'

export default function App() {
  // checks if a specific page is in view for navbar to show which page is "active"
  const { ref: topRef, inView: isTopActive } = useInView()
  const { ref: aboutRef, inView: isAboutActive } = useInView()
  const { ref: projectRef, inView: isProjectActive } = useInView()
  const { ref: resumeRef, inView: isResumeActive } = useInView()
  const { ref: contactRef, inView: isContactActive } = useInView()

  return (
    <div className='app'>
      <Header
        isTopActive={isTopActive}
        isAboutActive={isAboutActive}
        isProjectActive={isProjectActive}
        isContactActive={isContactActive}
        isResumeActive={isResumeActive}
      />
      <div className='app'>
        <Home topRef={topRef} />
        <About aboutRef={aboutRef} />
        <Projects projectRef={projectRef} />
        <Resume resumeRef={resumeRef} />
        <Contact contactRef={contactRef} />
      </div>
    </div>
  )
}
