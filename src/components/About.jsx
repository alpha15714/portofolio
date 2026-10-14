import { Server, Database, ShieldCheck, GraduationCap, MapPin, CheckCircle, Code } from 'lucide-react';
import { profile } from '../data/profile';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  const getPillarIcon = (index) => {
    switch (index) {
      case 0:
        return <Server className="w-5 h-5 text-blue-400" />;
      case 1:
        return <Database className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 3:
        return <GraduationCap className="w-5 h-5 text-amber-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 sm:py-32 relative transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Menghubungkan Kebutuhan Bisnis dengan Sistem yang Terstruktur
          </h2>
          <p className="text-slate-400 text-base max-w-2xl leading-relaxed">
            {profile.about.lead}
          </p>
        </div>

        {/* Editorial Layout: Narrative + Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Narrative paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            {profile.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-300/90 font-normal">
                {paragraph}
              </p>
            ))}

            {/* Quick Context Card */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm mt-8 space-y-4">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2 font-mono">
                <Code className="w-4 h-4 text-blue-400" />
                Filosofi Pengembangan
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                "Kode yang baik bukan hanya berjalan tanpa error, melainkan terstruktur, mudah dipelihara oleh tim, memiliki skema database ternormalisasi, dan memberikan perlindungan nyata terhadap data pengguna."
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1 rounded-lg border border-slate-700/60">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  Yogyakarta, Indonesia
                </span>
                <span className="bg-slate-800/60 px-3 py-1 rounded-lg border border-slate-700/60">
                  Laravel & Backend
                </span>
                <span className="bg-slate-800/60 px-3 py-1 rounded-lg border border-slate-700/60">
                  Database & SQL
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Focus Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Prinsip & Fokus Utama
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {profile.about.pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-[#0b101b]/80 border border-slate-800/90 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-black/30 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-slate-700 transition-colors shrink-0">
                      {getPillarIcon(idx)}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
