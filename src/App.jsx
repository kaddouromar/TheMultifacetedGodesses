import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Visit from "./pages/Visit.jsx";
import Collection from "./pages/Collection.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ThePrimalOrigin from "./pages/collections/ThePrimalOrigin.jsx";
import TheDivineTransition from "./pages/collections/TheDivineTransition.jsx";
import Artemis from "./pages/collections/Artemis.jsx";

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <Link className="brand" to="/">
          The Multifaceted Goddesses
        </Link>
        <nav className="nav">
          <Link to="/visit">Visit</Link>
          <div className="navDropdown">
            <Link>
              Collection
            </Link>
            <div className="navMenu" role="menu" aria-label="Collection">
              <Link to="/collection/the-primal-origin" role="menuitem">
                Lady of Lempa
              </Link>
              <Link to="/collection/the-divine-transition" role="menuitem">
                Aphrodite
              </Link>
              <Link to="/collection/artemis" role="menuitem">
                Artemis
              </Link>
            </div>
          </div>
          
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
          <Route path="/collection/artemis" element={<Artemis />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
    </div>
  );
}

