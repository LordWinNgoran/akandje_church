import { Church, HeartHandshake, UserRound } from 'lucide-react';
import parishPriestsImage from '../assets/parish-priests.jpeg';

const pastors = [
  {
    period: '2017-2019',
    role: 'Père Curé',
    name: 'Raphaël Yapo Saint',
  },
  {
    period: '2019-2025',
    role: 'Père Curé',
    name: 'Rodolphe ETTI',
  },
  {
    period: '2025 à nos jours',
    role: 'Père Administrateur',
    name: 'Arnaud ASSONHON',
  },
];

export default function PastorsPage() {
  return (
    <main className="bg-white pt-[8.5rem] lg:pt-0">
      <section className="bg-gray-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 backdrop-blur">
              <Church className="h-5 w-5" />
              Vie pastorale
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Nos pasteurs</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-200">
              Découvrez les prêtres qui ont accompagné la communauté Sacré-Cœur d’Akandjé et
              contribué à son cheminement vers la Quasi-paroisse.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/10 shadow-2xl">
            <img
              src={parishPriestsImage}
              alt="Pasteurs et fidèles de la Quasi-Paroisse Sacré-Cœur d’Akandjé"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex rounded-lg bg-amber-100 p-3 text-amber-800">
              <HeartHandshake className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Une histoire pastorale</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Une présence sacerdotale au service de la prière, des sacrements et de la
              croissance de la communauté.
            </p>
          </div>

          <div className="relative space-y-6">
            <div className="absolute bottom-6 left-5 top-6 w-1 bg-gradient-to-b from-amber-600 to-amber-800" />
            {pastors.map((pastor) => (
              <article
                key={pastor.period}
                className="relative ml-2 flex gap-5 rounded-lg border border-gray-200 bg-white p-6 pl-10 shadow-sm"
              >
                <div className="absolute left-0 top-7 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-amber-800 text-white shadow-md">
                  <UserRound className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-amber-800">{pastor.period}</p>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900">{pastor.role}</h3>
                  <p className="mt-1 text-lg text-gray-700">{pastor.name}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
