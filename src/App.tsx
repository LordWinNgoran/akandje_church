import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ParishHomeInfo from './components/ParishHomeInfo';
import SpiritualLifePage from './components/SpiritualLifePage';
import ChurchGallery from './components/ChurchGallery';
import ProgressThermometer from './components/ProgressThermometer';
import BenefactorsList from './components/BenefactorsList';
import GivingCircles from './components/GivingCircles';
import DonationForm from './components/DonationForm';
import ProjectElements from './components/ProjectElements';
import CorporateSponsorship from './components/CorporateSponsorship';
import TransparencyPage from './components/TransparencyPage';
import AboutPage from './components/AboutPage';
import LegalPage from './components/LegalPage';
import PrivacyPage from './components/PrivacyPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCircle, setSelectedCircle] = useState<string | undefined>();

  const handleSelectCircle = (circle: string) => {
    setSelectedCircle(circle);
    setCurrentPage('donate');
  };

  const handleSponsorElement = () => {
    setCurrentPage('donate');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero
              onDonate={() => setCurrentPage('donate')}
              onProjects={() => setCurrentPage('projects')}
            />

            <ParishHomeInfo
              onProjects={() => setCurrentPage('projects')}
              onSpiritual={() => setCurrentPage('spiritual')}
            />

            <ChurchGallery />

            <div className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                  <ProgressThermometer />
                  <BenefactorsList />
                </div>
              </div>
            </div>

            <GivingCircles onSelectCircle={handleSelectCircle} />

            <ProjectElements
              onDonate={() => setCurrentPage('donate')}
              onSponsor={handleSponsorElement}
            />

            <div className="bg-gradient-to-br from-amber-50 to-white py-16">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Chaque Don Compte
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Que vous soyez un particulier, une entreprise ou un membre de la diaspora,
                  votre contribution fait la différence. Ensemble, bâtissons la maison de nos
                  pasteurs et fortifions la mission pastorale de notre communauté.
                </p>
                <button
                  onClick={() => setCurrentPage('donate')}
                  className="bg-gradient-to-r from-amber-700 to-amber-900 text-white px-12 py-4 rounded-lg font-bold text-lg hover:from-amber-800 hover:to-amber-950 transition-all shadow-lg hover:shadow-xl"
                >
                  Contribuer Maintenant
                </button>
              </div>
            </div>
          </>
        );

      case 'donate':
        return (
          <div className="pt-32 pb-16 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <DonationForm
                preselectedCircle={selectedCircle}
              />
            </div>
          </div>
        );

      case 'spiritual':
        return <SpiritualLifePage />;

      case 'projects':
        return (
          <div className="pt-24">
            <ProjectElements
              onDonate={() => setCurrentPage('donate')}
              onSponsor={handleSponsorElement}
            />
          </div>
        );

      case 'transparency':
        return (
          <div className="pt-24">
            <TransparencyPage />
          </div>
        );

      case 'sponsors':
        return (
          <div className="pt-24">
            <CorporateSponsorship />
          </div>
        );

      case 'about':
        return <AboutPage />;

      case 'legal':
        return <LegalPage />;

      case 'privacy':
        return <PrivacyPage />;

      default:
        return null;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header onNavigate={setCurrentPage} currentPage={currentPage} />
        {renderPage()}
        <Footer onNavigate={setCurrentPage} />
      </div>
    </LanguageProvider>
  );
}

export default App;
