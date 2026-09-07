import { Award, Building2, Check, Download, Mail, Phone, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function CorporateSponsorship() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: TrendingUp,
      title: t('tax_deduction'),
      description: "Valorisez votre contribution dans un cadre de mécénat intégrant les possibilités de déduction fiscale applicables.",
    },
    {
      icon: Users,
      title: t('visibility'),
      description: 'Associez votre image à un projet paroissial fédérateur auprès des familles, fidèles et acteurs locaux.',
    },
    {
      icon: Award,
      title: t('csr'),
      description: 'Renforcez votre engagement RSE par un soutien concret à la vie spirituelle et sociale d’Akandjé.',
    },
  ];

  const packages = [
    {
      name: 'Partenaire Bronze',
      amount: '1 000 000 - 4 999 999',
      benefits: [
        'Soutien spirituel de la communauté',
        'Logo sur le site web',
        'Certificat de reconnaissance',
        'Collaboration valable pendant un an',
      ],
      gradient: 'from-amber-600 to-amber-700',
    },
    {
      name: 'Partenaire Argent',
      amount: '5 000 000 - 9 999 999',
      benefits: [
        'Tous les avantages Bronze',
        'Logo sur la plaque commémorative',
        'Invitation aux événements de la paroisse',
        'Collaboration valable pendant un an',
      ],
      gradient: 'from-gray-500 to-gray-600',
    },
    {
      name: 'Partenaire Or',
      amount: '10 000 000+',
      benefits: [
        'Tous les avantages Argent',
        'Plaque dédiée dans l’espace du projet',
        'Partenaire officiel du projet presbytère',
        'Collaboration valable pendant un an',
      ],
      gradient: 'from-yellow-500 to-yellow-600',
    },
  ];

  return (
    <main className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-amber-800">
            <Building2 className="h-5 w-5" />
            <span className="font-semibold">Menu Mécène</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            Déduction fiscale et engagement RSE
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
            Devenez mécène du projet presbytère et associez votre entreprise à une œuvre
            durable au service de la mission pastorale.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="rounded-lg bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-amber-700 to-amber-900">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{benefit.title}</h2>
                <p className="mt-3 text-gray-600">{benefit.description}</p>
              </article>
            );
          })}
        </div>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-xl md:p-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Niveaux de partenariat
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className="rounded-lg border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 transition-all hover:border-amber-300 hover:shadow-lg"
              >
                <div className={`mb-4 inline-flex rounded-full bg-gradient-to-r ${pkg.gradient} px-4 py-2 text-sm font-bold text-white`}>
                  {pkg.name}
                </div>
                <div className="mb-6">
                  <p className="text-2xl font-bold text-gray-900">{pkg.amount}</p>
                  <p className="text-sm text-gray-600">FCFA</p>
                </div>
                <ul className="space-y-3">
                  {pkg.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <span className="mt-0.5 rounded-full bg-green-100 p-1">
                        <Check className="h-3 w-3 text-green-700" />
                      </span>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-lg bg-gradient-to-r from-amber-700 to-amber-900 p-8 text-white shadow-2xl md:p-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold">Intéressé par un partenariat ?</h2>
            <p className="mt-4 text-lg text-amber-100">
              Contactez la quasi-paroisse pour discuter d’une collaboration adaptée à vos objectifs
              de mécénat, de visibilité et de responsabilité sociétale.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-amber-900 transition-colors hover:bg-amber-50">
                <Download className="h-5 w-5" />
                <span>{t('download_brochure')}</span>
              </button>
              <a
                href="tel:+2250707832642"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-amber-600 bg-amber-800 px-8 py-4 font-bold text-white transition-colors hover:bg-amber-900"
              >
                <Phone className="h-5 w-5" />
                <span>07 07 832 642</span>
              </a>
            </div>
            <div className="mt-8 grid gap-6 border-t border-amber-600 pt-8 text-sm md:grid-cols-3">
              <div>
                <p className="mb-1 text-amber-200">Email</p>
                <p className="font-semibold">contact@sacrecoeur-akanje.ci</p>
              </div>
              <div>
                <p className="mb-1 text-amber-200">Téléphone / WhatsApp</p>
                <p className="font-semibold">07 07 832 642</p>
              </div>
              <div>
                <p className="mb-1 text-amber-200">Adresse</p>
                <p className="font-semibold">Akandjé, Côte d'Ivoire</p>
              </div>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-100">
              <Mail className="h-4 w-4" />
              <span>{t('contact_us')}</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
