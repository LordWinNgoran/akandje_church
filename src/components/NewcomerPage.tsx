import { Church, HeartHandshake, MessageCircle, Phone, UserPlus, Users } from 'lucide-react';

const newcomerSteps = [
  'Vous présenter au secrétariat de la Quasi-paroisse pour vous faire connaître.',
  'Partager vos coordonnées afin de recevoir les informations pastorales utiles.',
  'Être orienté vers une CEB, un groupe, un mouvement ou un service selon votre disponibilité.',
  'Demander un accompagnement pour les sacrements, la catéchèse ou la vie de prière.',
];

export default function NewcomerPage() {
  return (
    <main className="bg-white pt-[8.5rem] lg:pt-0">
      <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-amber-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-amber-100 backdrop-blur">
              <UserPlus className="h-5 w-5" />
              Nouveau venu
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Bienvenue à Sacré-Cœur d'Akandjé 1 & 2
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-200">
              Que vous soyez nouveau dans le quartier, de passage ou en recherche d'une communauté,
              la Quasi-paroisse vous accueille et vous accompagne dans votre intégration.
            </p>
          </div>

          <div className="rounded-lg border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur sm:p-8">
            <div className="mb-6 flex items-start gap-4">
              <div className="rounded-lg bg-amber-300/20 p-3 text-amber-200">
                <HeartHandshake className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Contact d'accueil</h2>
                <p className="mt-2 text-gray-200">
                  Pour toute première démarche, contactez le secrétariat.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="tel:+2250703660000"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-bold text-gray-950 transition-colors hover:bg-amber-50"
              >
                <Phone className="h-5 w-5" />
                07 03 660 000
              </a>
              <a
                href="https://wa.me/2250703660000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/35 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <div className="mb-5 inline-flex rounded-lg bg-amber-100 p-3 text-amber-800">
              <Church className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Comment rejoindre la communauté ?</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              L'accueil se fait simplement, avec écoute et disponibilité. Le secrétariat vous
              oriente selon votre situation familiale, spirituelle et pastorale.
            </p>
          </div>

          <div className="grid gap-4">
            {newcomerSteps.map((step, index) => (
              <article key={step} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-800 font-bold text-white">
                  {index + 1}
                </div>
                <p className="leading-relaxed text-gray-700">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-amber-100 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-4 inline-flex rounded-lg bg-gray-100 p-3 text-amber-800">
                  <Users className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Groupes, mouvements et services</h2>
                <p className="mt-3 max-w-3xl text-gray-600">
                  La communauté propose des espaces de prière, de formation et de service pour
                  permettre à chacun de trouver sa place dans la vie paroissiale.
                </p>
              </div>
              <a
                href="tel:+2250703660000"
                className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-lg bg-amber-800 px-6 py-3 font-bold text-white transition-colors hover:bg-amber-900"
              >
                <Phone className="h-5 w-5" />
                Appeler le secrétariat
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
