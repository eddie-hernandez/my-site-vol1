import React from 'react'
import './Home.css'

export default function Home({ topRef }) {
  return (
    <>
      <div ref={topRef} className='homepage' id='landing-page'>
        <div className='home-container'>
          <h1>Eddie Hernandez</h1>
          <h4>Full-Stack Software Engineer</h4>
          <h4>Web Developer</h4>
          <h4>UI Designer</h4>
        </div>
      </div>
    </>
  )
}
