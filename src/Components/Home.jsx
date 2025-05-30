import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import horaires from "../data/horaires.json";

import Slider from "react-slick";

export default function Home() {
  const images = [
    "/Pub_Z_1.png",
    "/Pub_Z_2.png",
    "/Pub_Z_3.png"
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
    <div className="px-0 py-8 text-white">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white">
        Bienvenue au Pub Z
      </h1>
        
      <div className="w-screen overflow-hidden mb-16">
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Photo ${index}`}
                className="w-screen h-64 sm:h-80 md:h-[32rem] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
        
      <p className="text-lg text-center text-zinc-300 max-w-2xl mx-auto mb-12 px-4">
        Un lieu chaleureux pour partager des moments inoubliables entre amis, autour d'une bonne bière ou d’un cocktail maison 🍸 <br className="hidden sm:inline" /> (No Fuking Moritos Here!)
      </p>

      <div className="flex flex-wrap justify-center gap-4 text-center text-zinc-100 font-medium max-w-4xl mx-auto px-4">
        {Object.entries(horaires).map(([jour, heure], i) => (
          <div key={i} className="w-[45%] sm:w-[30%] md:w-[22%]">
            {jour}<br />
            <span className={`text-sm ${heure === "Fermé" ? "text-zinc-500" : ""}`}>
              {heure}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
