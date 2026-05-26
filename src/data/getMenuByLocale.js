import menuFr from "./menu_bar_fr_updated.json";
import menuEn from "./menu_bar_en_updated.json";

const menusByLocale = {
  fr: menuFr,
  en: menuEn,
};

/**
 * Retourne la carte correspondant à la locale.
 * Fallback sur le JSON français si la locale est inconnue.
 */
export function getMenuByLocale(locale) {
  return menusByLocale[locale] ?? menusByLocale.fr;
}
