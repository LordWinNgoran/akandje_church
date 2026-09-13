import { HeartHandshake } from 'lucide-react';

const flashMessage =
  'Ensemble bâtissons la maison de nos pasteurs : un presbytère construit, une mission fortifiée.';

export default function FlashInfo() {
  return (
    <div className="fixed left-0 right-0 top-20 z-40 overflow-hidden bg-amber-700 text-white shadow-lg sm:top-24 lg:static">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        <span className="flash-info-label inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wide backdrop-blur">
          <HeartHandshake className="h-4 w-4" />
          Flash info
        </span>
        <div className="min-w-0 flex-1 overflow-hidden">
          <p className="flash-info-text whitespace-nowrap text-sm font-semibold sm:whitespace-normal sm:text-base">
            {flashMessage}
          </p>
        </div>
      </div>

      <style>{`
        .flash-info-label {
          animation: flash-pulse 1.7s ease-in-out infinite;
        }

        .flash-info-text {
          display: inline-block;
          padding-left: 100%;
          animation: flash-marquee 18s linear infinite;
        }

        @media (min-width: 640px) {
          .flash-info-text {
            display: block;
            padding-left: 0;
            animation: none;
          }
        }

        @keyframes flash-pulse {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.25);
          }
        }

        @keyframes flash-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
