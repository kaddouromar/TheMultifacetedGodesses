import { Link } from "react-router-dom";
import museum from "./assests/Museum.jpg";

export default function Home() {
  return (
    <>
      <section className="hero homeHero">
        <div className="homeHeroGrid">
          <div className="homeHeroCopy">
            <p className="kicker">The Multifaceted Goddesses</p>
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
            style={{
              backgroundImage: `url(${museum})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          />
        </div>
      </section>

      <section id="work" className="section">
        <h2>Explore collections</h2>
        <div className="cards">
          <Link className="card cardLink" to="/collection/the-primal-origin">
            <h3>Lady of Lempa</h3>
          </Link>
          <Link className="card cardLink" to="/collection/the-divine-transition">
            <h3>Aphrodite</h3>
          </Link>
          <Link className="card cardLink" to="/collection/artemis">
            <h3>Artemis</h3>
          </Link>
        </div>
      </section>
    </>
  );
}

