import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useI18n } from "../i18n/I18nContext";

import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-zinc-900 text-white p-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* 🗺️ Mini Carte */}
        <div className="w-full md:w-1/2 h-60 rounded overflow-hidden shadow-md">
          <MapContainer
            center={[43.94685363769531, 4.81054162979126]}
            zoom={16}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[43.94685363769531, 4.81054162979126]}>
              <Popup>{t("footer.marker")}</Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Infos et signature ❤️ */}
        <div className="text-center md:text-right md:w-1/2">
          <p className="text-lg mb-2">📍 {t("footer.address")}</p>
          <p className="text-sm text-zinc-400 italic mb-4">
            {t("footer.madeBy")}
          </p>

          {/* 🔗 Réseaux sociaux avec icônes */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://www.facebook.com/pubz.avignon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/facebook.png"
                alt="Facebook"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://www.instagram.com/pub_z_avignon/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/instagram.png"
                alt="Instagram"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
