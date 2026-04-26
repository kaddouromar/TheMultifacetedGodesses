export default function Visit() {
  // Direct link to the Archaeological Museum of the Paphos District
  const museumMapUrl = "https://maps.google.com/maps?q=Archaeological%20Museum%20of%20the%20Paphos%20District&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="section" style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ color: '#cab89b', marginBottom: '10px' }}>Visit the Museum</h2>
      <p style={{ marginBottom: '20px' }}>
        Explore the physical collection that inspired{" "}
        <strong style={{ textDecoration: "underline" }}>The Multifaceted Goddesses</strong>.
      </p>

      {/* The Map Container */}
      <div style={{ 
        width: '100%', 
        height: '450px', 
        borderRadius: '12px', 
        overflow: 'hidden', 
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        border: '1px solid rgba(202, 184, 155, 0.45)'
      }}>
        <iframe
          title="Paphos Museum Map"
          width="100%"
          height="100%"
          src={museumMapUrl}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          style={{ filter: 'grayscale(0.2)' }} // Optional: slightly muted to match your aesthetic
        ></iframe>
      </div>

      {/* Location Details */}
      <div style={{ marginTop: '25px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <h4 style={{ color: '#cab89b', margin: '0 0 5px 0' }}>Location</h4>
          <p>Griva Digeni 43, Paphos, Cyprus</p>
        </div>
        <div>
          <h4 style={{ color: '#cab89b', margin: '0 0 5px 0' }}>Opening Hours</h4>
          <p>Monday – Friday: 08:30 – 16:00</p>
        </div>
      </div>
    </section>
  );
}