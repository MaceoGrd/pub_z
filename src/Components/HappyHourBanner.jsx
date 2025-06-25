export function getHappyHourState() {
  const now = new Date();

  const start = new Date();
  start.setHours(18, 30, 0, 0);

  const end = new Date();
  end.setHours(20, 30, 0, 0);

  const nextStart = new Date();
  nextStart.setDate(now.getHours() >= 20 ? now.getDate() + 1 : now.getDate());
  nextStart.setHours(18, 30, 0, 0);

  if (now >= start && now < end) {
    const msLeft = end - now;
    const minutesLeft = Math.floor(msLeft / 60000);
    const secondsLeft = Math.floor((msLeft % 60000) / 1000);
    return {
      state: "now",
      text: `🟢 Il reste ${minutesLeft}min ${secondsLeft}s avant la fin de l'Happy Hour`,
    };
  } else if (now >= end && now.getHours() < 2 || now.getHours() >= 2 && now < start) {
    const msToStart = nextStart - now;
    const h = Math.floor(msToStart / (1000 * 60 * 60));
    const m = Math.floor((msToStart % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((msToStart % (1000 * 60)) / 1000);
    return {
      state: "soon",
      text: `🟡 Il reste ${h}h ${m}min ${s}s avant l'Happy Hour`,
    };
  } else {
    return {
      state: "late",
      text: "🔴 Trop tard, reviens demain, 18h30 - 20h30",
    };
  }
}

export default function HappyHourBanner() {
  const hh = getHappyHourState();

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
