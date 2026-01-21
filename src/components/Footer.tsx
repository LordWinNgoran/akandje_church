import { Church, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/logo.jpg';
interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
               <div className="">
              {/* <Church className="w-8 h-8 text-white" /> */}
              <img src={logo} alt="Logo" width={150}  />
            </div>
              <div>
                <h3 className="text-xl font-bold">Sacré-Cœur d'Akandjé</h3>
                <p className="text-sm text-gray-400">Quasi-Paroisse</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Un projet ambitieux de construction d'une église moderne et accueillante au cœur d'Akandjé,
              symbole de foi et de rassemblement pour notre communauté.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-amber-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-amber-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-amber-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer_contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <p className="text-gray-400">Akandjé, Abidjan<br />Côte d'Ivoire</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <p className="text-gray-400">+225 XX XX XX XX XX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <p className="text-gray-400">contact@sacrecoeur-akanje.ci</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  {t('footer_about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('transparency')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  {t('nav_transparency')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('legal')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  {t('footer_legal')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  {t('footer_privacy')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Quasi-Paroisse Sacré-Cœur d'Akandjé. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Projet soutenu par l'Archidiocèse d'Abidjan
          </p>
        </div>
      </div>
    </footer>
  );
}
