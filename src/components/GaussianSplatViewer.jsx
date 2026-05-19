import { useEffect, useRef, useState } from "react";
import * as GaussianSplats3D from "@mkkellogg/gaussian-splats-3d";

export default function GaussianSplatViewer({ src, className = "gaussianSplatViewer" }) {
  const containerRef = useRef(null);
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !src) return;

    let viewer;
    let disposed = false;
    setStatus("loading");
    setErrorMessage("");
    container.replaceChildren();

    const init = async () => {
      viewer = new GaussianSplats3D.Viewer({
        rootElement: container,
        cameraUp: [0, -1, -0.6],
        initialCameraPosition: [-1, -4, 6],
        initialCameraLookAt: [0, 4, 0],
        sharedMemoryForWorkers: false,
        showLoadingUI: false,
      });

      try {
        await viewer.addSplatScene(src, {
          splatAlphaRemovalThreshold: 5,
          showLoadingUI: false,
        });
        if (disposed) {
          await viewer.dispose();
          return;
        }
        viewer.start();
        setStatus("ready");
      } catch (err) {
        console.error("Gaussian splat load failed:", err);
        if (!disposed) {
          setStatus("error");
          setErrorMessage("Could not load the Gaussian splat view.");
        }
        await viewer?.dispose?.();
      }
    };

    init();

    return () => {
      disposed = true;
      viewer?.dispose?.();
    };
  }, [src]);

  return (
    <div className={className} aria-busy={status === "loading"}>
      <div ref={containerRef} className="gaussianSplatViewerCanvas" />
      {status === "loading" && (
        <p className="gaussianSplatViewerMessage">Loading Gaussian splat…</p>
      )}
      {status === "error" && (
        <p className="gaussianSplatViewerMessage gaussianSplatViewerMessage--error">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
