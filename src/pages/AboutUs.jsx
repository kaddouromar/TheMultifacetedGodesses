import { useState } from "react";
import { Link } from "react-router-dom";
import { MUSEUM } from "../data/collections.js";
import teamPhoto from "./assests/team.jpeg";

export default function AboutUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="section aboutPage">
      <h2>About the project</h2>
      <p className="sectionLead">
        The Multifaceted Goddesses is a digital exhibition developed as part of an
        Erasmus photogrammetry course. We document and interpret goddess figures
        connected to Cyprus, with a focus on material held at or related to the{" "}
        {MUSEUM.name}.
      </p>

      <div className="aboutTeam">
        <img
          className="aboutTeamPhoto"
          src={teamPhoto}
          alt="Project team"
        />
        <div>
          <h3>The team</h3>
          <p>
            We combine 3D scanning, web publishing, and curatorial writing to make
            ancient objects approachable online. Our aim is museum-style clarity:
            accurate context, thoughtful interpretation, and models you can
            explore from every angle.
          </p>
          <p>
            <Link to="/collection">Explore the collection →</Link>
            {" · "}
            <Link to="/visit">Plan your visit →</Link>
          </p>
        </div>
      </div>

      <div className="contactFormContainer">
        <h3>Contact us</h3>
        <p className="sectionLead">
          Questions about the exhibition or the 3D models? Send a message below
          (demo form—submissions are not emailed yet).
        </p>

        {submitted && (
          <p className="successMessage" role="status">
            Thank you—your message has been recorded locally.
          </p>
        )}

        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button className="submitButton" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
