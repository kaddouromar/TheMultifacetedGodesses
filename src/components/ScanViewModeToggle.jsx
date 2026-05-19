const MODES = [
  { id: "mesh", label: "3D Model" },
  { id: "splat", label: "Gaussian Splat" },
];

export default function ScanViewModeToggle({ viewMode, onChange, splatAvailable = true }) {
  return (
    <div
      className="scanViewToggle"
      role="group"
      aria-label="Scan display mode"
    >
      {MODES.map((mode) => {
        const disabled = mode.id === "splat" && !splatAvailable;
        return (
          <button
            key={mode.id}
            type="button"
            className={`divineTab${viewMode === mode.id ? " divineTabActive" : ""}`}
            aria-pressed={viewMode === mode.id}
            disabled={disabled}
            onClick={() => onChange(mode.id)}
          >
            {mode.label}
          </button>
        );
      })}
    </div>
  );
}
