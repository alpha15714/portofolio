import { useState } from 'react';
import { skillCategories, techIcons } from '../data/skills';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Layers } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  const categories = [
    { id: 'all', label: 'All Technologies' },
    ...skillCategories.map((cat) => ({ id: cat.id, label: cat.label }))
  ];

  const displayedCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`py-24 sm:py-32 relative border-t border-slate-800/60 bg-[#070b12]/40 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            TECHNICAL PROFICIENCY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Keterampilan & Teknologi Terapan
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Dikelompokkan berdasarkan area kerja riil—tanpa persentase artifisial, berorientasi pada pemecahan masalah dan kegunaan praktis dalam proyek.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/25'
                  : 'bg-slate-900/70 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Categorized */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 pb-2 border-b border-slate-800/80">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {category.label}
                </h3>
                <span className="text-xs text-slate-400">
                  {category.description}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => {
                  const iconData = techIcons[skill.iconKey];
                  return (
                    <div
                      key={skill.name}
                      className="p-5 rounded-2xl bg-[#0b101b]/90 border border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-300 group hover:-translate-y-1 shadow-sm"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {iconData && (
                            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-2 group-hover:border-slate-700 transition-colors">
                              <svg
                                viewBox="0 0 24 24"
                                className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                                style={{ fill: iconData.color || '#94a3b8' }}
                                role="img"
                                aria-label={skill.name}
                              >
                                <path d={iconData.path} />
                              </svg>
                            </div>
                          )}
                          <div>
                            <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-[11px] font-mono text-slate-400">
                              {category.label}
                            </span>
                          </div>
                        </div>

                        {/* Practical Badge */}
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60">
                          {skill.badge}
                        </span>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
