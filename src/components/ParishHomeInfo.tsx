import {
  BookOpen,
  CalendarDays,
  ChevronDown,
  Clock,
  Facebook,
  MapPin,
  MessageCircle,
  Phone,
  Users,
} from 'lucide-react';

interface ParishHomeInfoProps {
  onProjects: () => void;
  onSpiritual: () => void;
}

const massGroups = [
  {
    day: 'Lundi au vendredi',
    highlight: '19h30',
    label: 'Semaine',
    accent: 'bg-amber-700',
    masses: [
      {
        detail: 'Messe en semaine',
        time: '19h30',
        place: 'Quasi-Paroisse',
      },
    ],
  },
  {
    day: 'Jeudi',
    highlight: '06h30',
    label: 'Adoration',
    accent: 'bg-emerald-700',
    masses: [
      {
        detail: 'Exposition du Saint Sacrement',
        time: '06h30',
        place: 'Quasi-Paroisse',
      },
    ],
  },
  {
    day: 'Samedi',
    highlight: '07h00 / 18h30',
    label: 'Samedi',
    accent: 'bg-sky-700',
    masses: [
      {
        detail: 'Messe du matin',
        time: '07h00',
        place: 'Quasi-Paroisse',
      },
      {
        detail: 'Messe anticipée',
        time: '18h30',
        place: 'Quasi-Paroisse',
      },
    ],
  },
  {
    day: 'Dimanche',
    highlight: '07h00 - 11h00',
    label: 'Dimanche',
    accent: 'bg-rose-700',
    masses: [
      {
        detail: 'Messe dominicale',
        time: '07h00',
        place: 'Quasi-Paroisse',
      },
      {
        detail: 'Messe dominicale',
        time: '08h00',
        place: "Chapelle Notre-Dame de l'Espérance",
      },
      {
        detail: 'Messe dominicale',
        time: '09h00',
        place: 'Quasi-Paroisse',
      },
      {
        detail: 'Messe dominicale',
        time: '10h00',
        place: 'Chapelle Saint-Michel',
      },
      {
        detail: 'Messe dominicale',
        time: '11h00',
        place: 'Chapelle Saint-Dominique',
      },
    ],
  },
];

const communityItems = [
  'Groupes de prière',
  'Mouvements paroissiaux',
  'Associations de fidèles',
  'Services liturgiques',
];

export default function ParishHomeInfo({ onProjects, onSpiritual }: ParishHomeInfoProps) {
  return (
    <section className="bg-gradient-to-br from-white via-stone-50 to-amber-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
              <BookOpen className="h-5 w-5" />
              Accueil et information
            </div>

            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Bienvenue à la Quasi-Paroisse Sacré-Cœur d'Akandjé 1 & 2
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Retrouvez les informations essentielles de la vie paroissiale : horaires des messes,
              contacts, accompagnement spirituel et intégration dans notre communauté.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <a
                href="tel:+2250707832642"
                className="flex items-center gap-3 rounded-lg border border-white/80 bg-white/70 px-4 py-4 text-gray-800 shadow-sm backdrop-blur-md transition-colors hover:border-amber-300 hover:bg-white"
              >
                <Phone className="h-5 w-5 text-amber-700" />
                <span className="font-semibold">07 07 832 642</span>
              </a>
              <a
                href="https://wa.me/2250707832642"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-white/80 bg-white/70 px-4 py-4 text-gray-800 shadow-sm backdrop-blur-md transition-colors hover:border-amber-300 hover:bg-white"
              >
                <MessageCircle className="h-5 w-5 text-green-700" />
                <span className="font-semibold">WhatsApp</span>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-white/80 bg-white/70 px-4 py-4 text-gray-800 shadow-sm backdrop-blur-md transition-colors hover:border-amber-300 hover:bg-white"
              >
                <Facebook className="h-5 w-5 text-blue-700" />
                <span className="font-semibold">Facebook</span>
              </a>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-amber-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md">
                <h3 className="text-xl font-bold text-gray-900">Vous êtes nouveau ?</h3>
                <p className="mt-3 text-gray-700">
                  La communauté vous accueille à Sacré-Cœur d'Akandjé 1 & 2.
                </p>
                <a
                  href="https://wa.me/2250707832642?text=Bonjour%2C%20je%20souhaite%20m%27enregistrer%20%C3%A0%20la%20Quasi-Paroisse%20Sacr%C3%A9-C%C5%93ur%20d%27Akandj%C3%A9."
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex rounded-lg bg-amber-800 px-5 py-3 font-semibold text-white transition-colors hover:bg-amber-900"
                >
                  Enregistrez-vous ici
                </a>
              </div>

              <div className="rounded-lg border border-white/80 bg-white/70 p-6 shadow-sm backdrop-blur-md">
                <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                  <Users className="h-5 w-5 text-amber-700" />
                  Notre communauté
                </h3>
                <ul className="mt-4 space-y-3 text-gray-700">
                  {communityItems.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={onSpiritual}
                className="rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-800 transition-colors hover:border-amber-400 hover:text-amber-800"
              >
                Vie spirituelle
              </button>
              <button
                onClick={onProjects}
                className="rounded-lg bg-gray-900 px-5 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
              >
                Nos projets
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/80 bg-white/70 shadow-xl backdrop-blur-md">
            <div className="border-b border-white/70 bg-gradient-to-br from-white/90 via-amber-50/75 to-emerald-50/60 p-6">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-lg bg-gray-900 p-3 shadow-sm">
                  <CalendarDays className="h-6 w-6 text-amber-200" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">
                    Programme paroissial
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">Horaires des Messes</h3>
                  <p className="text-sm text-gray-600">Quasi-paroisse et chapelles</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur">
                  <p className="text-xs font-semibold uppercase text-gray-500">Semaine</p>
                  <p className="mt-1 text-xl font-bold text-gray-900">19h30</p>
                  <p className="text-sm text-gray-600">Lun. au ven.</p>
                </div>
                <div className="rounded-lg border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur">
                  <p className="text-xs font-semibold uppercase text-gray-500">Samedi</p>
                  <p className="mt-1 text-xl font-bold text-gray-900">07h00</p>
                  <p className="text-sm text-gray-600">18h30 anticipée</p>
                </div>
                <div className="rounded-lg border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur">
                  <p className="text-xs font-semibold uppercase text-gray-500">Dimanche</p>
                  <p className="mt-1 text-xl font-bold text-gray-900">5 messes</p>
                  <p className="text-sm text-gray-600">07h00 à 11h00</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 p-5">
              {massGroups.map((group, index) => (
                <details
                  key={group.day}
                  open={index === 0}
                  className="group overflow-hidden rounded-lg border border-gray-100 bg-white/80 shadow-sm backdrop-blur transition-all open:border-amber-200 open:bg-white open:shadow-md"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 [&::-webkit-details-marker]:hidden">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className={`h-10 w-1 rounded-full ${group.accent}`} />
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900">{group.day}</p>
                        <p className="text-sm text-gray-600">{group.label}</p>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 items-center gap-3">
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-bold text-amber-900">
                        {group.highlight}
                      </span>
                      <ChevronDown className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" />
                    </div>
                  </summary>

                  <div className="space-y-2 border-t border-gray-100 bg-stone-50/60 p-3">
                    {group.masses.map((mass) => (
                      <div
                        key={`${group.day}-${mass.time}-${mass.place}`}
                        className="grid grid-cols-[4.75rem_1fr] gap-3 rounded-lg bg-white/90 p-3 shadow-sm"
                      >
                        <div className="flex h-11 items-center justify-center rounded-lg bg-gray-900 text-sm font-bold text-white">
                          {mass.time}
                        </div>
                        <div className="min-w-0">
                          <p className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                            <Clock className="h-4 w-4 flex-shrink-0 text-amber-700" />
                            {mass.detail}
                          </p>
                          <p className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4 flex-shrink-0 text-emerald-700" />
                            {mass.place}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
