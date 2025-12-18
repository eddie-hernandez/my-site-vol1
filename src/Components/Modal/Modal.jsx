import "./Modal.css";
import github from "../../Assets/github-icon.png";
import noted2 from "../../Assets/noted2.png";
import lerpr from "../../Assets/lerpr.png";
import movieRoyale from "../../Assets/movie-royale.png";
import simon from "../../Assets/simon.png";

export function SoftwareModal({ isSEModalOpen, closeSEModal }) {
  return (
    // CSS TERMINAL CREDIT: https://codepen.io/addyosmani/pen/avxmvN

    <div className={`modal ${isSEModalOpen ? "active" : ""}`} id="SEModal">
      <div className="fakeTerminal">
        <div className="fakeMenu">
          <div className="fakeButtons fakeClose" onClick={closeSEModal}></div>
          <div
            className="fakeButtons fakeMinimize"
            onClick={closeSEModal}></div>
          <div className="fakeButtons fakeZoom" onClick={closeSEModal}></div>
        </div>
        <div className="fakeScreen">
          <p className="line1">
            $ npm start software-engineering<span className="cursor1">_</span>
          </p>
          <p className="line2">
            When I first began working in Software Engineering, I didn't
          </p>
          <p className="line3">
            realize how naturally things would click for me. Recently, I
          </p>
          <p className="line4">
            completed a Full-Stack Software Engineering Fellowship at
          </p>
          <p className="line5">
            General Assembly. There, I challenged myself to build upon my
          </p>
          <p className="line6">
            Software Engineering knowledge and master those skills. I
          </p>
          <p className="line7">
            also created some of my favorite projects/applications to
          </p>
          <p className="line8">
            date in the fellowship! Feel free to check them out in the
          </p>
          <p className="line9">
            projects section.
            <span className="cursor2">_</span>
          </p>
          <p className="line10">
            [?] Looking to collaborate on a project/application? Contact
          </p>
          <p className="line11">
            me via the contact section and let's connect!
            <span className="cursor3">_</span>
          </p>
          <p className="line12">
            (Press any of the color buttons to exit terminal)
            <span className="cursor4">_</span>
          </p>
          <p className="line13">
            {`>`}
            <span className="cursor5">_</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function NotedModal({ isNotedModalOpen, closeNotedModal }) {
  return (
    <div
      className={`modal ${isNotedModalOpen ? "active" : ""}`}
      id="NotedModal">
      <div className="modal-box">
        <div className="modal-container">
          <span className="close" onClick={closeNotedModal}>
            &times;
          </span>
          <h2>Noted</h2>
          <div className="modal-content">
            <div className="modal-photo-container">
              <a href="https://noted.world" target="_blank" rel="noreferrer">
                <img src={noted2} alt="noted app" className="modal-photo" />
              </a>
            </div>
            <div className="modal-text-container">
              <div className="modal-description">
                <h4>
                  <i>
                    <u>About Noted:</u>
                  </i>
                </h4>
                <h6>
                  A minimal record tracker application where users can sign up
                  for an account and build a digital record collection. A user
                  is able to CRUD on the ‘record’ model with any album
                  information (release date, artist/band name, album title) and
                  its sub-document, the ‘liner note’ (album rating, ‘standout
                  track’, personal thoughts).
                </h6>
                <h6>
                  In addition to its core functionality, Noted, which is
                  currently in Version 2, now includes: the 'Standout Mix',
                  which compiles a users' 'standout tracks' into one playlist,
                  and a 'Record of the Month' feature, which provides users with
                  a handpicked album recommendation from yours truly.
                </h6>
              </div>
            </div>
            <div className="modal-links">
              <a
                href="https://github.com/eddie-hernandez/recd-recs-tracker-client"
                rel="noreferrer"
                target="_blank"
                className="link-container">
                <h6>View on Github</h6>
                <img src={github} alt="github icon" className="github-icon" />
              </a>
              <h6>&nbsp; | &nbsp;</h6>
              <a
                href="https://noted.world"
                rel="noreferrer"
                target="_blank"
                className="link-container">
                <h6>Noted Website</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LerprModal({ isLerprModalOpen, closeLerprModal }) {
  return (
    <div
      className={`modal ${isLerprModalOpen ? "active" : ""}`}
      id="LerprModal">
      <div className="modal-box">
        <div className="modal-container">
          <span className="close" onClick={closeLerprModal}>
            &times;
          </span>
          <h2>Lerpr</h2>
          <div className="modal-content">
            <div className="modal-photo-container">
              <a
                href="https://scottank.github.io/lerpr/"
                rel="noreferrer"
                target="_blank">
                <img src={lerpr} alt="lerpr app" className="modal-photo" />
              </a>
            </div>
            <div className="modal-text-container">
              <div className="modal-description">
                <h4>
                  <i>
                    <u>About Lerpr:</u>
                  </i>
                </h4>
                <h6>
                  Lerpr is an innovative sandbox application that showcases the
                  power of bézier curves in manipulating lines based on an x/y
                  grid. With its easy-to-use CRUD functionality, users can
                  create, read, update and delete their own sandboxes, allowing
                  for endless experimentation and creativity. Users also have
                  the opportunity to view and duplicate a copy of sandboxes
                  created by other Lerpr users via the community page.
                </h6>
                <h6>
                  As Lerpr's UI Designer, I created a seamless communication
                  system between client-side data input and server-side API
                  routes, ensuring that the app was highly responsive and always
                  performing at optimal levels. In addition to my technical
                  skills, I leveraged my creativity and design skills to create
                  a visually stunning and highly intuitive user interface using
                  React, JavaScript, and CSS.
                </h6>
              </div>
            </div>
            <div className="modal-links">
              <a
                href="https://github.com/ScottAnk/lerpr"
                target="_blank"
                rel="noreferrer"
                className="link-container">
                <h6>View on Github</h6>
                <img src={github} alt="github icon" className="github-icon" />
              </a>
              <h6>&nbsp; | &nbsp;</h6>
              <a
                href="https://scottank.github.io/lerpr/"
                target="_blank"
                rel="noreferrer"
                className="link-container">
                <h6>Lerpr Website</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MovieModal({ isMovieModalOpen, closeMovieModal }) {
  return (
    <div
      className={`modal ${isMovieModalOpen ? "active" : ""}`}
      id="MovieModal">
      <div className="modal-box">
        <div className="modal-container">
          <span className="close" onClick={closeMovieModal}>
            &times;
          </span>
          <h2>Movie Royale</h2>
          <div className="modal-content">
            <div className="modal-photo-container">
              <a
                href="https://movie-royale-client.onrender.com/"
                target="_blank"
                rel="noreferrer">
                <img
                  src={movieRoyale}
                  alt="movie royale app"
                  className="modal-photo"
                />
              </a>
            </div>
            <div className="modal-text-container">
              <div className="modal-description">
                <h4>
                  <i>
                    <u>About Movie Royale:</u>
                  </i>
                </h4>
                <h6>
                  Movie Royale provides a fun and hassle-free solution to the
                  age-old problem of deciding on what movie to watch for the
                  night. By creating a virtual room and sharing a unique code
                  with their friends, users can easily gather their loved ones
                  and collectively vote on a movie. To elevate the user
                  experience, Movie Royale incorporates WebSocket technology,
                  enabling users to witness real-time updates as other users
                  make movie recommendations and upvote/downvote decisions.
                </h6>
                <h6>
                  As the UI Designer for Movie Royale, I utilized React's full
                  potential to enhance user experience by designing visually
                  appealing and highly functional cards for each movie sourced
                  from our carefully selected external movie API.
                </h6>
              </div>
            </div>
            <div className="modal-links">
              <a
                href="https://github.com/ScottAnk/movie-royale"
                rel="noreferrer"
                target="_blank"
                className="link-container">
                <h6>View on Github</h6>
                <img src={github} alt="github icon" className="github-icon" />
              </a>
              <h6>&nbsp; | &nbsp;</h6>
              <a
                href="https://movie-royale-client.onrender.com/"
                rel="noreferrer"
                target="_blank"
                className="link-container">
                <h6>Movie Royale Website</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SimonModal({ isSimonModalOpen, closeSimonModal }) {
  return (
    <div
      className={`modal ${isSimonModalOpen ? "active" : ""}`}
      id="SimonModal">
      <div className="modal-box">
        <div className="modal-container">
          <span className="close" onClick={closeSimonModal}>
            &times;
          </span>
          <h2>Simon (Ambient Edition)</h2>
          <div className="modal-content">
            <div className="modal-photo-container">
              <a
                href="https://eddie-hernandez.github.io/simon-ambient-edition/"
                rel="noreferrer"
                target="_blank">
                <img src={simon} alt="simon app" className="modal-photo" />
              </a>
            </div>
            <div className="modal-text-container">
              <div className="modal-description">
                <h4>
                  <i>
                    <u>About Simon (Ambient Edition):</u>
                  </i>
                </h4>
                <h6>
                  My first-ever application is a minimal version of the popular
                  memory game "Simon". I created this front-end application in
                  order to demonstrate my proficiency in HTML, CSS, and
                  JavaScript. This version stays true to the original handheld
                  game in play, with the main caveat being the serene sound
                  effects of the colored buttons.
                </h6>
                <h6>
                  To pay my respects to my music production background, I
                  naturally created all original sounds for the game using Logic
                  Pro X. The game is currently in Version 2, and has recently
                  been updated to include an earth color theme which can be
                  switched on/off at any point. Try to make it through ten
                  levels in order to win the game!
                </h6>
              </div>
            </div>
            <div className="modal-links">
              <a
                href="https://github.com/eddie-hernandez/simon-ambient-edition"
                rel="noreferrer"
                target="_blank"
                className="link-container">
                <h6>View on Github</h6>
                <img src={github} alt="github icon" className="github-icon" />
              </a>
              <h6>&nbsp; | &nbsp;</h6>
              <a
                href="https://eddie-hernandez.github.io/simon-ambient-edition/"
                rel="noreferrer"
                target="_blank"
                className="link-container">
                <h6>Simon Website</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
