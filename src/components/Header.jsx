// src/components/Header.jsx
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold">Bar XYZ</h1>
      <nav className="space-x-6">
        <Link
          to="/"
          className={pathname === '/' ? 'font-bold underline' : 'hover:underline'}
        >
          Accueil
        </Link>
        <Link
          to="/menu"
          className={pathname === '/menu' ? 'font-bold underline' : 'hover:underline'}
        >
          Carte
        </Link>
      </nav>
    </header>
  );
}
