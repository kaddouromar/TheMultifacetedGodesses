const ROWS = [
  {
    aspect: "Capture device",
    photo: ["iPhone 13 — RGB camera only", "No depth sensor on the base model"],
    splat: ["iPhone 14 Pro Max — RGB + LiDAR", "Depth sensor seeds a metrically scaled point cloud"],
  },
  {
    aspect: "Capture & reconstruction",
    photo: [
      "200–300 overlapping photos around the object",
      "Structure-from-Motion + Multi-View Stereo solve in RealityScan",
      "Result: polygon mesh with projected texture",
    ],
    splat: ["RGB-D video and multi-angle capture"],
  },
  {
    aspect: "Output format",
    photo: ["glTF 2.0 / .glb", "Open ISO standard (ISO/IEC 12113), universally supported"],
    splat: [".ply / .splat", "Format specification still evolving"],
  },
  {
    aspect: "File size per statue",
    photo: ["~10 MB after cleanup, decimation & texture baking"],
    splat: ["10–50 MB even after cleanup"],
  },
  {
    aspect: "Post-production effort",
    photo: [
      "High: retopology, UV unwrap, texture baking, decimation, material setup in Blender / Adobe Substance 3D Painter",
      "~4–12 hours per object",
    ],
    splat: ["Low: cropping and floater removal in SuperSplat", "~1–2 hours per small object"],
  },
  {
    aspect: "Material handling",
    photo: [
      "Strong on matte stone",
      "Specular highlights bake into albedo — polished marble or metal often looks flat",
    ],
    splat: ["Glossy, metallic and gilded surfaces render with natural highlights"],
  },
  {
    aspect: "Fine surface detail",
    photo: [
      "Bound by texture resolution (typically 2k–8k)",
      "Detail further smoothed by retopology and texture baking",
    ],
    splat: ["Sub-millimetre tool marks, hair and fabric weave captured natively"],
  },
  {
    aspect: "Relightability",
    photo: [
      "Full PBR (albedo, normal, roughness, AO, optional metallic)",
      "Reacts to lights and environment maps, casts and receives shadows",
    ],
    splat: [
      "Lighting is baked into the Gaussians at capture time",
      "Relighting is prototypical and still in research",
    ],
  },
  {
    aspect: "Web & mobile performance",
    photo: [
      "Hardware-accelerated mesh rendering, predictable frame budget",
      "Smooth on mid-range smartphones",
      "Initial load typically 1–3 s",
    ],
    splat: ["Performance untested; some players are smooth on mid-range smartphones"],
  },
  {
    aspect: "React Three Fiber integration",
    photo: [
      "Native: useGLTF from @react-three/drei",
      "Full ecosystem: postprocessing, shadows, environment, AR helpers",
    ],
    splat: [
      "Custom renderer required (e.g. GaussianSplats3D, react-three-gaussian-splat)",
      "Smaller ecosystem, most in research status",
    ],
  },
  {
    aspect: "Editability after capture",
    photo: ["Full: repair damage, fill holes, model missing parts, fix texture artifacts"],
    splat: ["Very limited: remove floaters, crop bounds, recolor", "No conventional 3D editing workflow"],
  },
  {
    aspect: "Mixing with other 3D content",
    photo: ["Coexists naturally with meshes, lights, environments and UI overlays"],
    splat: ["Dependent on the player implementation, still in research"],
  },
  {
    aspect: "AR / WebXR",
    photo: [".glb → .usdz for iOS Quick Look", "Native WebXR and model-viewer support"],
    splat: ["Possible but dependent on Webplayer development, not yet standardized"],
  },
  {
    aspect: "Scientific & archival use",
    photo: [
      "True geometry: measurement, 3D printing, conservation documentation",
      "Open, standardized format suited to long-term preservation",
    ],
    splat: [
      "No explicit surface — not measurable or printable before conversion to mesh",
      "Format still evolving but promising for preservation",
    ],
  },
  {
    aspect: "Best fit",
    photo: ["Catalogue-grade digitization", "Multi-device galleries", "Research portals, AR experiences"],
    splat: [
      "Hero showcases of single objects with complex materials (glass, metal, gilding)",
      "Immersive close-up viewing where photorealism outweighs interactivity",
    ],
  },
];

export default function TechComparison() {
  return (
    <section className="section techPage">
      <h2>Photogrammetry vs. Gaussian Splatting</h2>
      <p className="sectionLead">
        A side-by-side comparison of the two 3D capture pipelines we evaluated for
        digitizing statues and presenting them in the browser via React Three Fiber.
      </p>

      <div className="techApproaches">
        <div className="techApproachCard techApproachA">
          <span className="techApproachLabel">Approach A</span>
          <h3>Image-based Photogrammetry</h3>
          <p className="techPipeline">
            iPhone 13 → RealityScan → Blender post-production → <code>.glb</code> with embedded PBR textures
          </p>
        </div>
        <div className="techApproachCard techApproachB">
          <span className="techApproachLabel">Approach B</span>
          <h3>Gaussian Splatting</h3>
          <p className="techPipeline">
            iPhone 14 Pro (LiDAR) → splat training → SuperSplat cleanup → <code>.ply</code> in a custom R3F viewer
          </p>
        </div>
      </div>

      <div className="techTableWrap">
        <table className="techTable">
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Photogrammetry → GLB</th>
              <th>Gaussian Splats → PLY</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.aspect}>
                <td className="techAspect">{row.aspect}</td>
                <td>
                  <ul className="techList">
                    {row.photo.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </td>
                <td>
                  <ul className="techList">
                    {row.splat.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="techNote">
        <strong>Note on hardware.</strong> Only the Pro variants of iPhone 13 and iPhone 14 ship with a
        LiDAR scanner; base models are RGB-only. RealityScan operates purely image-based and works on any
        modern iPhone, while LiDAR-assisted Gaussian-splat capture requires a Pro device for metrically
        scaled initialisation.
      </p>
    </section>
  );
}
