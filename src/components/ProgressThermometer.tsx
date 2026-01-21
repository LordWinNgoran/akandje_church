import { useEffect, useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';

export default function ProgressThermometer() {
  const { t } = useLanguage();
  const [totalRaised, setTotalRaised] = useState(0);
  const [loading, setLoading] = useState(true);
  const goalAmount = 500000000;

  useEffect(() => {
    fetchTotalDonations();
  }, []);

  const fetchTotalDonations = async () => {
    try {
      const { data, error } = await supabase
        .from('donations')
        .select('amount')
        .eq('payment_status', 'completed');

      if (error) throw error;

      const total = data?.reduce((sum, donation) => sum + Number(donation.amount), 0) || 0;
      setTotalRaised(total);
    } catch (error) {
      console.error('Error fetching donations:', error);
    } finally {
      setLoading(false);
    }
  };

  const percentage = Math.min((totalRaised / goalAmount) * 100, 100);

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('fr-FR').format(amount);
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-24 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">{t('project_goal')}</h3>
        <TrendingUp className="w-6 h-6 text-amber-700" />
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-baseline mb-3">
            <span className="text-4xl font-bold text-amber-800">
              {formatAmount(totalRaised)} {t('fcfa')}
            </span>
            <span className="text-lg text-gray-600">
              / {formatAmount(goalAmount)} {t('fcfa')}
            </span>
          </div>

          <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-600 to-amber-800 transition-all duration-1000 ease-out rounded-full"
              style={{ width: `${percentage}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold text-gray-700 mix-blend-difference">
                {percentage.toFixed(1)}%
              </span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">{t('raised_so_far')}</p>
        </div>
      </div>
    </div>
  );
}
