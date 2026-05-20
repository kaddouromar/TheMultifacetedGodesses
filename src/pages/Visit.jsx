import { MUSEUM } from "../data/collections.js";
import MapComponent from "../MapComponents.jsx";

export default function Visit() {
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
        <h2 id="map-heading">Sites on Cyprus</h2>
        <p className="sectionBody">
          Click any pin to learn about the site. Scroll or pinch to zoom.
        </p>
        <div className="visitMap">
          <MapComponent />
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
