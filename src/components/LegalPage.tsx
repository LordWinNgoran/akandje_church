import { Scale } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LegalPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center space-x-3 mb-8">
            <Scale className="w-10 h-10 text-amber-700" />
            <h1 className="text-4xl font-bold text-gray-900">
              {language === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'Identification' : 'Identification'}
              </h2>
              <p>
                <strong>Nom de l'organisation :</strong> Quasi-Paroisse Sacré-Cœur d'Akandjé
              </p>
              <p>
                <strong>Siège social :</strong> Akandjé, Abidjan, Côte d'Ivoire
              </p>
              <p>
                <strong>Représentant légal :</strong> Révérend Père Administrateur
              </p>
              <p>
                <strong>Autorité de tutelle :</strong> Archidiocèse d'Abidjan
              </p>
              <p>
                <strong>Email :</strong> contact@sacrecoeur-akanje.ci
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'Hébergement du site' : 'Website Hosting'}
              </h2>
              <p>
                {language === 'fr'
                  ? 'Ce site est hébergé de manière sécurisée avec des standards de haute disponibilité pour garantir l\'accès permanent aux services de dons en ligne.'
                  : 'This website is securely hosted with high availability standards to ensure permanent access to online donation services.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'Propriété intellectuelle' : 'Intellectual Property'}
              </h2>
              <p>
                {language === 'fr'
                  ? 'L\'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de la Quasi-Paroisse Sacré-Cœur d\'Akandjé ou de ses partenaires. Toute reproduction, distribution, modification ou exploitation sans autorisation préalable est strictement interdite.'
                  : 'All content on this site (text, images, graphics, logo, icons, etc.) is the exclusive property of the Sacred Heart Quasi-Parish of Akandjé or its partners. Any reproduction, distribution, modification or exploitation without prior authorization is strictly prohibited.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'Collecte de dons' : 'Donation Collection'}
              </h2>
              <p>
                {language === 'fr'
                  ? 'Les dons collectés via cette plateforme sont exclusivement destinés au financement du presbytère, des projets paroissiaux et des besoins validés par la quasi-paroisse. Tous les dons font l\'objet d\'un suivi rigoureux et sont soumis à un contrôle comptable strict.'
                  : 'Donations collected through this platform are exclusively intended to finance the presbytery, parish projects and needs approved by the quasi-parish. All donations are rigorously tracked and subject to strict accounting control.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'Reçus fiscaux' : 'Tax Receipts'}
              </h2>
              <p>
                {language === 'fr'
                  ? 'Conformément à la législation en vigueur en Côte d\'Ivoire, la Quasi-Paroisse délivre des reçus fiscaux pour tous les dons éligibles. Ces documents permettent aux donateurs de bénéficier d\'avantages fiscaux selon les dispositions légales applicables.'
                  : 'In accordance with the legislation in force in Côte d\'Ivoire, the Quasi-Parish issues tax receipts for all eligible donations. These documents allow donors to benefit from tax advantages according to applicable legal provisions.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'Limitation de responsabilité' : 'Limitation of Liability'}
              </h2>
              <p>
                {language === 'fr'
                  ? 'La Quasi-Paroisse s\'efforce de fournir des informations exactes et à jour sur ce site. Toutefois, elle ne peut être tenue responsable des erreurs, omissions ou résultats obtenus par l\'utilisation de ces informations. Les liens vers d\'autres sites ne relèvent pas de notre responsabilité.'
                  : 'The Quasi-Parish strives to provide accurate and up-to-date information on this site. However, it cannot be held responsible for errors, omissions or results obtained through the use of this information. Links to other sites are not our responsibility.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'Droit applicable' : 'Applicable Law'}
              </h2>
              <p>
                {language === 'fr'
                  ? 'Les présentes mentions légales sont régies par le droit ivoirien. Tout litige relatif à l\'utilisation de ce site sera soumis à la compétence exclusive des tribunaux de Côte d\'Ivoire.'
                  : 'These legal notices are governed by Ivorian law. Any dispute relating to the use of this site shall be subject to the exclusive jurisdiction of the courts of Côte d\'Ivoire.'
                }
              </p>
            </section>

            <section className="bg-amber-50 border-l-4 border-amber-700 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'Contact' : 'Contact'}
              </h2>
              <p>
                {language === 'fr'
                  ? 'Pour toute question concernant ces mentions légales ou l\'utilisation de ce site :'
                  : 'For any questions regarding these legal notices or the use of this site:'
                }
              </p>
              <p className="mt-4">
                <strong>Email :</strong> contact@sacrecoeur-akanje.ci<br />
                <strong>Téléphone :</strong> 07 07 832 642<br />
                <strong>Adresse :</strong> Akandjé, Abidjan, Côte d'Ivoire
              </p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            {language === 'fr' ? 'Dernière mise à jour : Janvier 2025' : 'Last updated: January 2025'}
          </div>
        </div>
      </div>
    </div>
  );
}
