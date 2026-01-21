import { Church, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/logo.jpg';
interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
           {/*  <div className="bg-gradient-to-br from-amber-700 to-amber-900 p-2 rounded-lg">
               <Church className="w-8 h-8 text-white" /> 
            </div> */}

            <div className="">
              {/* <Church className="w-8 h-8 text-white" /> */}
              <img src={logo} alt="Logo" width={80}  />
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-900">Sacré-Cœur d'Akandjé</h1>
              <p className="text-xs text-gray-600">Quasi-Paroisse</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home' ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              {t('nav_home')}
            </button>
            <button
              onClick={() => onNavigate('donate')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'donate' ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              {t('nav_donate')}
            </button>
            <button
              onClick={() => onNavigate('transparency')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'transparency' ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              {t('nav_transparency')}
            </button>
            <button
              onClick={() => onNavigate('sponsors')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'sponsors' ? 'text-amber-700' : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              {t('nav_sponsors')}
            </button>
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
