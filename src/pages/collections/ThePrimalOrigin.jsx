export default function ThePrimalOrigin() {
  return (
    <section className="section">
      <h2>Lady of Lempa</h2>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <model-viewer
          src="/LadyOfLemba.glb"
          auto-rotate
          camera-controls
          className="modelViewer"
        />
      </div>
    </section>
  );
}

