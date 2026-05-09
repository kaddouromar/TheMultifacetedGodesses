export default function Artemis() {
  return (
    <section className="section">
      <h2>Artemis</h2>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <model-viewer
          src="/Artemis.glb"
          auto-rotate
          camera-controls
          className="modelViewer"
        />
      </div>
    </section>
  );
}

