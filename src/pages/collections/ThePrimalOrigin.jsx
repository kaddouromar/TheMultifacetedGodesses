import ladyOfLempa from "../assests/Lady of Lempa.jpg";

export default function ThePrimalOrigin() {
  return (
    <section className="section">
      <h2>Lady of Lempa</h2>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <img
          src={ladyOfLempa}
          alt="Lady of Lempa"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
    </section>
  );
}

