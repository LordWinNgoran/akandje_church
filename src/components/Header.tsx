import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/logo.jpg';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { page: 'home', label: t('nav_home') },
    { page: 'newcomer', label: t('nav_newcomer') },
    { page: 'spiritual', label: t('nav_spiritual') },
    { page: 'projects', label: t('nav_projects') },
    { page: 'transparency', label: t('nav_transparency') },
    { page: 'sponsors', label: t('nav_sponsors') },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-sm lg:static">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between gap-3 py-2 sm:min-h-24">
          <div className="flex min-w-0 cursor-pointer items-center gap-2 sm:gap-3" onClick={() => handleNavigate('home')}>
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo Sacré-Cœur d'Akandjé" className="h-12 w-12 object-contain sm:h-16 sm:w-16" />
            </div>

            <div className="min-w-0 leading-tight">
              <p className="mb-1 truncate text-[9px] font-semibold uppercase tracking-wide text-amber-700 sm:text-[10px]">
                ARCHIDIOCESE D'ABIDJAN
              </p>
              <h1 className="truncate text-sm font-bold text-gray-900 sm:text-xl">Sacré-Coeur d'Akandjé 1&2</h1>
              <p className="text-xs text-gray-600">Quasi-Paroisse</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.page ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-shrink-0 items-center gap-2 sm:gap-4">
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-gray-100"
            >
              <Globe className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700 uppercase">{language}</span>
            </button>
            <button
              onClick={() => handleNavigate('donate')}
              className="hidden rounded-lg bg-gradient-to-r from-amber-700 to-amber-900 px-6 py-2.5 font-medium text-white shadow-md transition-all hover:from-amber-800 hover:to-amber-950 hover:shadow-lg sm:inline-flex"
            >
              {t('donate_now')}
            </button>
            <button
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-800 transition-colors hover:border-amber-300 hover:bg-amber-50 lg:hidden"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="border-t border-gray-100 py-3 lg:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={`rounded-lg px-4 py-3 text-left text-sm font-semibold transition-colors ${
                    currentPage === item.page
                      ? 'bg-amber-50 text-amber-800'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-amber-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavigate('donate')}
                className="rounded-lg bg-amber-800 px-4 py-3 text-left text-sm font-bold text-white transition-colors hover:bg-amber-900 sm:hidden"
              >
                {t('donate_now')}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
