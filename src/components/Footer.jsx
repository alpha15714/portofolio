import { ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';
import { socialLinks } from '../data/socialLinks';
import { SocialIcon } from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#060910] text-slate-400 py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Identity */}
          <div className="space-y-2 max-w-md">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-xs shadow-md">
                {profile.initials}
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {profile.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {profile.profession}. Berbasis di {profile.location}.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label={social.name}
              >
                <SocialIcon name={social.icon} className="w-4 h-4" />
              </a>
            ))}

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:text-white hover:bg-blue-600 transition-all duration-200 ml-2"
              aria-label="Kembali ke atas halaman"
              title="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-mono text-[11px]">
            <span>Crafted with Laravel mindset, React & Tailwind</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
