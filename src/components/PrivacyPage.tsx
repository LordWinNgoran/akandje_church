import { Shield, Lock, Eye, Database } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function PrivacyPage() {
  const { language } = useLanguage();

  const sections = [
    {
      icon: Database,
      title_fr: 'Données collectées',
      title_en: 'Data Collected',
      content_fr: 'Nous collectons uniquement les informations nécessaires au traitement de vos dons : nom, prénom, email, téléphone, adresse, et informations de paiement (traitées de manière sécurisée par nos partenaires financiers). Les informations professionnelles (entreprise, profession) sont optionnelles.',
      content_en: 'We only collect information necessary to process your donations: name, email, phone, address, and payment information (securely processed by our financial partners). Professional information (company, profession) is optional.',
    },
    {
      icon: Lock,
      title_fr: 'Sécurité des données',
      title_en: 'Data Security',
      content_fr: 'Vos données sont protégées par des mesures de sécurité conformes aux standards internationaux. Toutes les transactions financières sont cryptées avec le protocole SSL/TLS. Nous utilisons des serveurs sécurisés et des bases de données chiffrées.',
      content_en: 'Your data is protected by security measures compliant with international standards. All financial transactions are encrypted with SSL/TLS protocol. We use secure servers and encrypted databases.',
    },
    {
      icon: Eye,
      title_fr: 'Utilisation des données',
      title_en: 'Data Usage',
      content_fr: 'Vos données sont utilisées exclusivement pour : traiter vos dons, émettre des reçus fiscaux, vous tenir informé de l\'avancement du projet, gérer la reconnaissance des bienfaiteurs. Nous ne vendons jamais vos données à des tiers.',
      content_en: 'Your data is used exclusively to: process your donations, issue tax receipts, keep you informed of project progress, manage benefactor recognition. We never sell your data to third parties.',
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center space-x-3 mb-8">
            <Shield className="w-10 h-10 text-amber-700" />
            <h1 className="text-4xl font-bold text-gray-900">
              {language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
            </h1>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-700 p-6 rounded-lg mb-8">
            <p className="text-gray-800 font-medium">
              {language === 'fr'
                ? 'La protection de vos données personnelles est notre priorité. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.'
                : 'Protecting your personal data is our priority. This policy explains how we collect, use and protect your information.'
              }
            </p>
          </div>

          <div className="space-y-8 mb-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-gradient-to-br from-amber-600 to-amber-800 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {language === 'fr' ? section.title_fr : section.title_en}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {language === 'fr' ? section.content_fr : section.content_en}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'Vos droits' : 'Your Rights'}
              </h2>
              <p>
                {language === 'fr'
                  ? 'Conformément à la réglementation en vigueur, vous disposez des droits suivants :'
                  : 'In accordance with current regulations, you have the following rights:'
                }
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>{language === 'fr' ? 'Droit d\'accès :' : 'Right of access:'}</strong>{' '}
                  {language === 'fr'
                    ? 'Vous pouvez demander une copie de vos données personnelles'
                    : 'You can request a copy of your personal data'
                  }
                </li>
                <li>
                  <strong>{language === 'fr' ? 'Droit de rectification :' : 'Right of rectification:'}</strong>{' '}
                  {language === 'fr'
                    ? 'Vous pouvez corriger des informations inexactes'
                    : 'You can correct inaccurate information'
                  }
                </li>
                <li>
                  <strong>{language === 'fr' ? 'Droit à l\'effacement :' : 'Right to erasure:'}</strong>{' '}
                  {language === 'fr'
                    ? 'Vous pouvez demander la suppression de vos données (sous réserve des obligations légales de conservation)'
                    : 'You can request deletion of your data (subject to legal retention obligations)'
                  }
                </li>
                <li>
                  <strong>{language === 'fr' ? 'Droit d\'opposition :' : 'Right to object:'}</strong>{' '}
                  {language === 'fr'
                    ? 'Vous pouvez refuser certaines utilisations de vos données'
                    : 'You can refuse certain uses of your data'
                  }
                </li>
                <li>
                  <strong>{language === 'fr' ? 'Droit à la portabilité :' : 'Right to portability:'}</strong>{' '}
                  {language === 'fr'
                    ? 'Vous pouvez recevoir vos données dans un format structuré'
                    : 'You can receive your data in a structured format'
                  }
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'Conservation des données' : 'Data Retention'}
              </h2>
              <p>
                {language === 'fr'
                  ? 'Vos données de donation sont conservées pendant la durée légale requise pour les documents comptables et fiscaux (10 ans minimum). Les données de contact peuvent être conservées tant que vous ne demandez pas leur suppression ou que vous restez actif dans notre communauté.'
                  : 'Your donation data is retained for the legal period required for accounting and tax documents (minimum 10 years). Contact data may be retained as long as you do not request deletion or remain active in our community.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'Cookies et technologies similaires' : 'Cookies and Similar Technologies'}
              </h2>
              <p>
                {language === 'fr'
                  ? 'Notre site utilise des cookies essentiels au fonctionnement de la plateforme de dons et à la sécurité des transactions. Nous n\'utilisons pas de cookies publicitaires ou de tracking à des fins commerciales.'
                  : 'Our site uses cookies essential for the operation of the donation platform and the security of transactions. We do not use advertising or tracking cookies for commercial purposes.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'Partage des données' : 'Data Sharing'}
              </h2>
              <p>
                {language === 'fr'
                  ? 'Vos données peuvent être partagées uniquement avec : nos partenaires de paiement sécurisé pour traiter vos transactions, l\'Archidiocèse d\'Abidjan dans le cadre de la supervision ecclésiastique, les autorités fiscales conformément aux obligations légales.'
                  : 'Your data may be shared only with: our secure payment partners to process your transactions, the Archdiocese of Abidjan as part of ecclesiastical supervision, tax authorities in accordance with legal obligations.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'Modifications de cette politique' : 'Changes to This Policy'}
              </h2>
              <p>
                {language === 'fr'
                  ? 'Nous nous réservons le droit de modifier cette politique de confidentialité. Toute modification sera publiée sur cette page avec la date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.'
                  : 'We reserve the right to modify this privacy policy. Any changes will be posted on this page with the update date. We encourage you to check this page regularly.'
                }
              </p>
            </section>
          </div>

          <div className="mt-8 bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'fr' ? 'Contactez-nous' : 'Contact Us'}
            </h3>
            <p className="mb-4">
              {language === 'fr'
                ? 'Pour exercer vos droits ou pour toute question concernant vos données personnelles :'
                : 'To exercise your rights or for any questions regarding your personal data:'
              }
            </p>
            <div className="space-y-2">
              <p><strong>Email :</strong> privacy@sacrecoeur-akanje.ci</p>
              <p><strong>Téléphone :</strong> 07 07 832 642</p>
              <p><strong>Courrier :</strong> Quasi-Paroisse Sacré-Cœur d'Akandjé, Akandjé, Abidjan, Côte d'Ivoire</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            {language === 'fr' ? 'Dernière mise à jour : Janvier 2025' : 'Last updated: January 2025'}
          </div>
        </div>
      </div>
    </div>
  );
}
