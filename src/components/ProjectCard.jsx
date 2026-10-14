import { ArrowRight, Database, Terminal, Car } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  // Render high-fidelity contextual visual mockup for each project type
  const renderProjectMockup = () => {
    switch (project.mockupType) {
      case 'database-system':
        return (
          <div className="w-full h-48 bg-[#070b14] p-4 flex flex-col justify-between font-mono text-[11px] relative overflow-hidden group-hover:bg-[#060a12] transition-colors">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-blue-400 flex items-center gap-1.5 font-bold">
                <Database className="w-3.5 h-3.5" />
                GKJW_ADMIN_DB :: Relational
              </span>
              <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                MIGRATED
              </span>
            </div>

            {/* Table preview mockup */}
            <div className="space-y-1.5 py-2">
              <div className="flex items-center justify-between text-slate-400 text-[10px] border-b border-slate-800/60 pb-1">
                <span>ENTITY / TABLE</span>
                <span>RELATION</span>
                <span>STATUS</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-white font-medium">church_members</span>
                <span className="text-slate-400">hasMany(offerings)</span>
                <span className="text-emerald-400">Indexed</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-white font-medium">family_cards</span>
                <span className="text-slate-400">belongsTo(sector)</span>
                <span className="text-emerald-400">Indexed</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-white font-medium">cash_transactions</span>
                <span className="text-slate-400">audit_trail(user_id)</span>
                <span className="text-blue-400">RBAC</span>
              </div>
            </div>

            {/* Bottom stats */}
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
              <span>Engine: InnoDB / UTF8mb4</span>
              <span className="text-blue-400">Role: Admin & Majelis</span>
            </div>
          </div>
        );

      case 'multi-tenant':
        return (
          <div className="w-full h-48 bg-[#070b14] p-4 flex flex-col justify-between font-mono text-[11px] relative overflow-hidden group-hover:bg-[#060a12] transition-colors">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-cyan-400 flex items-center gap-1.5 font-bold">
                <Car className="w-3.5 h-3.5" />
                TENANT_SCOPE :: Isolation
              </span>
              <span className="text-blue-400 text-[10px] bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                LIVEWIRE
              </span>
            </div>

            {/* Multi-tenant mockup flow */}
            <div className="space-y-2 py-2">
              <div className="p-2 rounded bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">Tenant: Rental-Jogja-Trans</div>
                  <div className="text-[10px] text-slate-400">Scope: tenant_id = 'T-0041'</div>
                </div>
                <span className="text-emerald-400 text-[10px]">Active</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="bg-slate-900/50 p-1.5 rounded border border-slate-800">
                  <span className="text-slate-400">Fleet: </span>
                  <span className="text-white">Cars & Bikes</span>
                </div>
                <div className="bg-slate-900/50 p-1.5 rounded border border-slate-800">
                  <span className="text-slate-400">Checkout: </span>
                  <span className="text-emerald-400">WhatsApp Link</span>
                </div>
              </div>
            </div>

            {/* Bottom info */}
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
              <span>Data Protection: Row-Level Scope</span>
              <span className="text-cyan-400">Realtime UI</span>
            </div>
          </div>
        );

      case 'terminal-code':
      default:
        return (
          <div className="w-full h-48 bg-[#070b14] p-4 flex flex-col justify-between font-mono text-[11px] relative overflow-hidden group-hover:bg-[#060a12] transition-colors">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-amber-400 flex items-center gap-1.5 font-bold">
                <Terminal className="w-3.5 h-3.5" />
                Java_Core :: Algorithms & OOP
              </span>
              <span className="text-amber-400 text-[10px] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                JVM RUN
              </span>
            </div>

            {/* Code snippet & algorithms log */}
            <div className="space-y-1 py-1.5 text-slate-300">
              <p className="text-blue-400 font-semibold">
                class BinarySearchTree&lt;T extends Comparable&lt;T&gt;&gt;
              </p>
              <p className="text-slate-400 text-[10px]">
                // Collections.sort(records, customComparator)
              </p>
              <p className="text-emerald-400 text-[10px]">
                [PASS] QuickSortBenchmark: 10,000 items in 3.4ms
              </p>
              <p className="text-slate-400 text-[10px]">
                [JDBC] PreparedStatement secure query executed
              </p>
            </div>

            {/* Bottom info */}
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
              <span>Focus: Strong Typing & Data Structures</span>
              <span className="text-amber-400">Core Foundations</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="rounded-2xl bg-[#0b101b] border border-slate-800/90 overflow-hidden hover:border-slate-700 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between group">
      
      <div>
        {/* Mockup Header Preview */}
        <div className="relative border-b border-slate-800/80 overflow-hidden">
          {renderProjectMockup()}
          <div className="absolute top-3 right-3">
            <span
              className={`text-[10px] font-mono px-2.5 py-1 rounded-full border backdrop-blur-md shadow-sm ${project.status.badgeColor}`}
            >
              {project.status.label}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
              {project.category}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
              {project.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer with CTA */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-900 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 group/btn transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1"
        >
          <span>View Case Study</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>

        <span className="text-[11px] font-mono text-slate-400">
          Architecture & Details
        </span>
      </div>

    </div>
  );
}
