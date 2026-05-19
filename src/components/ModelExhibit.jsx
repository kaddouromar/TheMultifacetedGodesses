export default function ModelExhibit({ modelSrc, alt, caption }) {
  return (
    <div className="card divineCard">
      <div className="divineCardContent">
        <div className="divineModelCol">
          <model-viewer
            src={modelSrc}
            auto-rotate
            camera-controls
            className="modelViewer"
            alt={alt}
          />
        </div>
        <div className="divineText">
          <p>{caption}</p>
        </div>
      </div>
    </div>
  );
}
