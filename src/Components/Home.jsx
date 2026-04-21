import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useI18n } from "../i18n/I18nContext";

export default function Home() {
  const { t } = useI18n();
  const images = [
    "/1.jpg",
    "/2.png",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg"
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    adaptiveHeight: true
  };

  return (
    <div className="bg-zinc-900 text-white min-h-screen flex flex-col items-center justify-start py-8 px-4">
      
      {/* Bannière */}
      <img 
        src="/bannière.png" 
        alt={t("home.bannerAlt")}
        className="w-full max-w-6xl h-auto rounded-2xl shadow-lg mb-10" 
      />

      {/* Infos */}
      <div className="text-center space-y-4 max-w-2xl">
        <p className="text-2xl font-normal text-zinc-300">{t("home.tagline1")}</p>
        <p className="text-2xl font-normal text-zinc-300">{t("home.tagline2")}</p>
        <p className="text-2xl font-semibold text-zinc-300">{t("home.tagline3")}</p>
        <p className="text-lg font-normal text-zinc-400">{t("home.tagline4")}</p>
      </div>

      {/* Slider */}
      <div className="w-full max-w-4xl mt-16 mb-10 rounded-lg overflow-hidden shadow-md">
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index} className="aspect-square w-full">
              <img 
                src={src} 
                alt={t("home.slideAlt", { index: index + 1 })}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
