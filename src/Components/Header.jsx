import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";

export default function Header() {
  const { language, setLanguage, t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();
  const homePath = language === "en" ? "/en" : "/fr";
  const menuPath = language === "en" ? "/en/menu" : "/fr/menu";

  const handleLanguageSwitch = (nextLanguage) => {
    setLanguage(nextLanguage);
    const isMenu = location.pathname.includes("menu");
    const targetPath =
      nextLanguage === "en" ? (isMenu ? "/en/menu" : "/en") : (isMenu ? "/fr/menu" : "/fr");
    navigate(targetPath);
  };

  return (
    <header className="bg-zinc-900 text-white p-4 flex items-center justify-between">
      <img src="/Logo.png" alt="Logo" className="h-14 sm:h-20 md:h-24" />
      <div className="flex items-center gap-6">
        <nav className="space-x-4 text-base sm:text-lg md:text-xl font-semibold">
          <Link to={homePath} className="hover:underline">{t("menu.home")}</Link>
          <Link to={menuPath} className="hover:underline">{t("menu.card")}</Link>
        </nav>
        <div className="flex items-center gap-2" aria-label={t("lang.switchLabel")}>
          <button
            type="button"
            className={`text-lg ${language === "fr" ? "opacity-100" : "opacity-50"}`}
            onClick={() => handleLanguageSwitch("fr")}
            aria-label="Francais"
          >
            🇫🇷 <span className="text-xs">{t("lang.fr")}</span>
          </button>
          <button
            type="button"
            className={`text-lg ${language === "en" ? "opacity-100" : "opacity-50"}`}
            onClick={() => handleLanguageSwitch("en")}
            aria-label="English"
          >
            🇬🇧 <span className="text-xs">{t("lang.en")}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
