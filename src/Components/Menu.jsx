import menuData from "../data/menu_bar.json";
import MenuSection from "./MenuSection";

export default function Menu() {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      {/* Disclaimer soft */}
      <p className="text-center text-sm text-zinc-400 italic mb-4">
        Service au comptoir uniquement, merci de commander directement au bar.
      </p>

      <h1 className="text-4xl font-bold text-center mb-10 text-zinc-300">
        La carte
      </h1>

      {Object.entries(menuData).map(([category, items], i) => (
        <MenuSection key={i} title={category} items={items} />
      ))}
    </div>
  );
}
