import { Church, Heart, Users, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import parishPriestsImage from '../assets/parish-priests.jpeg';

export default function AboutPage() {
  const { language } = useLanguage();

  const values = [
    {
      icon: Heart,
      title_fr: 'Foi et Communion',
      title_en: 'Faith and Communion',
      description_fr: 'Rassembler la communauté autour des valeurs chrétiennes et de l\'amour du Christ',
      description_en: 'Bringing the community together around Christian values and the love of Christ',
      color: 'from-rose-500 to-rose-600',
    },
    {
      icon: Users,
      title_fr: 'Communauté Inclusive',
      title_en: 'Inclusive Community',
      description_fr: 'Accueillir tous les fidèles dans un esprit de fraternité et de partage',
      description_en: 'Welcoming all believers in a spirit of brotherhood and sharing',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Target,
      title_fr: 'Mission Pastorale',
      title_en: 'Pastoral Mission',
      description_fr: 'Soutenir les prêtres et les services paroissiaux dans un cadre digne et durable',
      description_en: 'Supporting priests and parish services in a dignified and lasting setting',
      color: 'from-amber-500 to-amber-600',
    },
  ];

  const timeline = [
    {
      year: '2023',
      title_fr: 'Création de la Quasi-Paroisse',
      title_en: 'Establishment of the Quasi-Parish',
      description_fr: 'Reconnaissance officielle par l\'Archidiocèse d\'Abidjan',
      description_en: 'Official recognition by the Archdiocese of Abidjan',
    },
    {
      year: '2024',
      title_fr: 'Lancement des Projets Paroissiaux',
      title_en: 'Launch of Parish Projects',
      description_fr: 'Mobilisation de la communauté autour des besoins pastoraux prioritaires',
      description_en: 'Community mobilization around priority pastoral needs',
    },
    {
      year: '2025',
      title_fr: 'Projet Presbytère',
      title_en: 'Presbytery Project',
      description_fr: 'Mise en avant de la maison des prêtres et de son rôle dans la mission paroissiale',
      description_en: 'Highlighting the priests’ residence and its role in the parish mission',
    },
    {
      year: '2026',
      title_fr: 'Poursuite de la Mission',
      title_en: 'Continuing the Mission',
      description_fr: 'Accueil, information, sacrements et mobilisation des bienfaiteurs',
      description_en: 'Welcome, information, sacraments and benefactor mobilization',
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="relative bg-gradient-to-br from-amber-900 to-amber-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Church className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {language === 'fr' ? 'À Propos de la Quasi-Paroisse' : 'About the Quasi-Parish'}
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              {language === 'fr'
                ? 'La Quasi-Paroisse Sacré-Cœur d\'Akandjé : Un projet de foi, d\'excellence et de communion'
                : 'The Sacred Heart Quasi-Parish of Akandjé: A project of faith, excellence and communion'
              }
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === 'fr' ? 'Notre Histoire' : 'Our Story'}
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                La Quasi-Paroisse Sacré-Cœur d'Akandjé est née de la volonté de créer un centre spirituel
                au cœur d'un quartier résidentiel en pleine expansion à Abidjan. Reconnue officiellement
                par l'Archidiocèse d'Abidjan, notre communauté grandit rapidement.
              </p>
              <p>
                Le projet du presbytère représente une étape essentielle : offrir au curé et aux
                prêtres affectés à la paroisse une résidence stable, digne, sécurisée et proche de
                l’église afin de renforcer leur disponibilité pastorale.
              </p>
              <p>
                Grâce à la générosité de nos bienfaiteurs et au soutien de la communauté, nous
                construisons ensemble un héritage spirituel durable pour Akandjé et ses environs.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={parishPriestsImage}
                alt="Prêtres et fidèles de la Quasi-Paroisse Sacré-Cœur d'Akandjé"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            {language === 'fr' ? 'Nos Valeurs' : 'Our Values'}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {language === 'fr'
              ? 'Les principes qui guident notre mission et notre communauté'
              : 'The principles guiding our mission and community'
            }
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {language === 'fr' ? value.title_fr : value.title_en}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'fr' ? value.description_fr : value.description_en}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            {language === 'fr' ? 'Notre Parcours' : 'Our Journey'}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {language === 'fr'
              ? 'Les étapes clés de la réalisation de notre projet'
              : 'Key milestones in the realization of our project'
            }
          </p>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-600 to-amber-800"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 md:px-8">
                    <div
                      className={`bg-white rounded-xl shadow-lg p-6 ${
                        index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      <div className="inline-block bg-amber-700 text-white px-4 py-2 rounded-full font-bold mb-3">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {language === 'fr' ? item.title_fr : item.title_en}
                      </h3>
                      <p className="text-gray-600">
                        {language === 'fr' ? item.description_fr : item.description_en}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-700 rounded-full border-4 border-white shadow-lg"></div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
