import './Resume.css'

import React from 'react'

export default function Resume({ resumeRef }) {
  return (
    <div ref={resumeRef} className='page' id='resume-section'>
      <h1>
        <u>Resume</u>
      </h1>
      <iframe
        src="https://drive.google.com/file/d/1IN4s-xPlBDl2Q53bM9pMMDBtBZFigw2U/preview"
        className='resume'
        title='resume'
      ></iframe>
    </div>
  )
}