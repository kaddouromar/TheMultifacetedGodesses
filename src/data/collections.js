import ladyOfLempaImg from "../pages/assests/Lady of Lempa.jpg";
import divine1Img from "../pages/assests/divine1.jpg";
import artemisImg from "../pages/assests/artemis.jpeg";

export const MUSEUM = {
  name: "Archaeological Museum of the Paphos District",
  address: "Griva Digeni 43, Paphos, Cyprus",
  hours: "Monday – Friday: 08:30 – 16:00",
  mapQuery: "Archaeological Museum of the Paphos District",
};

export const COLLECTIONS = [
  {
    id: "the-primal-origin",
    path: "/collection/the-primal-origin",
    title: "Lady of Lempa",
    tags: ["Chalcolithic", "Lempa", "3D scan"],
    teaser:
      "One of Cyprus's earliest goddess figures—a cruciform idol from the dawn of the island's sacred art.",
    image: ladyOfLempaImg,
    imageClass: "collectionImage--primal",
    modelSrc: "/LadyOfLemba.glb",
    splatSrc: "/splats/LadyLempa.ply",
    label: `Lempa, Cyprus
Chalcolithic period (c. 3000 BC)

The Primal Form
This cruciform figurine—known as the Lady of Lempa—is among the oldest sculptural expressions of the female body found on Cyprus. Her flattened head, outstretched arms, and emphasised hips speak not of individual portraiture but of a shared symbol: fertility, continuity, and the mystery of generation at the threshold of the Bronze Age.

Reading the Silhouette
Unlike the polished marble goddesses of later centuries, she is abstract and elemental. Archaeologists have linked such figures to household cults and burial rites across Chalcolithic settlements. To encounter her is to step back before myth acquired names like Aphrodite or Artemis—when the divine was still shape, stone, and hope pressed into clay and picrolite.

A Living Scan
Our photogrammetry model preserves every fracture and patina of the original so you can rotate her in your own space. Compare the weight of her crossed arms with the open gesture of later goddesses, and ask what changed when Cyprus entered the world of cities, trade, and written myth.`,
  },
  {
    id: "the-divine-transition",
    path: "/collection/the-divine-transition",
    title: "Aphrodite",
    tags: ["Hellenistic–Roman", "Paphos", "3D scan"],
    teaser:
      "Patron goddess of Paphos—beauty, desire, and power reframed through ancient stone and modern gaze.",
    image: divine1Img,
    imageClass: "collectionImage--divine",
    tabs: [
      {
        id: 1,
        label: "Rising from the Sea",
        modelSrc: "/Aphrodite1.glb",
        splatSrc: "/splats/AphroditeFreeStanding.ply",
      },
      {
        id: 2,
        label: "Armed Aphrodite",
        modelSrc: "/Aphrodite2.glb",
        splatSrc: "/splats/Aphrodite_Sword.ply",
      },
    ],
  },
  {
    id: "artemis",
    path: "/collection/artemis",
    title: "Artemis",
    tags: ["Hellenistic", "Cyprus", "3D scan"],
    teaser:
      "The huntress and guardian of wild places—strength, independence, and the untamed feminine.",
    image: artemisImg,
    imageClass: "collectionImage--artemis",
    modelSrc: "/Artemis.glb",
    splatSrc: "/splats/Artemis.ply",
    label: `Cyprus
Hellenistic period (3rd–1st c. BC)

The Huntress of the Hills
Artemis was worshipped across the island as protectress of nature, young women, and the passage between childhood and adulthood. In sanctuaries and rural shrines, Cypriots knew her as a goddess who roamed beyond city walls—mistress of animals, guide of hunters, and keeper of boundaries between the civilised and the wild.

Strength Without Apology
Where Aphrodite invites desire, Artemis embodies disciplined power. Statues and votives often show her with bow, quiver, or hunting dog—symbols of skill and sovereignty rather than ornament. For ancient viewers she was not a supporting character in another god's story but a force in her own right: dangerous to those who violated sacred groves, merciful to those who honoured them.

Explore the Model
Use the viewer to circle the figure and notice how posture, drapery, and attribute read from every angle. Consider how a goddess of the hunt might have spoken to communities who lived close to Cyprus's forests and coast—people who measured virtue in endurance as much as in beauty.`,
  },
];

export function getCollectionById(id) {
  return COLLECTIONS.find((c) => c.id === id);
}
