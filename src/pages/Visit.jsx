import { MUSEUM } from "../data/collections.js";

export default function Visit() {
  const museumMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    MUSEUM.mapQuery
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <section className="section visitIntro">
        <h2>Plan your visit</h2>
        <p className="sectionLead">
          Explore the physical collection that inspired{" "}
          <strong>The Multifaceted Goddesses</strong>. The originals and wider
          galleries are on display at the {MUSEUM.name}.
        </p>
      </section>

      <section id="map" className="section visitMapSection" aria-labelledby="map-heading">
        <h2 id="map-heading">Museum map</h2>
        <div className="visitMap">
          <iframe
            title="Paphos Museum Map"
            width="100%"
            height="100%"
            src={museumMapUrl}
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          />
        </div>
      </section>

      <section
        id="hours"
        className="section visitDetails"
        aria-labelledby="hours-heading"
      >
        <h2 id="hours-heading">Opening hours & location</h2>
        <div className="visitDetailsGrid">
          <div>
            <h3 className="visitDetailLabel">Location</h3>
            <p>{MUSEUM.address}</p>
          </div>
          <div>
            <h3 className="visitDetailLabel">Opening hours</h3>
            <p>{MUSEUM.hours}</p>
          </div>
        </div>
      </section>
    </>
  );
}
