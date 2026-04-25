import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Visit from "./pages/Visit.jsx";
import Collection from "./pages/Collection.jsx";
import AboutUs from "./pages/AboutUs.jsx";

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <Link className="brand" to="/">
          The Female Gaze of Paphos
        </Link>
        <nav className="nav">
          <Link to="/visit">Visit</Link>
          <Link to="/collection">Collection</Link>
          <Link to="/about-us">About us</Link>
        </nav>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} The Female Gaze of Paphos</span>
      </footer>
    </div>
  );
}

