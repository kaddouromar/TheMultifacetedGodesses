import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Visit from "./pages/Visit.jsx";
import Collection from "./pages/Collection.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ThePrimalOrigin from "./pages/collections/ThePrimalOrigin.jsx";
import TheDivineTransition from "./pages/collections/TheDivineTransition.jsx";
import TheDiverseIdentities from "./pages/collections/TheDiverseIdentities.jsx";

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <Link className="brand" to="/">
          The Female Gaze of Paphos
        </Link>
        <nav className="nav">
          <Link to="/visit">Visit</Link>
          <div className="navDropdown">
            <Link to="/collection" className="navTrigger">
              Collection
            </Link>
            <div className="navMenu" role="menu" aria-label="Collection">
              <Link to="/collection/the-primal-origin" role="menuitem">
                The Primal Origin
              </Link>
              <Link to="/collection/the-divine-transition" role="menuitem">
                The Divine Transition
              </Link>
              <Link to="/collection/the-diverse-identities" role="menuitem">
                The Diverse Identities
              </Link>
            </div>
          </div>
          <Link to="/about-us">About us</Link>
        </nav>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/the-primal-origin" element={<ThePrimalOrigin />} />
          <Route
            path="/collection/the-divine-transition"
            element={<TheDivineTransition />}
          />
          <Route
            path="/collection/the-diverse-identities"
            element={<TheDiverseIdentities />}
          />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
    </div>
  );
}

