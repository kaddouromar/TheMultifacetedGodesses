import { useState } from "react";

export default function AboutUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="section">
      <h2>About us</h2>
      <p>Blank page.</p>
      
      <div className="contactFormContainer">
        <h3>Get in Touch</h3>
        {submitted && <div className="successMessage">Thank you! Your message has been sent.</div>}
        <form onSubmit={handleSubmit} className="contactForm">
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email"
            />
          </div>
          
          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message"
              rows="6"
            />
          </div>
          
          <button type="submit" className="submitButton">Send Message</button>
        </form>
      </div>
    </section>
  );
}

