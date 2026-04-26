
import artemis1 from "../assests/artemis1.PNG";

export default function Artemis() {
  return (
    <section className="section">
      <h2>Artemis</h2>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <img
          src={artemis}
          alt="Artemis"
          style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
        />
      </div>
    </section>
  );
}
