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
      
      <img 
        src="/bannière.png" 
        alt="Bannière du Pub Z" 
        className="w-full h-auto mb-8" 
      />
        
      <p className="text-2xl text-center text-zinc-300 max-w-2xl mx-auto mb-3 px-4">
        Rhumerie sonore depuis 1987
      </p>

      <p className="text-2xl text-center text-zinc-300 max-w-2xl mx-auto mb-3 px-4">
        musique, expos & cultures alternatives
      </p>

      <p className="text-2xl text-center text-zinc-300 max-w-2xl mx-auto mb-3 px-4">
        Happy hour 18h30 - 20h30
      </p>

      <p className="text-xl text-center text-zinc-300 max-w-2xl mx-auto mb-3 px-4">
        Ouvert du Mardi au Samedi de 17h à 1h30.
      </p>

    </div>
  );
}
