export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="kicker">A starting point</p>
        <h1 className="title">A simple React website shell.</h1>
        <p className="subtitle">
          Edit <code>src/pages/Home.jsx</code> to build your pages.
        </p>
        <div className="ctaRow">
          <a className="primary" href="#work">
            See sections
          </a>
          <a className="secondary" href="#about">
            Learn more
          </a>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About</h2>
        <p>
          This is a minimal, clean layout you can expand into a full site: routing,
          content, images, CMS—whatever you want next.
        </p>
      </section>

      <section id="work" className="section">
        <h2>Work</h2>
        <div className="cards">
          <article className="card">
            <h3>Project One</h3>
            <p>Describe a piece of work here.</p>
          </article>
          <article className="card">
            <h3>Project Two</h3>
            <p>Add an image, a link, or details.</p>
          </article>
          <article className="card">
            <h3>Project Three</h3>
            <p>Keep it lightweight and iterate.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Add your email, socials, or a form. For now, this is just a placeholder.</p>
      </section>
    </>
  );
}

