export default function ObjectExhibit({ title, tags, modelSrc, children }) {
  return (
    <>
      <div className="objectHeader">
        <h2>{title}</h2>
        {tags?.length > 0 && (
          <ul className="objectTags" aria-label="Object details">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="card divineCard">
        <div className="divineCardContent">
          <div className="divineModelCol">
            <model-viewer
              src={modelSrc}
              auto-rotate
              camera-controls
              className="modelViewer"
              alt={`3D model of ${title}`}
            />
          </div>
          <div className="divineText">
            <p>{children}</p>
          </div>
        </div>
      </div>
    </>
  );
}
