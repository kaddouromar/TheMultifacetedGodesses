import { MUSEUM } from "../data/collections.js";
import MapComponent from "../MapComponents.jsx";

export default function Visit() {
  return (
    <>
      <section className="section visitIntro">
        <h2>Plan your visit</h2>
        <p className="sectionLead">
          The goddesses in this exhibition were worshipped across the whole island of Cyprus —
          from coastal sanctuaries to civic centres to wild hilltops. This map brings together
          the key sites connected to the objects and stories you have explored here.
        </p>
        <p className="sectionLead">
          The originals and wider museum galleries are on display at the {MUSEUM.name},
          but the landscape they came from stretches far beyond any single building.
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
        <h2 id="hours-heading">Archaeological Museum of Paphos</h2>
        <p className="sectionBody">
          The museum is the best starting point for a visit — it holds the objects that directly
          inspired this exhibition, including the marble torso of Artemis from Nea Paphos.
        </p>
        <div className="visitDetailsGrid">
          <div>
            <h3 className="visitDetailLabel">Address</h3>
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
