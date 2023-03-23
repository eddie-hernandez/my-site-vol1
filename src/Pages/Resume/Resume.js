import './Resume.css'

import React from 'react'

export default function Resume({ resumeRef }) {
  return (
    <div ref={resumeRef} className='page' id='resume-section'>
      <h1>
        <u>Resume</u>
      </h1>
      <iframe
        src="https://drive.google.com/file/d/1-cvzRkzMahB--iepk5ScEsepm0YFDMmO/preview"
        className='resume'
        title='resume'
      ></iframe>
    </div>
  )
}