import { Heart, Building2, Users, Crown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface GivingCirclesProps {
  onSelectCircle: (circle: string) => void;
}

export default function GivingCircles({ onSelectCircle }: GivingCirclesProps) {
  const { t } = useLanguage();

  const circles = [
    {
      id: 'free_donation',
      icon: Heart,
      title: t('free_donation'),
      description: t('choose_amount'),
      gradient: 'from-rose-500 to-pink-600',
      amounts: [100000, 500000, 1000000],
    },
    {
      id: 'sponsor_element',
      icon: Building2,
      title: t('sponsor_element'),
      description: t('available_elements'),
      gradient: 'from-blue-600 to-blue-700',
      amounts: [150000, 2500000, 5000000],
    },
    {
      id: 'builders_circle',
      icon: Users,
      title: t('builders_circle'),
      description: t('monthly_donors'),
      gradient: 'from-amber-600 to-amber-700',
      amounts: [50000, 100000, 250000],
    },
    {
      id: 'founders_circle',
      icon: Crown,
      title: t('founders_circle'),
      description: t('exceptional_donors'),
      gradient: 'from-yellow-500 to-yellow-600',
      amounts: [10000000, 25000000, 50000000],
    },
  ];

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('fr-FR').format(amount);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('giving_circles')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez le cercle qui correspond à votre engagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {circles.map((circle) => {
            const Icon = circle.icon;
            return (
              <div
                key={circle.id}
                onClick={() => onSelectCircle(circle.id)}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${circle.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                <div className="p-8">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${circle.gradient} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {circle.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-6">
                    {circle.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {circle.amounts.map((amount) => (
                      <div
                        key={amount}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-gray-600">À partir de</span>
                        <span className="font-semibold text-gray-900">
                          {formatAmount(amount)} FCFA
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-3 rounded-lg bg-gradient-to-r ${circle.gradient} text-white font-semibold hover:shadow-lg transition-all`}>
                    Choisir
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
