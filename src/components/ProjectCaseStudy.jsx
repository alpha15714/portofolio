import { useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Database, 
  ShieldAlert, 
  Wrench, 
  GitBranch, 
  Layers, 
  Calendar, 
  UserCheck, 
  AlertCircle 
} from 'lucide-react';

export default function ProjectCaseStudy({ project, onClose }) {
  // Listen for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll while modal is active, cleanly restore on unmount
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow || 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md overflow-y-auto p-3 sm:p-6 flex items-start justify-center"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-4xl bg-[#090e1a] border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-6 sm:my-10 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#080c16] shrink-0 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span
              className={`text-[11px] font-mono px-3 py-1 rounded-full border ${project.status.badgeColor}`}
            >
              {project.status.label}
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors"
            >
              Tutup
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Tutup case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-8 text-slate-300">
          
          {/* Main Title & Short Summary */}
          <div className="space-y-3 pb-4 border-b border-slate-800/80">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
              CASE STUDY & SYSTEM ARCHITECTURE
            </span>
            <h2
              id="case-study-title"
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight"
            >
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-blue-950/50 border border-blue-800/50 text-blue-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Objectives Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Latar Belakang Masalah */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2.5">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 font-mono">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                Latar Belakang Masalah
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Tujuan Digitalisasi */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2.5">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Tujuan & Solusi
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {project.objectives}
              </p>
            </div>

          </div>

          {/* Key Features Breakdown */}
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2 font-mono">
              <Layers className="w-4 h-4 text-blue-400" />
              Fitur Utama yang Diimplementasikan
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-100">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Database Architecture & Design */}
          {project.databaseDesign && (
            <div className="p-5 sm:p-6 rounded-2xl bg-[#070b14] border border-slate-800 space-y-3.5">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-sm font-bold">
                <Database className="w-4 h-4" />
                <span>Perancangan Database & Integritas Relasional</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                {project.databaseDesign.summary}
              </p>
              <ul className="space-y-2 pt-1">
                {project.databaseDesign.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Role & Contribution */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 font-mono">
              <UserCheck className="w-4 h-4 text-indigo-400" />
              Kontribusi & Peran Saya
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.myRole}
            </p>
          </div>

          {/* Technical Challenges & Solutions */}
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2 font-mono">
              <Wrench className="w-4 h-4 text-amber-400" />
              Tantangan Teknis & Pemecahan Masalah
            </h3>

            <div className="space-y-3">
              {project.technicalChallenges.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-900/30 border border-slate-800/80 space-y-2"
                >
                  <div className="text-xs sm:text-sm font-semibold text-rose-300 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Tantangan: {item.challenge}</span>
                  </div>
                  <div className="text-xs text-slate-300 pl-6 leading-relaxed">
                    <span className="text-emerald-400 font-semibold">Solusi: </span>
                    {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Timeline */}
          <div className="space-y-5">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2 font-mono">
              <Calendar className="w-4 h-4 text-blue-400" />
              Alur Proses Pengembangan
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-6 ml-2">
              {project.processTimeline.map((step) => (
                <div key={step.step} className="relative group">
                  {/* Step bullet dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-6 h-6 rounded-full bg-slate-900 border-2 border-blue-500/80 flex items-center justify-center text-[10px] font-mono text-blue-400 font-bold">
                    {step.step}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Footer Notice & Action */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-2 text-center sm:text-left">
              <GitBranch className="w-4 h-4 text-slate-400 shrink-0" />
              Kode sumber & data internal dilindungi sesuai kebijakan privasi proyek nyata.
            </span>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shrink-0"
            >
              Tutup Case Study
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
