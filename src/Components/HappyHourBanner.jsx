export function getHappyHourState() {
  const now = new Date();

  const start = new Date();
  start.setHours(18, 30, 0, 0);

  const end = new Date();
  end.setHours(20, 30, 0, 0);

  const nextStart = new Date(start);
  if (now >= end) {
    nextStart.setDate(now.getDate() + 1);
  }

  const hour = now.getHours();

  if (now >= start && now < end) {
    const msLeft = end - now;
    const h = Math.floor(msLeft / (1000 * 60 * 60));
    const m = Math.floor((msLeft % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((msLeft % (1000 * 60)) / 1000);
    return {
      state: "now",
      text: `🟢 Encore ${h}h ${m}min ${s}s d'Happy Hour !`,
    };
  } else if (hour >= 0 && hour < 10) {
    // Trop tard dans la nuit ou trop tôt le matin
    return {
      state: "late",
      text: "🔴 Trop tard... Reviens ce soir entre 18h30 et 20h30 😴",
    };
  } else {
    const msToStart = nextStart - now;
    const h = Math.floor(msToStart / (1000 * 60 * 60));
    const m = Math.floor((msToStart % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((msToStart % (1000 * 60)) / 1000);
    return {
      state: "soon",
      text: `🟡 Plus que ${h}h ${m}min ${s}s avant l'Happy Hour`,
    };
  }
}

export default function HappyHourBanner({ happyHour }) {
  const hh = happyHour;

  const bannerClass =
    hh.state === "now"
      ? "bg-green-700 text-green-100"
      : hh.state === "soon"
      ? "bg-yellow-700 text-yellow-100"
      : "bg-red-700 text-red-100";

  return (
    <div className={`text-sm font-medium mb-4 px-4 py-2 rounded ${bannerClass}`}>
      {hh.text}
    </div>
  );
}
