// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from './Components/Home';
import Menu from './Components/Menu';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useI18n } from "./i18n/I18nContext";

function LanguageFromPathSync() {
  const location = useLocation();
  const { setLanguage } = useI18n();

  useEffect(() => {
    if (location.pathname.startsWith("/en")) {
      setLanguage("en");
      return;
    }
    if (location.pathname.startsWith("/fr")) {
      setLanguage("fr");
    }
  }, [location.pathname, setLanguage]);

  return null;
}

function App() {
  return (
    <Router>
      <LanguageFromPathSync />
      <Header />
      <main className="min-h-screen bg-zinc-900 text-white pt-4 pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/fr" element={<Home />} />
            <Route path="/fr/menu" element={<Menu />} />
            <Route path="/en" element={<Home />} />
            <Route path="/en/menu" element={<Menu />} />
          </Routes>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
