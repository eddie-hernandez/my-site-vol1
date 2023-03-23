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
          Hey! Thanks for stopping by my page. If you'd like to know more about my work or process, please feel free to get in touch with me! Nothing excites me more than to connect with like-minded, creative individuals, so even if you want to just chat, I'd encourage you to shoot me a message! :• )
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