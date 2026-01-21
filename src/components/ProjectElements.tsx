import { useEffect, useState } from 'react';
import { Check, Lock } from 'lucide-react';
import { supabase, ProjectElement } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectElementsProps {
  onSponsor: (elementId: string) => void;
}

export default function ProjectElements({ onSponsor }: ProjectElementsProps) {
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

  if (loading) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('available_elements')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Parrainez un élément patrimonial et laissez votre empreinte dans l'histoire de notre église
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {elements.map((element) => {
            const progress = getProgress(element.current_amount, element.target_amount);
            const isSponsored = !element.is_available;
            const name = language === 'fr' ? element.name_fr : element.name_en;
            const description = language === 'fr' ? element.description_fr : element.description_en;

            return (
              <div
                key={element.id}
                className={`group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-2xl ${
                  isSponsored ? 'opacity-75' : 'hover:-translate-y-2'
                }`}
              >
                <div className="relative h-48 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  <span className="text-6xl">
                    {element.category === 'liturgical' ? '⛪' : element.category === 'architectural' ? '🏛️' : '🪑'}
                  </span>
                  {isSponsored && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="bg-white rounded-full p-4">
                        <Check className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                    {isSponsored ? (
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {t('sponsored')}
                      </span>
                    ) : (
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {t('available')}
                      </span>
                    )}
                  </div>

                  {description && (
                    <p className="text-gray-600 text-sm mb-4">{description}</p>
                  )}

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Objectif</span>
                      <span className="font-bold text-gray-900">
                        {formatAmount(element.target_amount)} FCFA
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-600 to-amber-800 transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    {element.current_amount > 0 && (
                      <p className="text-xs text-gray-500 mt-1">
                        {formatAmount(element.current_amount)} FCFA collecté ({progress.toFixed(0)}%)
                      </p>
                    )}
                  </div>

                  {isSponsored && element.sponsor_name ? (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <p className="text-xs text-amber-800 font-medium">Parrainé par:</p>
                      <p className="text-sm font-bold text-amber-900">{element.sponsor_name}</p>
                    </div>
                  ) : (
                    <button
                      onClick={() => onSponsor(element.id)}
                      className="w-full bg-gradient-to-r from-amber-700 to-amber-900 text-white py-3 rounded-lg font-semibold hover:from-amber-800 hover:to-amber-950 transition-all shadow-md hover:shadow-lg"
                    >
                      {t('sponsor_this')}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
