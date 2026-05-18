import { Link } from "react-router-dom";

export default function HighlightCard({ title, teaser, image, to }) {
  return (
    <Link className="highlightCard" to={to}>
      <div
        className="highlightCardImage"
        style={{
          backgroundImage: `url(${image})`,
        }}
        role="img"
        aria-label={title}
      />
      <div className="highlightCardBody">
        <h3>{title}</h3>
        <p>{teaser}</p>
        <span className="highlightCardCta">Explore object →</span>
      </div>
    </Link>
  );
}
