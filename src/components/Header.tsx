import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/logo.jpg';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const navItems = [
    { page: 'home', label: t('nav_home') },
    { page: 'spiritual', label: t('nav_spiritual') },
    { page: 'projects', label: t('nav_projects') },
    { page: 'transparency', label: t('nav_transparency') },
    { page: 'sponsors', label: t('nav_sponsors') },
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-24 py-2">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div>
              <img src={logo} alt="Logo Sacré-Cœur d'Akandjé" className="h-16 w-16 object-contain" />
            </div>

            <div className="leading-tight">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                Église Catholique de l’Archidiocèse d’Abidjan
              </p>
              <h1 className="text-xl font-bold text-gray-900">Sacré-Cœur d'Akandjé</h1>
              <p className="text-xs text-gray-600">Quasi-Paroisse</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-5">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.page ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Globe className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700 uppercase">{language}</span>
            </button>
            <button
              onClick={() => onNavigate('donate')}
              className="bg-gradient-to-r from-amber-700 to-amber-900 text-white px-6 py-2.5 rounded-lg font-medium hover:from-amber-800 hover:to-amber-950 transition-all shadow-md hover:shadow-lg"
            >
              {t('donate_now')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
