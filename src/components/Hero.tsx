import { useEffect, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine, ISourceOptions } from '@tsparticles/engine';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import akanImage from '../assets/akan.jpeg';
import akandjeCoeurImage from '../assets/akandjecoeur.jpeg';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

interface HeroProps {
  onDonate: () => void;
}

export default function Hero({ onDonate }: HeroProps) {
  const { t } = useLanguage();

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesOptions: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5,
            },
          },
        },
      },
      particles: {
        color: {
          value: '#d97706',
        },
        links: {
          color: '#f59e0b',
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const slides = [
    {
      title: 'Un Projet de Foi et d\'Excellence',
      subtitle: 'Construction de l\'Église Sacré-Cœur d\'Akandjé',
      description: 'Un lieu de culte moderne et accueillant pour notre communauté',
      gradient: 'from-amber-900/90 to-amber-700/90',
      icon: '⛪',
    },
    {
      title: 'Architecture Exceptionnelle',
      subtitle: 'Design Contemporain et Spirituel',
      description: 'Une église qui allie tradition et modernité',
      gradient: 'from-blue-900/90 to-blue-700/90',
      icon: '🏛️',
      image: akanImage,
      imageAlt: 'Architecture contemporaine de l’église',
    },
    {
      title: 'Votre Héritage Spirituel',
      subtitle: 'Bâtissons Ensemble Notre Avenir',
      description: 'Chaque don construit un lieu de prière pour les générations futures',
      gradient: 'from-rose-900/90 to-rose-700/90',
      icon: '🙏',
      image: akandjeCoeurImage,
      imageAlt: 'Église Sacré-Cœur d’Akandjé',
    },
  ];

  return (
    <div className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0"
        />
      </div>

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative min-h-[90vh] flex items-center">
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} z-0`}></div>

              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30 z-[1]"></div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8 text-white animate-fade-in">
                    <div className="inline-block">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/30">
                        Projet de Construction
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h1 className="text-5xl lg:text-7xl font-bold leading-tight drop-shadow-2xl">
                        {slide.title}
                      </h1>
                      <h2 className="text-2xl lg:text-3xl font-semibold text-white/90">
                        {slide.subtitle}
                      </h2>
                    </div>

                    <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                      {slide.description}
                    </p>

                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-2xl">
                      <p className="text-white/95 italic text-lg mb-2">
                        "{t('hero_quote')}"
                      </p>
                      <p className="text-white font-semibold text-sm">
                        {t('hero_reference')}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <button
                        onClick={onDonate}
                        className="group bg-white text-amber-900 px-8 py-4 rounded-lg font-bold hover:bg-amber-50 transition-all shadow-2xl hover:shadow-3xl inline-flex items-center space-x-2 transform hover:scale-105"
                      >
                        <span>{t('donate_now')}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border-2 border-white/30 inline-flex items-center space-x-2">
                        <span>{t('learn_more')}</span>
                      </button>
                    </div>
                  </div>

                  <div className="relative animate-slide-in-right">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl rounded-3xl transform rotate-6"></div>
                      <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden aspect-[4/3] border border-white/30">
                        {slide.image ? (
                          <img
                            src={slide.image}
                            alt={slide.imageAlt}
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-8">
                              <div className="text-9xl mb-6 animate-bounce-slow drop-shadow-2xl">
                                {slide.icon}
                              </div>
                              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                                <p className="text-2xl font-bold text-gray-900 mb-2">
                                  {slide.subtitle}
                                </p>
                                <p className="text-gray-600">
                                 {/*  Visualisation 3D à venir */}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-amber-200 transform hover:scale-105 transition-transform">
                      <div className="text-sm text-gray-600 mb-1">Akandjé, Côte d'Ivoire</div>
                      <div className="text-2xl font-bold text-amber-800">Quartier Résidentiel</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .hero-swiper {
          height: 90vh;
        }

        .hero-swiper .swiper-slide {
          opacity: 0 !important;
          pointer-events: none;
        }

        .hero-swiper .swiper-slide-active {
          opacity: 1 !important;
          pointer-events: auto;
        }

        .hero-swiper .swiper-pagination {
          bottom: 40px;
          z-index: 20;
        }

        .hero-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 40px;
          border-radius: 6px;
          background: linear-gradient(to right, #f59e0b, #d97706);
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
