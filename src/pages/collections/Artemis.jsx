import FlipCard from "../../components/FlipCard.jsx";
import ModelExhibit from "../../components/ModelExhibit.jsx";
import { getCollectionById } from "../../data/collections.js";
const epithetWild = "/flip-cards/artemis/wild.png";
const epithetCoast = "/flip-cards/artemis/coast.jpeg";
const epithetAgora = "/flip-cards/artemis/agora.jpg";

const CAPTION = `Marble torso of Artemis, found at Nea Paphos-Maloutena. Roman period, 2nd century AD. The site at Maloutena lies close to where the earliest sanctuary of Artemis in Paphos is believed to have stood.`;

const EPITHETS = [
  {
    title: 'Artemis Agrotera — "Of the Wild"',
    image: epithetWild,
    text: `Agrotera means 'of the fields' or 'of the wild'. As Artemis Agrotera, she was the goddess of untamed nature, the hunt, and wild animals. This is her oldest and most widely known aspect. On Cyprus, the epithet is attested by an inscription associated with King Nicocles of Paphos, who dedicated a temple to Artemis Agrotera at Nea Paphos at the end of the 4th century BC. It is the earliest written evidence of her worship on the island.`,
  },
  {
    title: 'Artemis Paralia — "Of the Coast"',
    image: epithetCoast,
    text: `Paralia designates a connection to the coast. As Artemis Paralia, she was venerated near the salt lake at Larnaca, in what may have been a local sanctuary dedicated to her. The epithet is attested by at least two dedicatory inscriptions from the 2nd century AD found in the area. Some scholars read it as meaning 'beside the salt marsh', linking the goddess to the agricultural and economic cycle tied to this natural resource.`,
  },
  {
    title: 'Artemis Agoraia — "Of the Public Space"',
    image: epithetAgora,
    text: `Agoraia refers to the agora, the civic and commercial heart of a Greek city. As Artemis Agoraia, the goddess had a presence in the public life of the city, beyond the wilderness and the sanctuary. This epithet is attested by a 2nd century AD inscription from Voni, in central Cyprus. It is a reminder that Artemis, like Aphrodite, was never confined to a single role.`,
  },
];

export default function Artemis() {
  const item = getCollectionById("artemis");

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
          Where Aphrodite embodied desire and love in all their complexity, Artemis was a
          virgin goddess who rejected both for herself. She was the goddess of the hunt, the
          wilderness and wild animals, but also the protector of young girls until marriage
          and a guardian during childbirth. The goddess who rejected love for herself watched
          over those who experienced its consequences most directly.
        </p>
        <p className="sectionBody">
          On Cyprus, inscriptions and statuettes confirm that she was worshipped from the 5th
          century BC onward. Her presence on the island was quieter than Aphrodite&apos;s, but
          no less real.
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
        <h2>Artemis on Cyprus</h2>
        <p className="sectionBody">
          Artemis was depicted primarily as the huntress and protector of animals, shown with
          a bow, a quiver, and a deer or fawn at her side. This is the image that appears on
          the majority of limestone statuettes found across the island, particularly during
          the Hellenistic period. But her role was not limited to the hunt.
        </p>
        <p className="sectionBody">
          Like Aphrodite, Artemis was probably assimilated with the older goddess traditions
          already present on Cyprus, including elements of Anat, Astarte, and Hathor, the
          great goddesses of the Near East who had shaped religious life on the island long
          before the Greeks arrived.
        </p>
        <p className="sectionBody">
          The inscriptions found across Cyprus reveal a goddess venerated in different places
          and in different roles. Each of her epithets opens a different door into her
          character.
        </p>
      </section>

      <section className="section">
        <h2>Her Epithets</h2>
        <p className="sectionBody">
          Click each image to discover how Artemis was known across Cyprus — in the wild, by
          the coast, and at the heart of the city.
        </p>
        <div className="flipCardRow">
          {EPITHETS.map((epithet) => (
            <FlipCard
              key={epithet.title}
              title={epithet.title}
              image={epithet.image}
              imageAlt={epithet.title}
            >
              {epithet.text}
            </FlipCard>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>At the Heart of the City</h2>
        <p className="sectionBody">
          Most of the limestone statuettes depicting Artemis were found not in her own
          sanctuary, but in sanctuaries dedicated to other gods, in particular Apollo. This
          suggests that her worship on Cyprus was woven into a broader religious fabric rather
          than centred on a single sacred place.
        </p>
        <p className="sectionBody">
          The marble torso in the Archaeological Museum of Paphos dates to the Roman period,
          when Nea Paphos was at the height of its importance as the capital of Cyprus. It
          belongs to a tradition of refined marble statuary that represented the goddess in
          public settings. A goddess of the wild, present at the heart of the city.
        </p>
      </section>
    </div>
  );
}
