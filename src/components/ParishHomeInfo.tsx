import {
  BookOpen,
  CalendarDays,
  Facebook,
  MessageCircle,
  Phone,
  Users,
} from 'lucide-react';

interface ParishHomeInfoProps {
  onProjects: () => void;
  onSpiritual: () => void;
}

const massTimes = [
  {
    day: 'Lundi au vendredi',
    detail: 'Messe en semaine',
    time: '19h30',
    place: 'Quasi-Paroisse',
  },
  {
    day: 'Jeudi',
    detail: 'Exposition du Saint Sacrement',
    time: '06h30',
    place: 'Quasi-Paroisse',
  },
  {
    day: 'Samedi',
    detail: 'Messe du matin',
    time: '07h00',
    place: 'Quasi-Paroisse',
  },
  {
    day: 'Samedi',
    detail: 'Messe anticipée',
    time: '18h30',
    place: 'Quasi-Paroisse',
  },
  {
    day: 'Dimanche',
    detail: 'Messe dominicale',
    time: '07h00',
    place: 'Quasi-Paroisse',
  },
  {
    day: 'Dimanche',
    detail: 'Messe dominicale',
    time: '08h00',
    place: "Chapelle Notre-Dame de l'Espérance",
  },
  {
    day: 'Dimanche',
    detail: 'Messe dominicale',
    time: '09h00',
    place: 'Quasi-Paroisse',
  },
  {
    day: 'Dimanche',
    detail: 'Messe dominicale',
    time: '10h00',
    place: 'Chapelle Saint-Michel',
  },
  {
    day: 'Dimanche',
    detail: 'Messe dominicale',
    time: '11h00',
    place: 'Chapelle Saint-Dominique',
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
    <section className="bg-white py-16">
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
                className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-4 text-gray-800 transition-colors hover:border-amber-300 hover:bg-amber-50"
              >
                <Phone className="h-5 w-5 text-amber-700" />
                <span className="font-semibold">07 07 832 642</span>
              </a>
              <a
                href="https://wa.me/2250707832642"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-4 text-gray-800 transition-colors hover:border-amber-300 hover:bg-amber-50"
              >
                <MessageCircle className="h-5 w-5 text-green-700" />
                <span className="font-semibold">WhatsApp</span>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-4 text-gray-800 transition-colors hover:border-amber-300 hover:bg-amber-50"
              >
                <Facebook className="h-5 w-5 text-blue-700" />
                <span className="font-semibold">Facebook</span>
              </a>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-6">
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

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
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

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-amber-100 p-3">
                <CalendarDays className="h-6 w-6 text-amber-800" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Horaires des Messes</h3>
                <p className="text-sm text-gray-600">Quasi-paroisse et chapelles</p>
              </div>
            </div>

            <div className="space-y-3">
              {massTimes.map((mass) => (
                <div
                  key={`${mass.day}-${mass.time}-${mass.place}`}
                  className="grid grid-cols-[4.5rem_1fr] gap-4 rounded-lg bg-white p-4 shadow-sm sm:grid-cols-[5rem_1fr]"
                >
                  <div className="text-lg font-bold text-amber-800">{mass.time}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{mass.day}</p>
                    <p className="text-sm text-gray-600">{mass.detail}</p>
                    <p className="mt-1 text-sm font-medium text-gray-800">{mass.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
