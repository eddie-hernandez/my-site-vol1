import './Projects.css'
import { useState } from 'react'
import {
  NotedModal,
  LerprModal,
  MovieModal,
  SimonModal,
} from '../../Components/Modal/Modal'

// image assets
import noted from '../../Assets/noted.png'
import lerpr from '../../Assets/lerpr.png'
import simon from '../../Assets/simon.png'
import movieRoyale from '../../Assets/movie-royale.png'

export default function Projects({ projectRef }) {
  // Noted Modal
  const [isNotedModalOpen, setIsNotedModalOpen] = useState(false)

  function openNotedModal() {
    setIsNotedModalOpen(true)
  }

  function closeNotedModal() {
    setIsNotedModalOpen(false)
  }

  // Lerpr Modal
  const [isLerprModalOpen, setIsLerprModalOpen] = useState(false)

  function openLerprModal() {
    setIsLerprModalOpen(true)
  }

  function closeLerprModal() {
    setIsLerprModalOpen(false)
  }

  // Movie Royale Modal
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false)

  function openMovieModal() {
    setIsMovieModalOpen(true)
  }

  function closeMovieModal() {
    setIsMovieModalOpen(false)
  }

  // Simon Modal
  const [isSimonModalOpen, setIsSimonModalOpen] = useState(false)

  function openSimonModal() {
    setIsSimonModalOpen(true)
  }

  function closeSimonModal() {
    setIsSimonModalOpen(false)
  }

  return (
    <div ref={projectRef} className='page' id='projects-section'>
      <h1>
        <u>Projects</u>
      </h1>
      <div className='projects-text-container'>
        <h6 className='projects-text'>
          Throughout my career as a software engineer, I have designed and
          developed numerous projects both collaboratively and independently.
          With each project, I have pushed myself to learn new programming
          languages, frameworks, and developer tools.
        </h6>
        <h6 className='projects-text'>
          The following applications highlight some of my favorites of the
          projects I've created:
        </h6>
      </div>
      <div className='projects-container'>
        <div className='project' id='noted' onClick={openNotedModal}>
          <img src={noted} className='project-image' alt='noted-still' />
          <h3>Noted</h3>
        </div>
        <div className='project' id='lerpr' onClick={openLerprModal}>
          <img src={lerpr} className='project-image' alt='lerpr-still' />
          <h3>Lerpr</h3>
        </div>
        <div className='project' id='movie-royale' onClick={openMovieModal}>
          <img
            src={movieRoyale}
            className='project-image'
            alt='movie-royale-still'
          />
          <h3>Movie Royale</h3>
        </div>
        <div className='project' id='simon' onClick={openSimonModal}>
          <img src={simon} className='project-image' alt='simon-still' />
          <h3>Simon</h3>
        </div>
      </div>
      <NotedModal
        isNotedModalOpen={isNotedModalOpen}
        closeNotedModal={closeNotedModal}
      />
      <LerprModal
        isLerprModalOpen={isLerprModalOpen}
        closeLerprModal={closeLerprModal}
      />
      <MovieModal
        isMovieModalOpen={isMovieModalOpen}
        closeMovieModal={closeMovieModal}
      />
      <SimonModal
        isSimonModalOpen={isSimonModalOpen}
        closeSimonModal={closeSimonModal}
      />
    </div>
  )
}
