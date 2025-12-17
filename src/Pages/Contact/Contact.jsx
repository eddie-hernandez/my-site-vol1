import './Contact.css'
import happytower from '../../Assets/happytower.jpg'

export default function Contact({ contactRef }) {
  return (
    <div ref={contactRef} className='page' id='contact-section'>
      <h1>
        <u>Contact</u>
      </h1>
      <div className='contact-container'>
        <div className='contact-text'>
          <h3>Get in Touch</h3>
          <h6>
          Hey! Thanks for taking the time to stop by my page.  If you're interested in learning more about my work or creative process, I'd be more than happy to share with you. Don't hesitate to reach out to me anytime – connecting with fellow creatives is one of my passions! Whether you have a specific question, want to collaborate on a project, or just feel like having a chat, I'm always excited to hear from like-minded individuals. So go ahead, shoot me a message, and let's get the conversation started! :• )
          </h6>
          <h6>You can always reach me via email at <a href='mailto:eddie.hernandez115@gmail.com' className='silly-link'>eddie.hernandez115@gmail.com</a>. Alternatively, you can find me at any of my socials via the links below. Looking forward to connecting with you!
          </h6>
        </div>
        <div>
          <img className='contact-photo' alt='happy tower' src={happytower}></img>
        </div>
      </div>
    </div>
  )
}