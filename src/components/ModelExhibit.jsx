import { useState } from "react";
import GaussianSplatViewer from "./GaussianSplatViewer.jsx";
import ScanSectionHeader from "./ScanSectionHeader.jsx";

export default function ModelExhibit({
  title = "3D Scan",
  modelSrc,
  splatSrc,
  alt,
  caption,
  children,
}) {
  const [viewMode, setViewMode] = useState("mesh");
  const showSplat = viewMode === "splat" && splatSrc;

  return (
    <>
      <ScanSectionHeader
        title={title}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        splatAvailable={Boolean(splatSrc)}
      />
      <div className="card divineCard">
        <div className="divineCardContent">
          <div className="divineModelCol">
            {showSplat ? (
              <GaussianSplatViewer src={splatSrc} className="modelViewer gaussianSplatViewer" />
            ) : (
              <model-viewer
                src={modelSrc}
                auto-rotate
                camera-controls
                className="modelViewer"
                alt={alt}
              />
            )}
          </div>
          <div className="divineText">
            {children ?? <p>{caption}</p>}
          </div>
        </div>
      </div>
    </>
  );
}
