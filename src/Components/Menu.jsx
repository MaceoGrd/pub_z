import { useEffect, useState } from "react";
import menuData from "../data/menu_bar.json";
import MenuSection from "./MenuSection";
import HappyHourBanner, { getHappyHourState } from "./HappyHourBanner";

export default function Menu() {
  const [hh, setHh] = useState(getHappyHourState());

  useEffect(() => {
    const interval = setInterval(() => {
      setHh(getHappyHourState());
    }, 1000); // mise à jour chaque seconde

    return () => clearInterval(interval); // propre
  }, []);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <p className="text-center text-base text-zinc-300 italic mb-4">
        Service au comptoir uniquement, merci de commander directement au bar.
      </p>

      <HappyHourBanner happyHour={hh} />

      <h1 className="text-4xl font-bold text-center mb-10 text-zinc-300">
        La carte
      </h1>

      {Object.entries(menuData).map(([category, items], i) => (
        <MenuSection key={i} title={category} items={items} happyHourState={hh} />
      ))}
    </div>
  );
}
