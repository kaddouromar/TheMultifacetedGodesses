import { Link } from "react-router-dom";

export default function Collection() {
  return (
    <section className="section">
      <h2>Collections</h2>
      <p>Choose a collection to explore.</p>

      <div className="collectionGrid">
        <Link className="collectionCard" to="/collection/the-primal-origin">
          <h3>Lady of Lempa</h3>
          <div className="collectionImage collectionImage--primal" />
        </Link>

        <Link className="collectionCard" to="/collection/the-divine-transition">
          <h3>Aphrodite</h3>
          <div className="collectionImage collectionImage--divine" />
        </Link>

        <Link className="collectionCard" to="/collection/artemis">
          <h3>Artemis</h3>
          <div className="collectionImage collectionImage--artemis" />
        </Link>

      </div>
    </section>
  );
}

