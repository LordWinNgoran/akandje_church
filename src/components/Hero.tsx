import { ArrowRight, Church, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import parishMassImage from '../assets/parish-mass.jpeg';
import parishPriestsImage from '../assets/parish-priests.jpeg';
import parishCommunityImage from '../assets/parish-community.jpeg';
import parishBaptismGroupImage from '../assets/parish-baptism-group.jpeg';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

interface HeroProps {
  onDonate: () => void;
  onProjects: () => void;
}

export default function Hero({ onDonate, onProjects }: HeroProps) {
  const { t } = useLanguage();

  const flashMessage = 'Ensemble bâtissons la maison de nos pasteurs : un presbytère construit, une mission fortifiée.';

  const slides = [
    {
      eyebrow: 'Accueil paroissial',
      title: "Bienvenue à la Quasi-Paroisse Sacré-Cœur d'Akandjé 1 & 2",
      subtitle: 'Église Catholique de l’Archidiocèse d’Abidjan',
      description: 'Un lieu de prière, de communion et de service pastoral au cœur de la communauté.',
      image: parishMassImage,
      imageAlt: "Célébration eucharistique à la Quasi-Paroisse Sacré-Cœur d'Akandjé",
    },
    {
      eyebrow: 'Projet presbytère',
      title: 'La maison de nos pasteurs',
      subtitle: flashMessage,
      description: 'La construction du presbytère donnera aux prêtres une résidence stable, digne et proche de la vie paroissiale.',
      image: parishPriestsImage,
      imageAlt: "Prêtres et fidèles de la Quasi-Paroisse Sacré-Cœur d'Akandjé",
    },
    {
      eyebrow: 'Notre communauté',
      title: 'Groupes, mouvements et associations',
      subtitle: 'Une paroisse vivante, ouverte aux nouveaux fidèles',
      description: 'Catéchèse, sacrements, prière, engagement communautaire et accompagnement des familles.',
      image: parishCommunityImage,
      imageAlt: "Communauté de la Quasi-Paroisse Sacré-Cœur d'Akandjé",
    },
    {
      eyebrow: 'Vie sacramentelle',
      title: 'Grandir dans la foi',
      subtitle: 'Baptême, mariage, confession, malades et funérailles chrétiennes',
      description: 'La paroisse accompagne chaque étape importante de la vie chrétienne.',
      image: parishBaptismGroupImage,
      imageAlt: "Groupe de baptême à la Quasi-Paroisse Sacré-Cœur d'Akandjé",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-950 pt-24">
      <div className="flash-info relative z-30 bg-amber-700 text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <HeartHandshake className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm font-semibold sm:text-base">
            <span className="mr-2 uppercase">Flash info</span>
            {flashMessage}
          </p>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{
          delay: 5200,
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="relative flex min-h-[calc(100vh-9rem)] items-end pb-20 sm:pb-24">
              <img
                src={slide.image}
                alt={slide.imageAlt}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/55 to-gray-950/25" />
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-gray-950/80 to-transparent" />

              <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl text-white">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                    <Church className="h-4 w-4" />
                    {slide.eyebrow}
                  </div>

                  <h1 className="text-4xl font-bold leading-tight drop-shadow-xl sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="mt-5 max-w-2xl text-xl font-semibold leading-relaxed text-white/90">
                    {slide.subtitle}
                  </p>

                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
                    {slide.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      onClick={onDonate}
                      className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 font-bold text-amber-900 shadow-xl transition-all hover:bg-amber-50"
                    >
                      <span>{t('donate_now')}</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                    <button
                      onClick={onProjects}
                      className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                    >
                      <span>{t('nav_projects')}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .hero-swiper .swiper-pagination {
          bottom: 28px;
          z-index: 20;
        }

        .hero-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.55;
          transition: all 0.3s ease;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          width: 38px;
          border-radius: 6px;
          background: #d97706;
          opacity: 1;
        }

        .flash-info {
          animation: flash-info 1.7s ease-in-out infinite;
        }

        @keyframes flash-info {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.25);
          }
        }
      `}</style>
    </section>
  );
}
