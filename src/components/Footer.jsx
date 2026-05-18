import { Link } from "react-router-dom";
import { MUSEUM } from "../data/collections.js";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerGrid">
        <div className="footerCol">
          <p className="footerBrand">The Multifaceted Goddesses</p>
          <p className="footerText">
            A digital exhibition exploring goddess figures from Cyprus through
            photogrammetry and interactive 3D models.
          </p>
        </div>

        <div className="footerCol">
          <h3 className="footerHeading">Visit</h3>
          <p className="footerText">{MUSEUM.name}</p>
          <p className="footerText">{MUSEUM.address}</p>
          <p className="footerText">{MUSEUM.hours}</p>
          <Link className="footerLink" to="/visit">
            Plan your visit
          </Link>
        </div>

        <div className="footerCol">
          <h3 className="footerHeading">Explore</h3>
          <nav className="footerNav" aria-label="Footer">
            <Link to="/collection">Collection</Link>
            <Link to="/visit">Visit</Link>
            <Link to="/about-us">About the project</Link>
          </nav>
        </div>
      </div>

      <p className="footerLegal">
        Student project · Erasmus photogrammetry course · Inspired by museum
        interpretation at the Paphos District Archaeological Museum
      </p>
    </footer>
  );
}
