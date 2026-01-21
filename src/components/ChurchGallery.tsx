import { Camera, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ChurchGallery() {
  const { language } = useLanguage();

  const images = [
    {
      title_fr: 'Vue Architecturale',
      title_en: 'Architectural View',
      description_fr: 'Design moderne et inspirant',
      description_en: 'Modern and inspiring design',
      icon: '🏛️',
    },
    {
      title_fr: 'Intérieur Lumineux',
      title_en: 'Bright Interior',
      description_fr: 'Espace accueillant pour la prière',
      description_en: 'Welcoming space for prayer',
      icon: '✨',
    },
    {
      title_fr: 'Vitraux Artistiques',
      title_en: 'Artistic Stained Glass',
      description_fr: 'Œuvres d\'art lumineuses',
      description_en: 'Luminous works of art',
      icon: '🎨',
    },
    {
      title_fr: 'Vue Extérieure',
      title_en: 'Exterior View',
      description_fr: 'Façade élégante et moderne',
      description_en: 'Elegant and modern facade',
      icon: '⛪',
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
            <Camera className="w-5 h-5" />
            <span className="font-semibold">Galerie du Projet</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {language === 'fr' ? 'Découvrez Notre Vision' : 'Discover Our Vision'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'fr'
              ? 'Un aperçu de la future Église Sacré-Cœur d\'Akandjé, un lieu de rassemblement et de spiritualité'
              : 'A glimpse of the future Sacred Heart Church of Akandjé, a place of gathering and spirituality'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 via-amber-50 to-white flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="text-8xl transform group-hover:scale-110 transition-transform duration-500">
                  {image.icon}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Camera className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === 'fr' ? image.title_fr : image.title_en}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'fr' ? image.description_fr : image.description_en}
                </p>
              </div>

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-amber-800">
                Prochainement
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-amber-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Localisation</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Au Cœur d'Akandjé
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Idéalement située dans le quartier résidentiel d'Akandjé à Abidjan,
                notre future église sera facilement accessible et constituera un
                centre spirituel majeur pour toute la communauté.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Akandjé, Abidjan</p>
                    <p className="text-sm text-gray-600">Quartier résidentiel premium</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <svg className="w-5 h-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Accessible</p>
                    <p className="text-sm text-gray-600">Transport public et parking disponibles</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-20 h-20 text-amber-700 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-gray-900">Carte Interactive</p>
                  <p className="text-sm text-gray-600 mt-2">Disponible prochainement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
