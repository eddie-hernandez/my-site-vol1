import './Modal.css'
import github from '../../Assets/github-icon.png'
import noted2 from '../../Assets/noted2.png'
import lerpr from '../../Assets/lerpr.png'
import movieRoyale from '../../Assets/movie-royale.png'
import simon from '../../Assets/simon.png'

export function SoftwareModal({ isSEModalOpen, closeSEModal }) {
  return (
    // CSS TERMINAL CREDIT: https://codepen.io/addyosmani/pen/avxmvN

    <div className={`modal ${isSEModalOpen ? 'active' : ''}`} id='SEModal'>
      <div className='fakeTerminal'>
        <div className='fakeMenu'>
          <div className='fakeButtons fakeClose' onClick={closeSEModal}></div>
          <div className='fakeButtons fakeMinimize' onClick={closeSEModal}></div>
          <div className='fakeButtons fakeZoom' onClick={closeSEModal}></div>
        </div>
        <div className='fakeScreen'>
          <p className='line1'>
            $ npm start software-engineering<span className='cursor1'>_</span>
          </p>
          <p className='line2'>
            When I first began working in Software Engineering, I didn't realize how naturally things would click for me. Recently, I completed a Full-Stack Software Engineering Fellowship at General Assembly. There, I challenged myself to build upon my Software Engineering knowledge and master those skills. I also created some of my favorite projects/applications to date in the fellowship! Feel free to check them out in the projects section.
            <span className='cursor2'>_</span>
          </p>
          <p className='line3'>
            [?] Looking to collaborate on a project/application? Contact me via the contact section and let's connect! (Press any of the color buttons to exit terminal)
            <span className='cursor3'>_</span>
          </p>
          <p className='line4'>
            {`>`}<span className='cursor4'>_</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export function DesignModal({ isDesignModalOpen, closeDesignModal }) {
  return (
    <div
      className={`modal ${isDesignModalOpen ? 'active' : ''}`}
      id='DesignModal'
    >
      <div className='modal-box'>
        <div className='modal-container'>
          <span className='close' onClick={closeDesignModal}>
            &times;
          </span>
          <h1>Design</h1>
          <p>This is the content of the modal.</p>
        </div>
      </div>
    </div>
  )
}

export function NotedModal({ isNotedModalOpen, closeNotedModal }) {
  return (
    <div
      className={`modal ${isNotedModalOpen ? 'active' : ''}`}
      id='NotedModal'
    >
      <div className='modal-box'>
        <div className='modal-container'>
          <span className='close' onClick={closeNotedModal}>
            &times;
          </span>
          <h2>Noted</h2>
          <div className='modal-content'>
            <div className='modal-photo-container'>
              <a href='https://noted.world' target='_blank'>
                <img src={noted2} className='modal-photo' />
              </a>
              <div className='modal-links'>
                <a
                  href='https://github.com/eddie-hernandez/recd-recs-tracker-client'
                  target='_blank'
                  className='link-container'
                >
                  <h6>View on Github</h6>
                  <img src={github} className='github-icon' />
                </a>
                <h6>&nbsp; | &nbsp;</h6>
                <a
                  href='https://noted.world'
                  target='_blank'
                  className='link-container'
                >
                  <h6>Noted Website</h6>
                </a>
              </div>
            </div>
            <div className='modal-text-container'>
              <div className='modal-description'>
                <h4>
                  <i>
                    <u>About Noted:</u>
                  </i>
                </h4>
                <h6>
                  Noted is a record tracker application where users can sign-up
                  for an account and log any album into their record collection.
                </h6>
                <h6>
                  Users can add album details, and upon first listen, can add
                  their rating of the album, a 'standout track', and additional
                  thoughts via the 'liner notes' feature.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function LerprModal({ isLerprModalOpen, closeLerprModal }) {
  return (
    <div
      className={`modal ${isLerprModalOpen ? 'active' : ''}`}
      id='LerprModal'
    >
      <div className='modal-box'>
        <div className='modal-container'>
          <span className='close' onClick={closeLerprModal}>
            &times;
          </span>
          <h2>Lerpr</h2>
          <div className='modal-content'>
            <div className='modal-photo-container'>
              <a href='https://scottank.github.io/lerpr/' target='_blank'>
                <img src={lerpr} className='modal-photo' />
              </a>
              <div className='modal-links'>
                <a
                  href='https://github.com/ScottAnk/lerpr'
                  target='_blank'
                  className='link-container'
                >
                  <h6>View on Github</h6>
                  <img src={github} className='github-icon' />
                </a>
                <h6>&nbsp; | &nbsp;</h6>
                <a
                  href='https://scottank.github.io/lerpr/'
                  target='_blank'
                  className='link-container'
                >
                  <h6>Lerpr Website</h6>
                </a>
              </div>
            </div>
            <div className='modal-text-container'>
              <div className='modal-description'>
                <h4>
                  <i>
                    <u>About Lerpr:</u>
                  </i>
                </h4>
                <h6>
                  Lerpr is a sandbox application that demonstrates how bézier
                  curves can manipulate lines based on an x/y grid.
                </h6>
                <h6>
                  Users have the ability to CRUD their own sandboxes as well as
                  view other users' creations via the Community Sandboxes page.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function MovieModal({ isMovieModalOpen, closeMovieModal }) {
  return (
    <div
      className={`modal ${isMovieModalOpen ? 'active' : ''}`}
      id='MovieModal'
    >
      <div className='modal-box'>
        <div className='modal-container'>
          <span className='close' onClick={closeMovieModal}>
            &times;
          </span>
          <h2>Movie Royale</h2>
          <div className='modal-content'>
            <div className='modal-photo-container'>
              <a href='https://scottank.github.io/lerpr/' target='_blank'>
                <img src={movieRoyale} className='modal-photo' />
              </a>
              <div className='modal-links'>
                <a
                  href='https://github.com/ScottAnk/lerpr'
                  target='_blank'
                  className='link-container'
                >
                  <img src={github} className='github-icon' />
                  <h6>View on Github</h6>
                </a>
                <h6>&nbsp; | &nbsp;</h6>
                <a
                  href='https://scottank.github.io/lerpr/'
                  target='_blank'
                  className='link-container'
                >
                  <h6>Movie Royale Website</h6>
                </a>
              </div>
            </div>
            <div className='modal-text-container'>
              <div className='modal-description'>
                <h4>
                  <i>
                    <u>About Movie Royale:</u>
                  </i>
                </h4>
                <h6>
                  Movie Royale aims to answer the ever-dreading question: "what
                  are we watching tonight?"
                </h6>
                <h6>
                  Users can create a room, share a unique room code with their
                  friends, and together, vote on a movie to watch for a
                  hypothetical movie night.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SimonModal({ isSimonModalOpen, closeSimonModal }) {
  return (
    <div
      className={`modal ${isSimonModalOpen ? 'active' : ''}`}
      id='SimonModal'
    >
      <div className='modal-box'>
        <div className='modal-container'>
          <span className='close' onClick={closeSimonModal}>
            &times;
          </span>
          <h2>Simon (Ambient Edition)</h2>
          <div className='modal-content'>
            <div className='modal-photo-container'>
              <a
                href='https://eddie-hernandez.github.io/simon-ambient-edition/'
                target='_blank'
              >
                <img src={simon} className='modal-photo' />
              </a>
              <div className='modal-links'>
                <a
                  href='https://github.com/eddie-hernandez/simon-ambient-edition'
                  target='_blank'
                  className='link-container'
                >
                  <img src={github} className='github-icon' />
                  <h6>View on Github</h6>
                </a>
                <h6>&nbsp; | &nbsp;</h6>
                <a
                  href='https://eddie-hernandez.github.io/simon-ambient-edition/'
                  target='_blank'
                  className='link-container'
                >
                  <h6>Simon Website</h6>
                </a>
              </div>
            </div>
            <div className='modal-text-container'>
              <div className='modal-description'>
                <h4>
                  <i>
                    <u>About Simon (Ambient Edition):</u>
                  </i>
                </h4>
                <h6>
                  Simon (Ambient Edition) is a static web game made using
                  Vanilla JavaScript, HTML, and CSS. This version stays true to
                  the original handheld game in play, with the main caveat being
                  the serene sound effects of the colored buttons.
                </h6>
                <h6>
                  It was a great joy to implement my skills in music production
                  to create the soundboard for the game using Logic Pro X.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// EXAMPLE WITH EMBEDDED FUNCTIONS

// export function DevModal() {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   function openModal() {
//     setIsModalOpen(true)
//   }

//   function closeModal() {
//     setIsModalOpen(false)
//   }

//   return (
//     <div className='modal-container'>
//       <button onClick={openModal}>Open Modal</button>

//       {isModalOpen && (
//         <div className='modal-overlay'>
//           <div className='modal'>
//             <button onClick={closeModal}>Close Modal</button>
//             <h1>Modal Content</h1>
//             <p>This is the content of the modal.</p>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
