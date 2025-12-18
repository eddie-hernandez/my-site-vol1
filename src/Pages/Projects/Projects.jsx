import "./Projects.css";
import { useState } from "react";
import {
  NotedModal,
  LerprModal,
  MovieModal,
  SimonModal,
} from "../../Components/Modal/Modal";

// image assets
import noted from "../../Assets/noted.png";
import lerpr from "../../Assets/lerpr.png";
import simon from "../../Assets/simon.png";
import movieRoyale from "../../Assets/movie-royale.png";

export default function Projects({ projectRef }) {
  // Noted Modal
  const [isNotedModalOpen, setIsNotedModalOpen] = useState(false);

  function openNotedModal() {
    setIsNotedModalOpen(true);
  }

  function closeNotedModal() {
    setIsNotedModalOpen(false);
  }

  // Lerpr Modal
  const [isLerprModalOpen, setIsLerprModalOpen] = useState(false);

  function openLerprModal() {
    setIsLerprModalOpen(true);
  }

  function closeLerprModal() {
    setIsLerprModalOpen(false);
  }

  // Movie Royale Modal
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);

  function openMovieModal() {
    setIsMovieModalOpen(true);
  }

  function closeMovieModal() {
    setIsMovieModalOpen(false);
  }

  // Simon Modal
  const [isSimonModalOpen, setIsSimonModalOpen] = useState(false);

  function openSimonModal() {
    setIsSimonModalOpen(true);
  }

  function closeSimonModal() {
    setIsSimonModalOpen(false);
  }

  return (
    <div ref={projectRef} className="page" id="projects-section">
      <h1>
        <u>Projects</u>
      </h1>
      <div className="projects-text-container">
        <h6 className="projects-text">
          Every project I've designed and developed I see as an opportunity for
          me to expand my horizons and push the boundaries of what is possible
          in the realm of software engineering. By continuously seeking out and
          mastering new programming languages, frameworks, and developer tools,
          I have honed my skills and expertise to become a well-rounded and
          versatile software engineer capable of tackling any challenge with
          confidence and creativity.
        </h6>
        <h6 className="projects-text">
          These are some of my most beloved software applications, some designed
          and developed independently and others in collaboration with some of
          the{" "}
          <a
            href="https://scottank.github.io/lerpr/#/team"
            className="silly-link"
            target="_blank"
            rel="noreferrer">
            brightest minds in the industry
          </a>
          :
        </h6>
      </div>
      <div className="projects-container">
        {/* <div className="project" id="petdoc" onClick={openPetDocModal}>
          <img src={petdoc} className="project-image" alt="petdoc-still" />
          <h3>PetDoc</h3>
        </div> */}
        {/* <div className="project" id="gitbrowse" onClick={openGitBrowseModal}>
          <img src={gitbrowse} className="project-image" alt="gitbrowse-still" />
          <h3>GitBrowse</h3>
        </div> */}
        <div className="project" id="noted" onClick={openNotedModal}>
          <img src={noted} className="project-image" alt="noted-still" />
          <h3>Noted</h3>
        </div>
        <div className="project" id="lerpr" onClick={openLerprModal}>
          <img src={lerpr} className="project-image" alt="lerpr-still" />
          <h3>Lerpr</h3>
        </div>
        <div className="project" id="movie-royale" onClick={openMovieModal}>
          <img
            src={movieRoyale}
            className="project-image"
            alt="movie-royale-still"
          />
          <h3>Movie Royale</h3>
        </div>
        <div className="project" id="simon" onClick={openSimonModal}>
          <img src={simon} className="project-image" alt="simon-still" />
          <h3>Simon</h3>
        </div>
      </div>
      <NotedModal
        isNotedModalOpen={isNotedModalOpen}
        closeNotedModal={closeNotedModal}
      />
      <LerprModal
        isLerprModalOpen={isLerprModalOpen}
        closeLerprModal={closeLerprModal}
      />
      <MovieModal
        isMovieModalOpen={isMovieModalOpen}
        closeMovieModal={closeMovieModal}
      />
      <SimonModal
        isSimonModalOpen={isSimonModalOpen}
        closeSimonModal={closeSimonModal}
      />
    </div>
  );
}
