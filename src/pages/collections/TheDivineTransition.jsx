import { useState } from "react";

export default function TheDivineTransition() {
  const [active, setActive] = useState(1);

  const loremText = `Nea Paphos, House of Theseus
Roman period (2nd/3rd c. AD)

The Warrior of Desire
Found in the grand House of Theseus, this Roman-period statue reveals a formidable side of Paphos's patron goddess: Aphrodite Enoplios, the Armed Aphrodite. While modern myth often separates love from war, the ancients knew they were twin forces of the same passion. Here, she carries a sword, reminding us that she was not only a goddess of the heart but a sovereign protector of the city, capable of starting empires and ending them.

The Male Gaze: The Dangerous Beauty
Through the traditional lens, a woman with a weapon was often framed as a "War Starter": A source of chaos and destruction. This perspective interprets her strength as a threat, much like the myths of Troy where her desires led to fallen cities. In this view, her beauty is a "trap" and her sword is an instrument of turmoil, used to justify the need for patriarchal control over such unpredictable female power.

The Female Gaze: Armed Autonomy
Reclaimed through the Female Gaze, the sword is no longer a symbol of chaos, but of agency. She is not waiting to be protected; she is her own guardian. This statue represents the "Fierce Feminine": The realization that love, creation, and protection require strength. We invite you to see her not as a dangerous instigator, but as a complete and autonomous being who possesses both the grace to attract and the power to defend her own boundaries.`;

  const aphroditeText = `Nea Pafos, found in the sea near the Lighthouse
Late Hellenistic period (2nd/1st c. BC)

The Birth of an Icon
This torso depicts Aphrodite Anadyomene: The goddess "Rising from the Sea." According to legend, she was born from the sea foam on the shores of Paphos. In this Hellenistic masterpiece, she is frozen in a moment of intimate transition, originally depicted wringing the saltwater from her hair. She is the personification of beauty, desire, and the elemental power of the Mediterranean.

Deconstructing the Male Gaze
For centuries, statues like this have been viewed through the "Male Gaze": A perspective that treats the female body as a passive object of aesthetic perfection and voyeuristic pleasure. The soft "S-curve" of her torso and the delicate marble "skin" were designed to satisfy an ancient male ideal of vulnerability and grace. In this context, Aphrodite is often reduced to a trophy of beauty.

Reclaiming the Female Gaze
We invite you to step beyond the silent surface of the marble. To look through the 'Female Gaze' is not merely to see, but to remember.
In this light, Aphrodite is unmoored from the voyeur's pedestal. She is no longer a passive vessel of beauty, frozen for the admiration of others; she is the storm and the shore.
For the modern spirit, she stands as an ancient mirror of autonomy: A profound reminder that a woman's body is not a monument to be judged by the world, but a sanctuary of her own desire and a story written in her own voice.`;

  const currentText = active === 1 ? aphroditeText : loremText;

  return (
    <section className="section">
      <h2>Aphrodite</h2>
      <div className="divineTabBar">
        <button
          className={`divineTab${active === 1 ? " divineTabActive" : ""}`}
          onClick={() => setActive(1)}
        >
          1
        </button>
        <button
          className={`divineTab${active === 2 ? " divineTabActive" : ""}`}
          onClick={() => setActive(2)}
        >
          2
        </button>
      </div>
      <div className="card divineCard">
        <div className="divineCardContent">
          <div className="divineModelCol">
            <model-viewer
              src={`/Aphrodite${active}.glb`}
              auto-rotate
              camera-controls
              className="modelViewer"
            />
          </div>
          <div className="divineText">
            <p>{currentText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

