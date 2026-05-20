import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const SITES = [
  {
    name: "Archaeological Museum of Paphos",
    coords: [34.7718, 32.4303],
    note: "Houses the marble torso of Artemis and many objects from this exhibition.",
  },
  {
    name: "Lempa-Lakkoi Archaeological Site",
    coords: [34.8006, 32.4074],
    note: "Chalcolithic settlement (3900–2500 BC), excavation site of the Lady of Lempa figurine.",
  },
  {
    name: "Petra tou Romiou (Aphrodite's Rock)",
    coords: [34.6635, 32.6270],
    note: "The legendary birthplace of Aphrodite, rising from the sea between Paphos and Limassol.",
  },
  {
    name: "Roman Sanctuary of the Paphian Aphrodite",
    coords: [34.7075, 32.5741],
    note: "Ancient sanctuary at Kouklia (Palaepaphos), the most important cult site of Aphrodite on Cyprus.",
  },
  {
    name: "Baths of Aphrodite",
    coords: [35.0560, 32.3469],
    note: "A natural grotto on the Akamas peninsula where, according to legend, Aphrodite bathed.",
  },
  {
    name: "House of Theseus",
    coords: [34.7557, 32.3975],
    note: "Roman villa within the Kato Paphos Archaeological Park, decorated with extraordinary mythological mosaics.",
  },
  {
    name: "Archaeological Park Nea Pafos",
    coords: [34.7548, 32.3984],
    note: "UNESCO World Heritage Site containing mosaics, tombs, and monuments from the Hellenistic and Roman periods.",
  },
];

const CENTER = [34.78, 32.48];

export default function MapComponent() {
  return (
    <MapContainer
      center={CENTER}
      zoom={10}
      style={{ width: "100%", height: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {SITES.map((site) => (
        <Marker key={site.name} position={site.coords}>
          <Popup>
            <strong>{site.name}</strong>
            <br />
            {site.note}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
