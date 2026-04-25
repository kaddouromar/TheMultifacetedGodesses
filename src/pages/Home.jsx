import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero homeHero">
        <div className="homeHeroGrid">
          <div className="homeHeroCopy">
            <p className="kicker">The Female Gaze of Paphos</p>
            <h1 className="title">Explore the collection.</h1>
            <p className="subtitle">
              A calm, museum-style entry point—one strong image and a clear path into
              the work.
            </p>
            <div className="ctaRow">
              <Link className="primary" to="/collection">
                View collections
              </Link>
              <a className="secondary" href="#work">
                Highlights
              </a>
            </div>
          </div>

          <div
            className="homeHeroMedia"
            role="img"
            aria-label="Featured artwork"
          />
        </div>
      </section>

      <section id="work" className="section">
        <h2>Explore collections</h2>
        <div className="cards">
          <Link className="card cardLink" to="/collection/the-primal-origin">
            <h3>The Primal Origin</h3>
          </Link>
          <Link className="card cardLink" to="/collection/the-divine-transition">
            <h3>The Divine Transition</h3>
          </Link>
          <Link className="card cardLink" to="/collection/the-diverse-identities">
            <h3>The Diverse Identities</h3>
          </Link>
        </div>
      </section>
    </>
  );
}

