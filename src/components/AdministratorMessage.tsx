import { HeartHandshake, Quote } from 'lucide-react';
import administratorPhoto from '../assets/administrator-photo.jpeg';

const messageParagraphs = [
  'C’est avec une grande joie que je vous accueille sur cette plateforme, conçue pour renforcer notre communion et répondre à la vision diocésaine d’une Église synodale, autonome et au service de tous.',
  'Cet espace est le vôtre, que vous soyez paroissien, membre de la diaspora, croyant, personne en quête de foi ou simple visiteur. Tous, nous sommes accueillis dans le Sacré-Cœur de Jésus, source inépuisable d’amour, de consolation et d’espérance.',
  'C’est cet amour qui nous inspire à bâtir, à Akandjé I et II, un lieu de prière digne et un presbytère garantissant une présence pastorale permanente. Par votre générosité, vous contribuez concrètement à la réalisation de ces projets et au rayonnement de l’Évangile dans notre communauté.',
  'Je vous remercie de tout cœur pour votre confiance et votre soutien. Que le Cœur immaculé de Marie vous comble de grâces et que le Sacré-Cœur de Jésus vous garde et vous bénisse, ainsi que vos familles.',
];

export default function AdministratorMessage() {
  return (
    <section className="bg-gradient-to-br from-white via-stone-50 to-amber-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-stone-200/80 bg-white shadow-[0_24px_70px_rgba(31,41,55,0.10)]">
          <div className="grid lg:grid-cols-[380px_1fr]">
            <aside className="bg-stone-900 lg:relative lg:min-h-full">
              <div className="relative min-h-[360px] sm:min-h-[440px] lg:absolute lg:inset-0 lg:min-h-full">
                <img
                  src={administratorPhoto}
                  alt="Révérend Père Arnaud ASSONHON"
                  className="absolute inset-0 h-full w-full object-cover object-center brightness-105 contrast-105 saturate-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-black/10 lg:bg-gradient-to-t lg:from-black/80 lg:via-black/20 lg:to-black/10" />

                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-amber-900 shadow-sm backdrop-blur">
                  <HeartHandshake className="h-4 w-4" />
                  Accueil pastoral
                </div>

                <div className="absolute inset-x-0 bottom-0 hidden p-6 text-white sm:p-8 lg:block">
                  <p className="text-lg font-bold leading-snug">
                    Révérend Père Arnaud ASSONHON
                  </p>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/85">
                    Administrateur de la Quasi-Paroisse Sacré-Cœur d’Akandjé I et II
                  </p>
                </div>
              </div>

              <div className="bg-white px-6 py-5 text-gray-900 lg:hidden">
                <p className="text-lg font-bold leading-snug">
                  Révérend Père Arnaud ASSONHON
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Administrateur de la Quasi-Paroisse Sacré-Cœur d’Akandjé I et II
                </p>
              </div>
            </aside>

            <article className="relative p-7 sm:p-9 lg:p-12">
              <Quote className="absolute right-7 top-7 h-12 w-12 text-amber-100 sm:right-10 sm:top-10" />

              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-wide text-amber-800">
                  Le mot du Père Administrateur
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                  Chers frères et sœurs, chers amis du Sacré-Cœur d'Akandjé,
                </h2>

                <div className="mt-7 space-y-4 text-[15.5px] leading-7 text-gray-700 sm:text-base">
                  {messageParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 border-t border-stone-200 pt-6">
                  <p className="text-gray-700">Avec toute mon affection pastorale,</p>
                  <div className="mt-4 rounded-lg border-l-4 border-amber-700 bg-amber-50/70 px-5 py-4">
                    <p className="font-bold text-gray-900">
                      Révérend Père Arnaud ASSONHON
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      Administrateur de la Quasi-Paroisse Sacré-Cœur d’Akandjé I et II
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
