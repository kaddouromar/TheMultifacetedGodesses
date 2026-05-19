import { useState } from "react";
import FlipCard from "../../components/FlipCard.jsx";
import GaussianSplatViewer from "../../components/GaussianSplatViewer.jsx";
import ScanSectionHeader from "../../components/ScanSectionHeader.jsx";
import { getCollectionById } from "../../data/collections.js";
import baetylImg from "../assests/aphrodite/baetyl.png";
import ouraniaImg from "../assests/aphrodite/ourania.jpg";
const shellImg = "/flip-cards/aphrodite/shell.png";
const pomegranateImg = "/flip-cards/aphrodite/pomegranate.png";
const swordImg = "/flip-cards/aphrodite/sword.png";

const YOUTUBE_EMBED = "https://www.youtube.com/embed/c3ggfDCCfKs";

const CAPTIONS = {
  1: `This marble statue was found in the sea near the Paphos lighthouse, where it had rested on the ocean floor for centuries. She belongs to the Anadyomene type — the goddess rising from the sea, her lost arms once raised to wring water from her hair. Carved in the late Hellenistic period (2nd/1st century BC), she is one of the most evocative objects in the museum's collection.`,
  2: `Found beneath the floor of the Villa of Theseus in Nea Paphos, this statue dates to the Roman period (2nd/3rd century AD) and represents a rare iconographic type: Aphrodite bearing a sword. The remains of a sword handle in her broken right hand confirm she was once fully armed.`,
};

const SYMBOLS = [
  {
    title: "The Shell",
    image: shellImg,
    text: `Shells were found in abundance at Cypriot sanctuaries dedicated to Aphrodite, placed there as offerings by worshippers. Their connection to the sea and to the goddess who rose from it made them one of her most enduring symbols. The same tradition existed at the temples of Ishtar in Mesopotamia thousands of years earlier, where shells carried the same associations of love and new life. Ishtar was among the most significant Eastern predecessors of Aphrodite and the shell is one of the places where their stories quietly overlap.`,
  },
  {
    title: "The Pomegranate",
    image: pomegranateImg,
    text: `According to ancient tradition, Aphrodite herself planted the first pomegranate tree on Cyprus. The fruit became one of her most enduring symbols on the island, associated with love, fertility, and the cycle of life and death. Pomegranate trees were planted at her sanctuaries and the fruit appears across Cypriot culture to this day. It is a symbol that never quite belonged to one goddess alone — Hera, Demeter, and Persephone all shared its meaning — but on Cyprus, it was Aphrodite who first put it in the ground. The myrtle tree was also considered sacred to her and appears alongside the pomegranate in ancient descriptions of her attributes.`,
  },
  {
    title: "The Sword and the Girdle",
    image: swordImg,
    text: `Aphrodite possessed a magical girdle, known in ancient sources as the Cestus, said to make its wearer irresistible to gods and mortals alike. It was described as the source of her power over desire itself. But Aphrodite on Cyprus was not only a goddess of attraction. She was also depicted, in rare but remarkable instances, bearing a sword. This combination of seduction and armed strength was not new. Inanna of ancient Sumer and her later manifestation as Ishtar were depicted with both the art of lovemaking and the dagger among their divine attributes. The Armed Aphrodite of Nea Paphos, now held at the Archaeological Museum of Paphos, carries that same ancient memory.`,
  },
];

export default function TheDivineTransition() {
  const item = getCollectionById("the-divine-transition");
  const [active, setActive] = useState(1);
  const [viewMode, setViewMode] = useState("mesh");
  const activeTab = item.tabs.find((t) => t.id === active);
  const showSplat = viewMode === "splat" && activeTab.splatSrc;

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
          Aphrodite&apos;s very name is a story. It derives from <em>aphros</em> — the
          ancient Greek word for seafoam. According to the poet Hesiod, she emerged from
          the sea itself, rising from the foam that formed when the sky god Uranus fell
          into the ocean. Carried by the winds, she drifted first toward the island of
          Cythera, then toward Cyprus and it was here, on the southwestern coast at Petra
          tou Romiou, that she first stepped ashore. She is known as the goddess of love.
          But the evidence left behind in stone, in myth, and in marble shows a goddess
          that was multifaceted.
        </p>
        <div className="videoEmbed" aria-label="Aphrodite video">
          <iframe
            src={YOUTUBE_EMBED}
            title="Aphrodite — exhibition video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="section">
        <ScanSectionHeader
          title="3D Scans"
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          splatAvailable={item.tabs.some((tab) => tab.splatSrc)}
        />
        <div className="divineTabBar">
          {item.tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`divineTab${active === tab.id ? " divineTabActive" : ""}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="card divineCard">
          <div className="divineCardContent">
            <div className="divineModelCol">
              {showSplat ? (
                <GaussianSplatViewer
                  key={activeTab.splatSrc}
                  src={activeTab.splatSrc}
                  className="modelViewer gaussianSplatViewer"
                />
              ) : (
                <model-viewer
                  src={activeTab.modelSrc}
                  auto-rotate
                  camera-controls
                  className="modelViewer"
                  alt={`3D model: ${activeTab.label}`}
                />
              )}
            </div>
            <div className="divineText">
              <p>{CAPTIONS[active]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>A Goddess Without a Face: The Sacred Stone of Old Paphos</h2>
        <p className="sectionBody">
          At the Sanctuary of Palaepaphos — the most ancient and most important sanctuary
          of Aphrodite in the entire ancient world from around 1200 BC — the goddess was
          never depicted as a statue. She was worshipped in the form of a baetyl: a conical
          sacred stone. No face, no body, no marble likeness.
        </p>
        <p className="sectionBody">
          This aniconic cult has deep roots. Similar sacred stones were used across the
          ancient Near East and Cyprus. The Phoenicians, who arrived on the island from the
          9th century BC, also practiced baetyl worship in cities like Kition (today
          Larnaka). The baetyl from the Paphian Sanctuary is depicted on Roman coins of
          Cyprus. A goddess so powerful she needed no image. Her presence was the stone
          itself.
        </p>
        <figure className="exhibitFigure">
          <img src={baetylImg} alt="Illustration of the baetyl from Palaepaphos" />
          <figcaption>
            Illustration of the baetyl from the Sanctuary of Aphrodite, Palaepaphos. The
            original is held at the Cyprus Museum, Nicosia.
          </figcaption>
        </figure>
        <p className="sectionBody">
          The irony is profound: the goddess most famous for her physical beauty was, at
          the heart of her oldest sanctuary, invisible. It tells us that Cyprus always
          understood Aphrodite as something far greater than an aesthetic ideal.
        </p>
        <p className="sectionBody">
          The Archaeological Museum of Paphos holds finds spanning this entire period.
          Among them a set of engraved ring stones from the Roman period, one of which
          bears a depiction of the Sanctuary of Aphrodite at Palaipaphos, a small but
          remarkable trace of a cult that shaped this island for centuries.
        </p>
      </section>

      <section className="section">
        <h2>The Symbols of Aphrodite</h2>
        <p className="sectionBody">
          Aphrodite left traces across Cyprus in sanctuaries, in myths, and in the objects
          associated with her name. But her symbols tell a deeper story. The island lay
          between the Greek world and the civilizations of the ancient Near East and it was
          through this position that the most decisive influences on the Cypriot goddess
          arrived. Each one carries a memory older than Greece, reaching back to the
          goddesses who shaped her long before she had a Cypriot home: Inanna of ancient
          Sumer, Ishtar of Babylonia, Astarte of the Phoenicians. To understand
          Aphrodite&apos;s symbols is to follow a thread that runs across centuries and
          civilizations. But the symbols most commonly associated with Aphrodite today, the
          mirror, the dove, the ideal of beauty, are often the youngest part of her story.
          The older symbols reach further.
        </p>
        <div className="flipCardRow">
          {SYMBOLS.map((symbol) => (
            <FlipCard
              key={symbol.title}
              title={symbol.title}
              image={symbol.image}
              imageAlt={symbol.title}
            >
              {symbol.text}
            </FlipCard>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Aphrodite of Cyprus — More Than One Goddess</h2>
        <p className="sectionBody">
          The two statues in the Archaeological Museum of Paphos tell two very different
          stories. One rises from the sea, tender and elemental. One stands armed,
          unyielding. And yet both are Aphrodite.
        </p>
        <p className="sectionBody">
          On Cyprus, she was never only the goddess of love. She was worshipped as a
          protector of cities. Her sanctuary at Palaepaphos was depicted on the coinage of
          Cypriot kingdoms, a testament to the central role the goddess and her cult played
          in the political and religious life of the island. She was also known for her
          loves without reservation. She loved Adonis, a young hunter who died too soon and
          mourned him. She loved Ares, the god of war: a pairing that ancient authors
          described not as contradiction, but as consequence. Where desire goes, conflict
          follows.
        </p>
        <p className="sectionBody">
          At her oldest sanctuary in Palaepaphos, she had no face at all, only a stone.
          Shaped by centuries of influence from her Eastern predecessors, Inanna, Ishtar and
          Astarte, and connected to a wide range of symbols and attributes, she was
          protector, lover, and warrior. The goddess that Cyprus knew was all of these things
          at once, and traces of that complexity are held in the collections of the
          Archaeological Museum of Paphos to this day.
        </p>
        <figure className="exhibitFigure">
          <img
            src={ouraniaImg}
            alt="Marble statue of Aphrodite Ourania at the Archaeological Museum of Paphos"
          />
          <figcaption>
            Marble Statue of Aphrodite Ourania. Found at the House of Theseus, Nea Paphos.
            Late Hellenistic period, 1st century BC. Archaeological Museum of Paphos.
          </figcaption>
        </figure>
        <p className="sectionBody">
          The epithet Ourania, meaning &apos;heavenly&apos; or &apos;of the sky&apos;,
          distinguished a more elevated, spiritual aspect of Aphrodite from her earthly
          manifestations. It is one of her oldest and most widely attested epithets, used
          across the Greek world to describe the goddess in her most universal form.
        </p>
      </section>
    </div>
  );
}
