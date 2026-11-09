import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle({ className = '', showLabel = false }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center gap-2 p-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        isDark
          ? 'bg-slate-900/80 hover:bg-slate-800 text-amber-300 hover:text-amber-200 border border-slate-800 shadow-sm'
          : 'bg-white hover:bg-slate-100 text-amber-600 hover:text-amber-700 border border-slate-200 shadow-sm shadow-slate-200/50'
      } ${className}`}
      aria-label={isDark ? 'Beralih ke Mode Terang (Light Mode)' : 'Beralih ke Mode Gelap (Dark Mode)'}
      title={isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
    >
      <div className="relative w-4 h-4 sm:w-[18px] sm:h-[18px] flex items-center justify-center">
        {isDark ? (
          <Sun className="w-full h-full transition-transform duration-300 rotate-0 hover:rotate-45" />
        ) : (
          <Moon className="w-full h-full text-slate-700 transition-transform duration-300 -rotate-12 hover:rotate-0" />
        )}
      </div>
      {showLabel && (
        <span className="text-xs font-medium">
          {isDark ? 'Mode Terang' : 'Mode Gelap'}
        </span>
      )}
    </button>
  );
}
