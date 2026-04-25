import { Link } from "react-router-dom";

export default function Collection() {
  return (
    <section className="section">
      <h2>Collections</h2>
      <p>Choose a collection to explore.</p>

      <div className="collectionGrid">
        <Link className="collectionCard" to="/collection/the-primal-origin">
          <h3>The Primal Origin</h3>
          <div className="collectionImage collectionImage--primal" />
        </Link>

        <Link className="collectionCard" to="/collection/the-divine-transition">
          <h3>The Divine Transition</h3>
          <div className="collectionImage collectionImage--divine" />
        </Link>

        <Link className="collectionCard" to="/collection/the-diverse-identities">
          <h3>The Diverse Identities</h3>
          <div className="collectionImage collectionImage--diverse" />
        </Link>
      </div>
    </section>
  );
}

