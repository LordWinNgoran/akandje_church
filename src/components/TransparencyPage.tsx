import { useEffect, useState } from 'react';
import { BarChart3, FileText, Camera, TrendingUp } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';

export default function TransparencyPage() {
  const { t } = useLanguage();
  const [stats, setStats] = useState({
    totalRaised: 0,
    totalDonors: 0,
    completedDonations: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const { data: donations } = await supabase
        .from('donations')
        .select('amount, donor_id, payment_status');

      const completedDonations = donations?.filter(d => d.payment_status === 'completed') || [];
      const totalRaised = completedDonations.reduce((sum, d) => sum + Number(d.amount), 0);
      const uniqueDonors = new Set(completedDonations.map(d => d.donor_id)).size;

      setStats({
        totalRaised,
        totalDonors: uniqueDonors,
        completedDonations: completedDonations.length,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('fr-FR').format(amount);
  };

  const budgetBreakdown = [
    { category: 'Fondations et Structure', amount: 200000000, percentage: 40 },
    { category: 'Toiture et Charpente', amount: 100000000, percentage: 20 },
    { category: 'Finitions Intérieures', amount: 80000000, percentage: 16 },
    { category: 'Éléments Liturgiques', amount: 60000000, percentage: 12 },
    { category: 'Vitraux et Décoration', amount: 40000000, percentage: 8 },
    { category: 'Aménagements Extérieurs', amount: 20000000, percentage: 4 },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('transparency_title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre engagement envers une transparence totale sur l'utilisation de vos dons
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                Collecté
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {formatAmount(stats.totalRaised)}
            </p>
            <p className="text-gray-600">FCFA collectés</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                Donateurs
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.totalDonors}</p>
            <p className="text-gray-600">Bienfaiteurs généreux</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                Validés
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.completedDonations}</p>
            <p className="text-gray-600">Dons confirmés</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <BarChart3 className="w-8 h-8 text-amber-700" />
            <h2 className="text-2xl font-bold text-gray-900">{t('budget_breakdown')}</h2>
          </div>

          <div className="space-y-6">
            {budgetBreakdown.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-semibold text-gray-900">{item.category}</span>
                  <span className="text-lg font-bold text-amber-800">
                    {formatAmount(item.amount)} FCFA
                  </span>
                </div>
                <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-700">
                    {item.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-900">{t('total_budget')}</span>
              <span className="text-3xl font-bold text-amber-800">
                {formatAmount(500000000)} FCFA
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">{t('financial_reports')}</h2>
            </div>
            <div className="space-y-4">
              <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Rapport Trimestriel Q4 2024</p>
                    <p className="text-sm text-gray-600">Publié le 15 Janvier 2025</p>
                  </div>
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              </div>
              <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Bilan Financier 2024</p>
                    <p className="text-sm text-gray-600">Publié le 31 Décembre 2024</p>
                  </div>
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Camera className="w-8 h-8 text-amber-700" />
              <h2 className="text-2xl font-bold text-gray-900">{t('construction_progress')}</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow">
                  <Camera className="w-12 h-12 text-amber-700" />
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-amber-700 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors">
              Voir toutes les photos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
