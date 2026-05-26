import { useEffect, useMemo, useState } from "react";
import { getMenuByLocale } from "../data/getMenuByLocale";
import MenuSection from "./MenuSection";
import HappyHourBanner, { getHappyHourState } from "./HappyHourBanner";
import { useI18n } from "../i18n/I18nContext";

export default function Menu() {
  const { language, t } = useI18n();
  const menuData = useMemo(() => getMenuByLocale(language), [language]);
  const [hh, setHh] = useState(() => getHappyHourState(t));

  useEffect(() => {
    const interval = setInterval(() => {
      setHh(getHappyHourState(t));
    }, 1000);

    return () => clearInterval(interval);
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

      {Object.entries(menuData).map(([category, items]) => (
        <MenuSection
          key={`${language}-${category}`}
          title={category}
          items={items}
          happyHourState={hh}
        />
      ))}
    </div>
  );
}
