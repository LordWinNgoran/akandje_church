import {
  ArrowRight,
  BookOpen,
  Droplets,
  HeartHandshake,
  HeartPulse,
  MessageCircle,
  Phone,
  ScrollText,
  ShieldCheck,
} from 'lucide-react';
import parishBaptismImage from '../assets/parish-baptism.jpeg';
import parishEucharistImage from '../assets/parish-eucharist.jpeg';

const sacraments = [
  {
    title: 'La catéchèse aux sacrements',
    description: 'Parcours de formation pour préparer les enfants, les jeunes et les adultes à recevoir les sacrements.',
    icon: BookOpen,
    cta: true,
  },
  {
    title: 'Le sacrement de Baptême',
    description: 'Accueil dans la vie chrétienne et accompagnement des familles dans la préparation baptismale.',
    icon: Droplets,
    cta: true,
  },
  {
    title: 'Le sacrement de Mariage',
    description: 'Préparation humaine, spirituelle et pastorale des couples qui souhaitent s’engager devant Dieu.',
    icon: HeartHandshake,
    cta: true,
  },
  {
    title: 'Le sacrement des Malades',
    description: 'Présence de l’Église auprès des personnes malades, fragilisées ou âgées.',
    icon: HeartPulse,
    cta: false,
  },
  {
    title: 'Le sacrement de la Réconciliation',
    description: 'Temps de confession et d’accompagnement spirituel pour revenir à la paix avec Dieu.',
    icon: ShieldCheck,
    cta: false,
  },
  {
    title: 'Les funérailles chrétiennes',
    description: 'Accompagnement des familles dans la prière, l’espérance et la célébration des obsèques.',
    icon: ScrollText,
    cta: false,
  },
];

export default function SpiritualLifePage() {
  return (
    <main className="bg-white pt-24">
      <section className="bg-gray-950 text-white">
        <div className="grid min-h-[420px] lg:grid-cols-2">
          <div className="flex items-center px-4 py-16 sm:px-6 lg:ml-auto lg:w-full lg:max-w-3xl lg:px-8">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-amber-300">
                Vie spirituelle
              </p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                Les sacrements et l’accompagnement pastoral
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-200">
                La Quasi-Paroisse Sacré-Cœur d'Akandjé accompagne les fidèles dans la
                catéchèse, la prière, les sacrements et les grandes étapes de la vie chrétienne.
              </p>
            </div>
          </div>
          <div className="relative min-h-[280px]">
            <img
              src={parishBaptismImage}
              alt="Célébration du baptême à Sacré-Cœur d'Akandjé"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/75 via-gray-950/15 to-transparent lg:bg-gradient-to-l" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sacraments.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-5 inline-flex rounded-lg bg-amber-100 p-3">
                    <Icon className="h-6 w-6 text-amber-800" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>
                  <p className="mt-3 text-gray-600">{item.description}</p>
                  {item.cta && (
                    <button className="mt-5 inline-flex items-center gap-2 rounded-lg border border-amber-300 px-4 py-2 font-semibold text-amber-800 transition-colors hover:bg-amber-50">
                      En savoir plus
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900">Vous êtes nouveau ?</h2>
            <p className="mt-4 text-gray-600">
              Nous vous souhaitons la bienvenue à Sacré-Cœur d'Akandjé 1 & 2. Vous pouvez
              contacter la paroisse pour vous enregistrer et rejoindre une communauté.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+2250707832642"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
              >
                <Phone className="h-5 w-5" />
                07 07 832 642
              </a>
              <a
                href="https://wa.me/2250707832642"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-800 transition-colors hover:border-amber-400 hover:text-amber-800"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-lg">
            <img
              src={parishEucharistImage}
              alt="Distribution de la communion à Sacré-Cœur d'Akandjé"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h2 className="text-3xl font-bold">Une communauté en prière</h2>
              <p className="mt-3 max-w-xl text-white/85">
                La vie spirituelle se construit dans la célébration, le service et l’accompagnement des familles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
