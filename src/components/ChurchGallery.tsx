import { Camera, MapPin } from 'lucide-react';
import parishCommunityImage from '../assets/parish-community.jpeg';
import heroHouseImage from '../assets/hero-house.jpeg';
import parishMassImage from '../assets/parish-mass.jpeg';
import parishEucharistImage from '../assets/parish-eucharist.jpeg';

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4954.835229186238!2d-3.9056081250160446!3d5.395096894583944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc18d5fa516b639%3A0x2480fee691e57bec!2sParoisse%20Sacr%C3%A9-C%C5%93ur%20de%20J%C3%A9sus%20d'Akandje%201%262!5e1!3m2!1sfr!2sci!4v1789842285913!5m2!1sfr!2sci";

export default function ChurchGallery() {
  const images = [
    {
      title: 'Communauté en prière',
      description: 'Une paroisse vivante autour de la foi et du service.',
      src: parishCommunityImage,
      alt: "Communauté de la Quasi-Paroisse Sacré-Cœur d'Akandjé",
    },
    {
      title: 'Pasteurs et fidèles',
      description: 'La mission pastorale se vit dans la proximité.',
      src: heroHouseImage,
      alt: "Prêtres et fidèles à Sacré-Cœur d'Akandjé",
    },
    {
      title: 'Célébration eucharistique',
      description: 'Les messes rythment la vie spirituelle de la communauté.',
      src: parishMassImage,
      alt: "Messe à la Quasi-Paroisse Sacré-Cœur d'Akandjé",
    },
    {
      title: 'Communion',
      description: 'La vie sacramentelle est au cœur de la paroisse.',
      src: parishEucharistImage,
      alt: "Distribution de la communion à Sacré-Cœur d'Akandjé",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-amber-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-amber-800">
            <Camera className="h-5 w-5" />
            <span className="font-semibold">Photos de la paroisse</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            Sacré-Cœur d'Akandjé en images
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
            Quelques moments de célébration, de communion et de vie communautaire.
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {images.map((image) => (
            <article
              key={image.title}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-75" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{image.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{image.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-8 rounded-lg border border-amber-100 bg-white p-8 shadow-xl md:grid-cols-2 md:p-12">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-amber-800">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold">Localisation</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Au cœur d'Akandjé</h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              La quasi-paroisse rassemble les fidèles d'Akandjé 1 & 2 et des environs autour
              des célébrations, des sacrements, des activités pastorales et des projets communs.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-50 shadow-sm">
            <iframe
              src={mapEmbedUrl}
              title="Carte de la Quasi-Paroisse Sacré-Cœur d'Akandjé 1 & 2"
              className="h-[320px] w-full border-0 md:h-full md:min-h-[360px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
