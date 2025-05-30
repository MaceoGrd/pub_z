import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-zinc-900 text-white p-4 flex items-center justify-between">
      <img src="/Logo.png" alt="Logo" className="h-14 sm:h-20 md:h-24" />
      <nav className="space-x-4 text-sm sm:text-base">
        <Link to="/" className="hover:underline">Accueil</Link>
        <Link to="/menu" className="hover:underline">Menu</Link>
      </nav>
    </header>
  );
}
