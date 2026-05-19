import ModelExhibit from "../../components/ModelExhibit.jsx";
import { getCollectionById } from "../../data/collections.js";
import museum1 from "../assests/lempa/museum-figurines-1.jpg";
import museum2 from "../assests/lempa/museum-figurines-2.jpg";
import museum3 from "../assests/lempa/museum-figurines-3.jpg";

const CAPTION = `Unique limestone statuette, known as the Lady of Lempa. Lempa-Lakkoi, Middle Chalcolithic period, c. 3500 BC. Original held at the Cyprus Museum, Nicosia.`;

export default function ThePrimalOrigin() {
  const item = getCollectionById("the-primal-origin");

  return (
    <div className="collectionPage">
      <div className="objectHeader">
        <h2>{item.title}</h2>
        <ul className="objectTags" aria-label="Object details">
          {item.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      <section className="section">
        <h2>Introduction</h2>
        <p className="sectionBody">
          Long before Cyprus was the island of Aphrodite, people here were already making
          figures from stone. One of them has survived five thousand years. She was found at
          a prehistoric settlement called Lempa, a few kilometres north of present-day
          Paphos — in the same corner of the island that would later become the heart of
          Aphrodite&apos;s world.
        </p>
        <p className="sectionBody">
          Her name is the Lady of Lempa.
        </p>
      </section>

      <section className="section">
        <h2>3D Scan</h2>
        <ModelExhibit
          modelSrc={item.modelSrc}
          alt={`3D model: ${item.title}`}
          caption={CAPTION}
        />
      </section>

      <section className="section">
        <h2>The Lady of Lempa</h2>
        <p className="sectionBody">
          The Lady of Lempa belonged to a world in which the making of figures like hers
          was widespread, deliberate, and clearly significant.
        </p>
        <p className="sectionBody">
          Across western Cyprus during the Chalcolithic period (c. 3900–2400 BC), communities
          shaped human forms from stone and clay. The most prized material was picrolite, a
          soft blue-green rock found only in the Troodos Mountains, traded across the island
          and placed carefully in graves. The figures carved from it were cruciform:
          cross-shaped, arms outstretched, knees drawn up. Some were small enough to hang on a
          necklace of Dentalium shell. Others, like the Lady of Lempa, were made to stand.
        </p>
        <p className="sectionBody">
          These figurines were found almost exclusively with women and children. Whether they
          represent a deity, a protective figure, or a symbol of birth and new life,
          scholars cannot say with certainty. Their meanings were perhaps never fixed. But the
          care with which they were made, and kept, points toward something that mattered
          deeply to the people who lived here.
        </p>
        <p className="sectionBody">
          Thousands of years later, on the same stretch of southwestern coastline, a goddess
          called Aphrodite would be born from the sea. What connects The Lady of Lempa and
          these figures to Aphrodite is a preoccupation with life, birth and the forces that
          renew the world. Long before Aphrodite had a sanctuary, Cyprus was already a place
          where this was considered sacred.
        </p>
      </section>

      <section className="section">
        <h2>From the Museum Collection</h2>
        <p className="sectionBody">
          The Archaeological Museum of Paphos holds figurines and pendants from this same
          tradition, among them clay and limestone anthropomorphic figurines and picrolite
          cruciform pendants from the Middle Chalcolithic period. They are among the earliest
          material evidence of ritual life in the Paphos region and a reminder that the story
          of this island&apos;s goddesses begins long before the first myth was written down.
        </p>
        <div className="museumPhotoGrid">
          <img src={museum1} alt="Chalcolithic figurines on display at the museum" loading="lazy" />
          <img src={museum2} alt="Clay and stone anthropomorphic figurines" loading="lazy" />
          <img src={museum3} alt="Picrolite cruciform pendants from the Chalcolithic period" loading="lazy" />
        </div>
      </section>
    </div>
  );
}
