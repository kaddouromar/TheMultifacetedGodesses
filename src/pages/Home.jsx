import { Link } from "react-router-dom";
import HighlightCard from "../components/HighlightCard.jsx";
import { COLLECTIONS, MUSEUM } from "../data/collections.js";
import museum from "./assests/Museum.jpg";

export default function Home() {
  return (
    <>
      <section className="visitStrip" aria-label="Museum opening information">
        <p>
          <strong>{MUSEUM.name}</strong> · {MUSEUM.hours}
        </p>
        <Link to="/visit">Plan your visit →</Link>
      </section>

      <section className="hero homeHero">
        <div className="homeHeroGrid">
          <div className="homeHeroCopy">
            <p className="kicker">The Multifaceted Goddesses</p>
            <h1 className="title">Discover Cyprus through her goddesses.</h1>
            <p className="subtitle">
              From Chalcolithic idols to Hellenistic marble, explore three
              figures linked to the Archaeological Museum of the Paphos District.
              Rotate photogrammetry scans, read curatorial interpretation, and
              plan a visit to see the originals in person.
            </p>
            <div className="ctaRow">
              <Link className="primary" to="/collection">
                View collections
              </Link>
              <a className="secondary" href="#highlights">
                Highlights
              </a>
            </div>
          </div>

          <div
            className="homeHeroMedia"
            role="img"
            aria-label="Archaeological Museum of the Paphos District"
            style={{
              backgroundImage: `url(${museum})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </section>

      <section id="highlights" className="section">
        <h2>Highlights</h2>
        <p className="sectionLead">
          Three objects from our digital exhibition—select one to explore its 3D
          model and story.
        </p>
        <div className="highlightsGrid">
          {COLLECTIONS.map((item) => (
            <HighlightCard
              key={item.id}
              title={item.title}
              teaser={item.teaser}
              image={item.image}
              to={item.path}
            />
          ))}
        </div>
      </section>

      <section className="section aboutStrip">
        <h2>About this project</h2>
        <p>
          The Multifaceted Goddesses is a student-led digital exhibition created
          through photogrammetry and 3D web publishing. It pairs interactive
          models with interpretive writing that invites visitors to look again—at
          fertility symbols, patron goddesses, and figures of wild autonomy.
        </p>
        <p className="aboutStripCta">
          <Link to="/about-us">Meet the team →</Link>
        </p>
      </section>
    </>
  );
}
