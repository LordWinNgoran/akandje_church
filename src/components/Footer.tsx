import { Facebook, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/logo.jpg';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <img src={logo} alt="Logo Sacré-Cœur d'Akandjé" className="h-20 w-20 object-contain" />
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-amber-400">
                  Église Catholique de l’Archidiocèse d’Abidjan
                </p>
                <h3 className="text-xl font-bold">Sacré-Cœur d'Akandjé</h3>
                <p className="text-sm text-gray-400">Quasi-Paroisse</p>
              </div>
            </div>
            <p className="mb-4 max-w-xl text-gray-400">
              Ensemble bâtissons la maison de nos pasteurs : un presbytère construit,
              une mission fortifiée.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-gray-800 p-2 transition-colors hover:bg-amber-700"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/2250707832642"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-gray-800 p-2 transition-colors hover:bg-amber-700"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">{t('footer_contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-amber-500" />
                <p className="text-gray-400">Akandjé, Abidjan<br />Côte d'Ivoire</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-amber-500" />
                <p className="text-gray-400">07 07 832 642</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-amber-500" />
                <p className="text-gray-400">contact@sacrecoeur-akanje.ci</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('spiritual')}
                  className="text-gray-400 transition-colors hover:text-amber-500"
                >
                  {t('nav_spiritual')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="text-gray-400 transition-colors hover:text-amber-500"
                >
                  {t('nav_projects')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sponsors')}
                  className="text-gray-400 transition-colors hover:text-amber-500"
                >
                  {t('nav_sponsors')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-gray-400 transition-colors hover:text-amber-500"
                >
                  {t('footer_about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('legal')}
                  className="text-gray-400 transition-colors hover:text-amber-500"
                >
                  {t('footer_legal')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 Quasi-Paroisse Sacré-Cœur d'Akandjé. Tous droits réservés.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Projet soutenu par l’Archidiocèse d’Abidjan
          </p>
        </div>
      </div>
    </footer>
  );
}
