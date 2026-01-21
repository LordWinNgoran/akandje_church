import { Building2, TrendingUp, Users, Award, Download, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function CorporateSponsorship() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: TrendingUp,
      title: t('tax_deduction'),
      description: 'Bénéficiez d\'une réduction fiscale avantageuse sur vos contributions',
    },
    {
      icon: Users,
      title: t('visibility'),
      description: 'Visibilité de votre marque auprès de la communauté et sur nos supports',
    },
    {
      icon: Award,
      title: t('csr'),
      description: 'Renforcez votre image RSE et votre impact sociétal',
    },
  ];

  const packages = [
    {
      name: 'Partenaire Bronze',
      amount: '1 000 000 - 4 999 999',
      benefits: [
        'Logo sur le site web',
        'Mention dans les bulletins paroissiaux',
        'Certificat de reconnaissance',
      ],
      gradient: 'from-amber-600 to-amber-700',
    },
    {
      name: 'Partenaire Argent',
      amount: '5 000 000 - 9 999 999',
      benefits: [
        'Tous les avantages Bronze',
        'Logo sur la plaque commémorative',
        'Invitation aux événements VIP',
        'Visite privée du chantier',
      ],
      gradient: 'from-gray-400 to-gray-500',
    },
    {
      name: 'Partenaire Or',
      amount: '10 000 000+',
      benefits: [
        'Tous les avantages Argent',
        'Plaque dédiée dans l\'église',
        'Partenaire officiel du projet',
        'Couverture médiatique',
      ],
      gradient: 'from-yellow-500 to-yellow-600',
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
            <Building2 className="w-5 h-5" />
            <span className="font-semibold">{t('corporate_sponsorship')}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('corporate_subtitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participez à un projet d'envergure qui marquera durablement le paysage d'Akandjé
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-amber-700 to-amber-900 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Niveaux de Partenariat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 p-6 hover:border-amber-300 hover:shadow-lg transition-all"
              >
                <div className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${pkg.gradient} text-white font-bold text-sm mb-4`}>
                  {pkg.name}
                </div>
                <div className="mb-6">
                  <p className="text-2xl font-bold text-gray-900">{pkg.amount}</p>
                  <p className="text-sm text-gray-600">FCFA</p>
                </div>
                <ul className="space-y-3">
                  {pkg.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <div className="bg-green-100 rounded-full p-1 mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-700 to-amber-900 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Intéressé par un partenariat?</h3>
            <p className="text-amber-100 text-lg mb-8">
              Contactez-nous pour discuter d'une collaboration sur mesure adaptée à vos objectifs
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-amber-900 px-8 py-4 rounded-lg font-bold hover:bg-amber-50 transition-colors inline-flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>{t('download_brochure')}</span>
              </button>
              <button className="bg-amber-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-900 transition-colors inline-flex items-center space-x-2 border-2 border-amber-600">
                <Mail className="w-5 h-5" />
                <span>{t('contact_us')}</span>
              </button>
            </div>
            <div className="mt-8 pt-8 border-t border-amber-600">
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-amber-200 mb-1">Email</p>
                  <p className="font-semibold">contact@sacrecoeur-akanje.ci</p>
                </div>
                <div>
                  <p className="text-amber-200 mb-1">Téléphone</p>
                  <p className="font-semibold">+225 XX XX XX XX XX</p>
                </div>
                <div>
                  <p className="text-amber-200 mb-1">Adresse</p>
                  <p className="font-semibold">Akandjé, Côte d'Ivoire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
