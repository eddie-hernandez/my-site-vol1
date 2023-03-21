import React from 'react'
import Footer from '../../Components/Footer/Footer'
import './Contact.css'

export default function Contact({ contactRef }) {
  return (
    <div ref={contactRef} className='contact-page' id='contact-section'>
      <h1>
        <u>Contact</u>
      </h1>
      <h2>This is another page</h2>
      <h2>to demonstrate</h2>
      <h2>going on another page</h2>
      <h2>on my website</h2>
      <h2>with the headers</h2>
      <h2>and the footers</h2>
      <h2>still showing up at the top</h2>
      <h2>as people are able to navigate</h2>
      <Footer />
    </div>
  )
}
