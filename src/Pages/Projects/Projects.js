import './Projects.css'
import React from 'react'
import noted from '../../Assets/noted.png'
import lerpr from '../../Assets/lerpr.png'
import simon from '../../Assets/simon.png'
import movieRoyale from '../../Assets/movie-royale.png'

export default function Projects({ projectRef }) {
  return (
    <div ref={projectRef} className='page' id='projects-section'>
      <h1>
        <u>Projects</u>
      </h1>
      <div className='projects-container'>
        <div className='project'>
          <img src={noted} className='project-image' alt='noted-still' />
          <h2>Noted</h2>
        </div>
        <div className='project'>
        <img src={lerpr} className='project-image' alt='lerpr-still' />
        <h2>Lerpr</h2>
        </div>
        <div className='project'>
        <img src={movieRoyale} className='project-image' alt='movie-royale-still' />
          <h2>Movie Royale</h2></div>
        <div className='project'>
        <img src={simon} className='project-image' alt='simon-still' />
          <h2>Simon (Ambient Edition)</h2>
          </div>
      </div>
    </div>
  )
}
