import './Header.css'

export default function Header({
  isAboutActive,
  isContactActive,
  isProjectActive,
  isResumeActive,
  isTopActive,
}) {
  // testing with the top
  const top = document.getElementById('landing-page')
  const about = document.getElementById('about-section')
  const projects = document.getElementById('projects-section')
  const resume = document.getElementById('resume-section')
  const contact = document.getElementById('contact-section')

  // Scrolls to top
  function scrollToTop() {
    if (top) {
      top.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function scrollToAbout() {
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function scrollToProjects() {
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function scrollToResume() {
    if (resume) {
      resume.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function scrollToContact() {
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='navbar'>
      <div className='header'>
        <div
          className={isTopActive ? 'nav-active' : 'nav-link'}
          onClick={scrollToTop}
        >
          <h5>Home</h5>
        </div>
        <div
          className={
            isTopActive ? 'nav-link' : isAboutActive ? 'nav-active' : 'nav-link'
          }
          onClick={scrollToAbout}
        >
          <h5>About</h5>
        </div>
        <div
          className={
            isAboutActive
              ? 'nav-link'
              : isProjectActive
              ? 'nav-active'
              : 'nav-link'
          }
          onClick={scrollToProjects}
        >
          <h5>Projects</h5>
        </div>
        <div
          className={
            isProjectActive
              ? 'nav-link'
              : isResumeActive
              ? 'nav-active'
              : 'nav-link'
          }
          onClick={scrollToResume}
        >
          <h5>Resume/CV</h5>
        </div>
        <div
          className={
            isResumeActive
              ? 'nav-link'
              : isContactActive
              ? 'nav-active'
              : 'nav-link'
          }
          onClick={scrollToContact}
        >
          <h5>Contact</h5>
        </div>
      </div>
    </div>
  )
}
