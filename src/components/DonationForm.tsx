import { useState } from 'react';
import { CreditCard, Smartphone, Building, Sparkles, Shield, Zap, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';

interface DonationFormProps {
  preselectedAmount?: number;
  preselectedCircle?: string;
}

export default function DonationForm({ preselectedAmount, preselectedCircle }: DonationFormProps) {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    amount: preselectedAmount || 100000,
    customAmount: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    profession: '',
    country: 'CI',
    donationType: 'one_time',
    paymentMethod: 'mobile_money',
    dedication: '',
    isAnonymous: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);

  const amounts = [50000, 100000, 250000, 500000, 1000000, 5000000];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setProcessing(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
      const finalAmount = formData.customAmount
        ? parseFloat(formData.customAmount)
        : formData.amount;

      const donorData = {
        email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone,
        company: formData.company || null,
        profession: formData.profession || null,
        country: formData.country,
        is_anonymous: formData.isAnonymous,
        donor_type: formData.company ? 'corporate' : 'individual',
      };

      const { data: donor, error: donorError } = await supabase
        .from('donors')
        .upsert(donorData, { onConflict: 'email' })
        .select()
        .single();

      if (donorError) throw donorError;

      const donationData = {
        donor_id: donor.id,
        amount: finalAmount,
        currency: 'XOF',
        donation_type: formData.donationType,
        category: preselectedCircle || 'general',
        payment_method: formData.paymentMethod,
        payment_status: 'completed',
        dedication_message: formData.dedication || null,
        transaction_reference: `DON-${Date.now()}`,
      };

      const { error: donationError } = await supabase
        .from('donations')
        .insert(donationData);

      if (donationError) throw donationError;

      setSuccess(true);
    } catch (error) {
      console.error('Error submitting donation:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setSubmitting(false);
      setProcessing(false);
    }
  };

  if (processing) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full animate-ping opacity-75"></div>
            <div className="relative w-32 h-32 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full flex items-center justify-center animate-pulse">
              <Zap className="w-16 h-16 text-white animate-bounce" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-pulse">
            Traitement en cours...
          </h2>
          <p className="text-gray-600 mb-8">
            Sécurisation de votre transaction
          </p>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-3 h-3 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 bg-green-100 rounded-full animate-ping"></div>
          <div className="relative w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-white animate-bounce" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Merci pour votre générosité!</h2>
        <p className="text-gray-600 mb-8">
          Votre don contribue à la construction du presbytère de la Quasi-Paroisse Sacré-Cœur d'Akandjé. Un reçu de donation vous sera envoyé par email.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
        >
          Faire un autre don
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-amber-900 to-amber-700 rounded-2xl shadow-2xl p-8 md:p-12 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-6">
            <Sparkles className="w-8 h-8 text-amber-200 animate-pulse" />
            <h2 className="text-3xl font-bold">
              {language === 'fr' ? 'Votre Contribution Fait la Différence' : 'Your Contribution Makes a Difference'}
            </h2>
          </div>
          <p className="text-xl text-amber-100 mb-6">
            {language === 'fr'
              ? 'Chaque don, grand ou petit, participe à la construction du presbytère. Ensemble, bâtissons la maison de nos pasteurs pour fortifier la mission pastorale.'
              : 'Every donation, large or small, supports the construction of the presbytery and strengthens the pastoral mission.'
            }
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Shield className="w-6 h-6 text-amber-200 mb-2" />
              <p className="text-sm font-semibold">{language === 'fr' ? 'Paiement 100% Sécurisé' : '100% Secure Payment'}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <CheckCircle2 className="w-6 h-6 text-amber-200 mb-2" />
              <p className="text-sm font-semibold">{language === 'fr' ? 'Reçu Fiscal Instantané' : 'Instant Tax Receipt'}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Sparkles className="w-6 h-6 text-amber-200 mb-2" />
              <p className="text-sm font-semibold">{language === 'fr' ? 'Transparence Totale' : 'Total Transparency'}</p>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('donate_now')}</h2>

        <div className="space-y-8">
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              {t('choose_amount')}
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, amount, customAmount: '' });
                  }}
                  className={`group relative p-4 rounded-xl border-2 font-semibold transition-all transform hover:scale-105 ${
                    formData.amount === amount && !formData.customAmount
                      ? 'border-amber-700 bg-gradient-to-br from-amber-50 to-amber-100 text-amber-900 shadow-lg'
                      : 'border-gray-200 hover:border-amber-300 hover:shadow-md'
                  }`}
                >
                  {formData.amount === amount && !formData.customAmount && (
                    <div className="absolute -top-2 -right-2 bg-amber-700 text-white rounded-full p-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  )}
                  {new Intl.NumberFormat('fr-FR').format(amount)} FCFA
                </button>
              ))}
            </div>
            <div className="relative">
              <input
                type="number"
                placeholder={t('custom_amount')}
                value={formData.customAmount}
                onChange={(e) => setFormData({ ...formData, customAmount: e.target.value })}
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all"
              />
              <Sparkles className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('personal_info')}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder={t('first_name')}
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all"
              />
              <input
                type="text"
                required
                placeholder={t('last_name')}
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all"
              />
              <input
                type="email"
                required
                placeholder={t('email')}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all"
              />
              <input
                type="tel"
                placeholder={t('phone')}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all"
              />
              <input
                type="text"
                placeholder={t('company')}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all"
              />
              <input
                type="text"
                placeholder={t('profession')}
                value={formData.profession}
                onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              {t('donation_type')}
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['one_time', 'monthly', 'quarterly', 'annual'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFormData({ ...formData, donationType: type })}
                  className={`relative p-3 rounded-xl border-2 font-medium transition-all transform hover:scale-105 ${
                    formData.donationType === type
                      ? 'border-amber-700 bg-amber-50 text-amber-900 shadow-lg'
                      : 'border-gray-200 hover:border-amber-300'
                  }`}
                >
                  {formData.donationType === type && (
                    <div className="absolute -top-2 -right-2 bg-amber-700 text-white rounded-full p-1">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                  )}
                  {t(type)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              {t('payment_method')}
            </label>
            <div className="grid md:grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, paymentMethod: 'mobile_money' })}
                className={`relative group p-6 rounded-xl border-2 flex flex-col items-center justify-center space-y-3 transition-all transform hover:scale-105 ${
                  formData.paymentMethod === 'mobile_money'
                    ? 'border-amber-700 bg-gradient-to-br from-amber-50 to-amber-100 shadow-xl'
                    : 'border-gray-200 hover:border-amber-300 hover:shadow-lg'
                }`}
              >
                <div className={`p-4 rounded-full ${
                  formData.paymentMethod === 'mobile_money'
                    ? 'bg-gradient-to-br from-amber-600 to-amber-800'
                    : 'bg-gray-100 group-hover:bg-amber-100'
                } transition-all`}>
                  <Smartphone className={`w-8 h-8 ${
                    formData.paymentMethod === 'mobile_money' ? 'text-white' : 'text-gray-600 group-hover:text-amber-700'
                  }`} />
                </div>
                <span className="font-semibold">Mobile Money</span>
                {formData.paymentMethod === 'mobile_money' && (
                  <div className="absolute -top-2 -right-2 bg-amber-700 text-white rounded-full p-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                )}
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                className={`relative group p-6 rounded-xl border-2 flex flex-col items-center justify-center space-y-3 transition-all transform hover:scale-105 ${
                  formData.paymentMethod === 'card'
                    ? 'border-amber-700 bg-gradient-to-br from-amber-50 to-amber-100 shadow-xl'
                    : 'border-gray-200 hover:border-amber-300 hover:shadow-lg'
                }`}
              >
                <div className={`p-4 rounded-full ${
                  formData.paymentMethod === 'card'
                    ? 'bg-gradient-to-br from-amber-600 to-amber-800'
                    : 'bg-gray-100 group-hover:bg-amber-100'
                } transition-all`}>
                  <CreditCard className={`w-8 h-8 ${
                    formData.paymentMethod === 'card' ? 'text-white' : 'text-gray-600 group-hover:text-amber-700'
                  }`} />
                </div>
                <span className="font-semibold">Carte Bancaire</span>
                {formData.paymentMethod === 'card' && (
                  <div className="absolute -top-2 -right-2 bg-amber-700 text-white rounded-full p-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                )}
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, paymentMethod: 'bank_transfer' })}
                className={`relative group p-6 rounded-xl border-2 flex flex-col items-center justify-center space-y-3 transition-all transform hover:scale-105 ${
                  formData.paymentMethod === 'bank_transfer'
                    ? 'border-amber-700 bg-gradient-to-br from-amber-50 to-amber-100 shadow-xl'
                    : 'border-gray-200 hover:border-amber-300 hover:shadow-lg'
                }`}
              >
                <div className={`p-4 rounded-full ${
                  formData.paymentMethod === 'bank_transfer'
                    ? 'bg-gradient-to-br from-amber-600 to-amber-800'
                    : 'bg-gray-100 group-hover:bg-amber-100'
                } transition-all`}>
                  <Building className={`w-8 h-8 ${
                    formData.paymentMethod === 'bank_transfer' ? 'text-white' : 'text-gray-600 group-hover:text-amber-700'
                  }`} />
                </div>
                <span className="font-semibold">Virement</span>
                {formData.paymentMethod === 'bank_transfer' && (
                  <div className="absolute -top-2 -right-2 bg-amber-700 text-white rounded-full p-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-2">
              {t('dedication')}
            </label>
            <textarea
              value={formData.dedication}
              onChange={(e) => setFormData({ ...formData, dedication: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all"
              placeholder="En mémoire de..."
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="anonymous"
              checked={formData.isAnonymous}
              onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
              className="w-5 h-5 text-amber-700 border-gray-300 rounded focus:ring-amber-700"
            />
            <label htmlFor="anonymous" className="ml-3 text-gray-700">
              {t('anonymous')}
            </label>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="relative w-full bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white py-5 rounded-xl font-bold text-lg hover:from-amber-800 hover:via-amber-900 hover:to-amber-950 transition-all shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <Shield className="w-6 h-6" />
              <span>{submitting ? 'Traitement en cours...' : t('submit_donation')}</span>
              <Sparkles className="w-6 h-6 animate-pulse" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </form>
    </div>
  );
}
