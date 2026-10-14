import { techIcons, marqueeLogos } from '../data/skills';

export default function InfiniteLogoMarquee() {
  // Repeating the set 3 times ensures seamless infinite flow across all monitor resolutions
  const row1Logos = [...marqueeLogos, ...marqueeLogos, ...marqueeLogos];
  const row2Logos = [
    ...marqueeLogos.slice().reverse(),
    ...marqueeLogos.slice().reverse(),
    ...marqueeLogos.slice().reverse()
  ];

  const renderLogoItem = (item, index, isDuplicate = false) => {
    const iconData = techIcons[item.key];
    if (!iconData) return null;

    return (
      <div
        key={`${item.key}-${index}`}
        aria-hidden={isDuplicate ? "true" : undefined}
        className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0b101b] border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 transition-all duration-200 group shadow-sm shrink-0 select-none"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 transition-transform duration-200 group-hover:scale-110 shrink-0"
          style={{ fill: iconData.color || '#94a3b8' }}
          role="img"
          aria-label={item.name}
        >
          <path d={iconData.path} />
        </svg>
        <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors tracking-tight whitespace-nowrap">
          {item.name}
        </span>
      </div>
    );
  };

  return (
    <section 
      aria-label="Teknologi dan Alat yang Digunakan"
      className="relative py-12 border-y border-slate-800/60 bg-[#070b12]/60 overflow-hidden"
    >
      {/* Self-contained CSS Animation to guarantee smooth 60fps marquee */}
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translate3d(-33.333%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .marquee-track-1 {
          display: flex;
          gap: 1.25rem;
          width: max-content;
          animation: scroll-left 32s linear infinite;
          will-change: transform;
        }
        .marquee-track-2 {
          display: flex;
          gap: 1.25rem;
          width: max-content;
          animation: scroll-right 36s linear infinite;
          will-change: transform;
        }
        .marquee-wrapper:hover .marquee-track-1,
        .marquee-wrapper:hover .marquee-track-2 {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
          Core Technologies & Ecosystem
        </p>
      </div>

      {/* Marquee Wrapper with side fade gradient masks */}
      <div className="marquee-wrapper relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        {/* Row 1: Leftward continuous scroll */}
        <div className="marquee-track-1 py-1.5">
          {row1Logos.map((item, index) => 
            renderLogoItem(item, index, index >= marqueeLogos.length)
          )}
        </div>

        {/* Row 2: Rightward/Reverse continuous scroll */}
        <div className="marquee-track-2 py-1.5 mt-2">
          {row2Logos.map((item, index) => 
            renderLogoItem(item, index, index >= marqueeLogos.length)
          )}
        </div>

      </div>
    </section>
  );
}
