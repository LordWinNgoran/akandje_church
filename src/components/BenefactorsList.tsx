import { useEffect, useState } from 'react';
import { Crown, Award, Medal } from 'lucide-react';
import { supabase, Benefactor } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';

export default function BenefactorsList() {
  const { t } = useLanguage();
  const [benefactors, setBenefactors] = useState<Benefactor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBenefactors();
  }, []);

  const fetchBenefactors = async () => {
    try {
      const { data, error } = await supabase
        .from('benefactors')
        .select('*')
        .eq('is_visible', true)
        .order('total_donated', { ascending: false })
        .limit(10);

      if (error) throw error;
      setBenefactors(data || []);
    } catch (error) {
      console.error('Error fetching benefactors:', error);
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (level: string) => {
    switch (level) {
      case 'founder':
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 'platinum':
        return <Award className="w-5 h-5 text-blue-400" />;
      case 'gold':
        return <Medal className="w-5 h-5 text-yellow-600" />;
      case 'silver':
        return <Medal className="w-5 h-5 text-gray-400" />;
      default:
        return <Medal className="w-5 h-5 text-amber-600" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'founder':
        return 'from-yellow-500 to-yellow-600';
      case 'platinum':
        return 'from-blue-400 to-blue-500';
      case 'gold':
        return 'from-yellow-600 to-yellow-700';
      case 'silver':
        return 'from-gray-400 to-gray-500';
      default:
        return 'from-amber-600 to-amber-700';
    }
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('fr-FR').format(amount);
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="h-8 bg-gray-200 rounded w-1/2 mb-6 animate-pulse"></div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-gray-100 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">{t('major_benefactors')}</h3>
        <Crown className="w-6 h-6 text-amber-700" />
      </div>

      <div className="space-y-4">
        {benefactors.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            Soyez le premier bienfaiteur de ce projet
          </p>
        ) : (
          benefactors.map((benefactor, index) => (
            <div
              key={benefactor.id}
              className="group relative bg-gradient-to-r from-gray-50 to-white p-5 rounded-xl border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`bg-gradient-to-br ${getLevelColor(benefactor.recognition_level)} p-3 rounded-lg`}>
                    {getIcon(benefactor.recognition_level)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      {index < 3 && (
                        <span className="text-2xl font-bold text-amber-700">
                          #{index + 1}
                        </span>
                      )}
                      <h4 className="font-semibold text-gray-900">
                        {benefactor.display_name}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 capitalize">
                      {t(`recognition_${benefactor.recognition_level}`)}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-amber-800">
                    {formatAmount(benefactor.total_donated)}
                  </p>
                  <p className="text-xs text-gray-500">{t('fcfa')}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
