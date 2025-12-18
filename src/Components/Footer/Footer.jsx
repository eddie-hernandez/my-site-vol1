import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="nav-link">
          <h5>
            <a
              href="https://linkedin.com/in/edhz/"
              target="_blank"
              rel="noreferrer">
              LinkedIn
            </a>
          </h5>
        </div>
        <div className="nav-link">
          <h5>
            <a
              href="https://github.com/eddie-hernandez"
              target="_blank"
              rel="noreferrer">
              GitHub
            </a>
          </h5>
        </div>
        <div className="nav-link">
          <h5>
            <a
              href="https://instagram.com/personal.rebrand/"
              target="_blank"
              rel="noreferrer">
              Instagram
            </a>
          </h5>
        </div>
        <div className="nav-link">
          <h5>
            <a
              href="https://dusterlizzie.bandcamp.com/"
              target="_blank"
              rel="noreferrer">
              Bandcamp
            </a>
          </h5>
        </div>
        <div className="nav-link">
          <h5>
            <a
              href="https://www.mixcloud.com/dj_lobster/"
              target="_blank"
              rel="noreferrer">
              Mixcloud
            </a>
          </h5>
        </div>
      </div>
      <div style={{ textAlign: "center", fontWeight: "normal" }}>
        <p>Copyright 2023 &copy; Eddie Hernandez</p>
      </div>
    </div>
  );
}
