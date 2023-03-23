import './Resume.css'

import React from 'react'

export default function Resume({ resumeRef }) {
  return (
    <div ref={resumeRef} className='page' id='resume-section'>
      <h1>
        <u>Resume/CV</u>
      </h1>
      <iframe
        src="https://drive.google.com/file/d/1A7ZbXJSHHNjLgRRHwypzxs-byy7k2raP/preview"
        className='resume'
        title='resume'
      ></iframe>
    </div>
  )
}