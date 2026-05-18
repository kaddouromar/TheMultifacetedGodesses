import { Link } from "react-router-dom";
import { COLLECTIONS } from "../data/collections.js";

export default function Collection() {
  return (
    <section className="section">
      <h2>Discover the collection</h2>
      <p className="sectionLead">
        Rotate each 3D model and read the interpretation beside it. All objects
        are drawn from the heritage of Cyprus and the Paphos region.
      </p>

      <div className="collectionGrid">
        {COLLECTIONS.map((item) => (
          <Link key={item.id} className="collectionCard" to={item.path}>
            <h3>{item.title}</h3>
            <div
              className={`collectionImage ${item.imageClass}`}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              role="img"
              aria-label={item.title}
            />
            <p className="collectionTeaser">{item.teaser}</p>
            <span className="highlightCardCta">Explore object →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
