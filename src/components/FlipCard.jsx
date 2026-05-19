import { useState } from "react";

export default function FlipCard({ title, image, imageAlt, children }) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((f) => !f);

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <div
      className={`flipCard${flipped ? " flipCardFlipped" : ""}`}
      role="button"
      tabIndex={0}
      onClick={toggle}
      onKeyDown={onKeyDown}
      aria-pressed={flipped}
      aria-label={`${title}. ${flipped ? "Show image" : "Read about"} ${title}`}
    >
      <div className="flipCardInner">
        <div className="flipCardFace flipCardFront">
          <img src={image} alt={imageAlt} width={400} height={400} decoding="async" />
        </div>
        <div className="flipCardFace flipCardBack">
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}
