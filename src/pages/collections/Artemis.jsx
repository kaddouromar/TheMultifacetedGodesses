import ObjectExhibit from "../../components/ObjectExhibit.jsx";
import { getCollectionById } from "../../data/collections.js";

export default function Artemis() {
  const item = getCollectionById("artemis");

  return (
    <section className="section">
      <ObjectExhibit
        title={item.title}
        tags={item.tags}
        modelSrc={item.modelSrc}
      >
        {item.label}
      </ObjectExhibit>
    </section>
  );
}
