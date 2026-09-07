import { useEffect, useState } from 'react';
import { ArrowRight, Building2, Check, HeartHandshake, Home, ShieldCheck, Users } from 'lucide-react';
import { supabase, ProjectElement } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectElementsProps {
  onDonate: () => void;
  onSponsor: (elementId: string) => void;
}

const presbyteryDescription =
  'Le presbytère a pour fonction d’assurer la résidence stable, digne et sécurisée du curé et des autres prêtres affectés à la paroisse. Sa proximité avec l’église favorise la disponibilité pastorale et l’accomplissement régulier des fonctions paroissiales. Il comprend des espaces d’accueil individuel, de travail administratif, de vie fraternelle et de prière, tout en préservant une séparation claire entre les espaces privés des prêtres et les espaces accessibles au public.';

const projectSlogan =
  'Ensemble bâtissons la maison de nos pasteurs : un presbytère construit, une mission fortifiée.';

const projectPriorities = [
  {
    icon: Home,
    title: 'Résidence stable',
    description: 'Un cadre digne, sécurisé et durable pour le curé et les prêtres affectés à la paroisse.',
  },
  {
    icon: Users,
    title: 'Disponibilité pastorale',
    description: 'Une proximité directe avec l’église pour mieux servir les fidèles et la communauté.',
  },
  {
    icon: ShieldCheck,
    title: 'Espaces bien séparés',
    description: 'Des zones publiques pour l’accueil et des espaces privés préservés pour la vie des prêtres.',
  },
];

export default function ProjectElements({ onDonate, onSponsor }: ProjectElementsProps) {
  const { language, t } = useLanguage();
  const [elements, setElements] = useState<ProjectElement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchElements();
  }, []);

  const fetchElements = async () => {
    try {
      const { data, error } = await supabase
        .from('project_elements')
        .select('*')
        .order('target_amount', { ascending: true });

      if (error) throw error;
      setElements(data || []);
    } catch (error) {
      console.error('Error fetching elements:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('fr-FR').format(amount);
  };

  const getProgress = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const renderElements = () => {
    if (loading) {
      return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 h-40 animate-pulse rounded-lg bg-gray-200" />
              <div className="mb-2 h-6 w-3/4 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
            </div>
          ))}
        </div>
      );
    }

    if (elements.length === 0) {
      return (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-8 text-center">
          <Building2 className="mx-auto mb-4 h-10 w-10 text-amber-800" />
          <h3 className="text-2xl font-bold text-gray-900">Éléments de parrainage à venir</h3>
          <p className="mx-auto mt-3 max-w-2xl text-gray-700">
            Les éléments patrimoniaux disponibles seront affichés ici dès leur validation.
          </p>
        </div>
      );
    }

    return (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {elements.map((element) => {
          const progress = getProgress(element.current_amount, element.target_amount);
          const isSponsored = !element.is_available;
          const name = language === 'fr' ? element.name_fr : element.name_en;
          const description = language === 'fr' ? element.description_fr : element.description_en;

          return (
            <article
              key={element.id}
              className={`group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-2xl ${
                isSponsored ? 'opacity-75' : 'hover:-translate-y-1'
              }`}
            >
              <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-amber-100 to-stone-100">
                <Building2 className="h-16 w-16 text-amber-800" />
                {isSponsored && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="rounded-full bg-white p-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                  {isSponsored ? (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                      {t('sponsored')}
                    </span>
                  ) : (
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                      {t('available')}
                    </span>
                  )}
                </div>

                {description && <p className="mb-4 text-sm text-gray-600">{description}</p>}

                <div className="mb-4">
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-gray-600">Objectif</span>
                    <span className="font-bold text-gray-900">
                      {formatAmount(element.target_amount)} FCFA
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full bg-gradient-to-r from-amber-600 to-amber-800 transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  {element.current_amount > 0 && (
                    <p className="mt-1 text-xs text-gray-500">
                      {formatAmount(element.current_amount)} FCFA collecté ({progress.toFixed(0)}%)
                    </p>
                  )}
                </div>

                {isSponsored && element.sponsor_name ? (
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
                    <p className="text-xs font-medium text-amber-800">Parrainé par :</p>
                    <p className="text-sm font-bold text-amber-900">{element.sponsor_name}</p>
                  </div>
                ) : (
                  <button
                    onClick={() => onSponsor(element.id)}
                    className="w-full rounded-lg bg-gradient-to-r from-amber-700 to-amber-900 py-3 font-semibold text-white shadow-md transition-all hover:from-amber-800 hover:to-amber-950 hover:shadow-lg"
                  >
                    {t('sponsor_this')}
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-stone-50 via-white to-amber-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
              <HeartHandshake className="h-5 w-5" />
              Nos projets
            </div>
            <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              Construction du presbytère
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-700">{presbyteryDescription}</p>
            <p className="mt-6 rounded-lg border-l-4 border-amber-700 bg-white p-5 text-lg font-semibold text-amber-900 shadow-sm">
              {projectSlogan}
            </p>
            <button
              onClick={onDonate}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber-800 px-7 py-3.5 font-bold text-white shadow-lg transition-colors hover:bg-amber-900"
            >
              Faire un don
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {projectPriorities.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 inline-flex rounded-lg bg-gray-100 p-3">
                    <Icon className="h-6 w-6 text-amber-800" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              {t('available_elements')}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
              Parrainez un élément patrimonial et laissez votre empreinte dans l'histoire de notre paroisse.
            </p>
          </div>

          {renderElements()}
        </div>
      </section>
    </div>
  );
}
