import ScanViewModeToggle from "./ScanViewModeToggle.jsx";

export default function ScanSectionHeader({
  title,
  viewMode,
  onViewModeChange,
  splatAvailable = true,
}) {
  return (
    <div className="scanSectionHeader">
      <h2>{title}</h2>
      <ScanViewModeToggle
        viewMode={viewMode}
        onChange={onViewModeChange}
        splatAvailable={splatAvailable}
      />
    </div>
  );
}
