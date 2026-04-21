import { useEffect, useState } from "react";
import menuData from "../data/menu_bar.json";
import MenuSection from "./MenuSection";
import HappyHourBanner, { getHappyHourState } from "./HappyHourBanner";
import { useI18n } from "../i18n/I18nContext";
import { menuLabelKeyByFrenchLabel } from "../i18n/translations";

export default function Menu() {
  const { t } = useI18n();
  const [hh, setHh] = useState(getHappyHourState(t));
  const translateMenuLabel = (label) =>
    t(menuLabelKeyByFrenchLabel[label] ?? label);

  useEffect(() => {
    const interval = setInterval(() => {
      setHh(getHappyHourState(t));
    }, 1000); // mise à jour chaque seconde

    return () => clearInterval(interval); // propre
  }, [t]);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <p className="text-center text-base text-zinc-300 italic mb-4">
        {t("menu.counterService")}
      </p>

      <HappyHourBanner happyHour={hh} />

      <h1 className="text-4xl font-bold text-center mb-10 text-zinc-300">
        {t("menu.title")}
      </h1>

      {Object.entries(menuData).map(([category, items], i) => (
        <MenuSection
          key={i}
          title={translateMenuLabel(category)}
          items={items}
          happyHourState={hh}
          translateMenuLabel={translateMenuLabel}
        />
      ))}
    </div>
  );
}
