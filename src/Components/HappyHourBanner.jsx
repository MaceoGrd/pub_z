export function getHappyHourState() {
  const now = new Date();

  // Heure de début et de fin d'Happy Hour pour aujourd'hui
  const start = new Date();
  start.setHours(18, 30, 0, 0);

  const end = new Date();
  end.setHours(20, 30, 0, 0);

  // Heure actuelle en minutes (utile pour comparaison simple)
  const hour = now.getHours();
  const minutes = now.getMinutes();

  // Cas 1 : entre 18h30 et 20h30 → Happy Hour en cours
  if (now >= start && now < end) {
    const msLeft = end - now;
    const h = Math.floor(msLeft / (1000 * 60 * 60));
    const m = Math.floor((msLeft % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((msLeft % (1000 * 60)) / 1000);
    return {
      state: "now",
      text: `🟢 Happy Hour pendant encore ${h}h ${m}min ${s}s !`,
    };
  }

  // Cas 2 : entre 08h00 et 18h30 → Happy Hour dans...
  const morningStart = new Date();
  morningStart.setHours(8, 0, 0, 0);

  if (now >= morningStart && now < start) {
    const msToStart = start - now;
    const h = Math.floor(msToStart / (1000 * 60 * 60));
    const m = Math.floor((msToStart % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((msToStart % (1000 * 60)) / 1000);
    return {
      state: "soon",
      text: `🟡 Happy Hour dans ${h}h ${m}min ${s}s`,
    };
  }

  // Cas 3 : entre 20h30 et 08h00 → Trop tard
  return {
    state: "late",
    text: "🔴 Trop tard... Reviens demain entre 18h30 et 20h30 😴",
  };
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
    <div className={`text-sm font-medium mb-4 px-4 py-2 rounded text-center ${bannerClass}`}>
      {hh.text}
    </div>
  );
}
