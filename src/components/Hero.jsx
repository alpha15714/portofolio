import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Database, 
  Server, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin
} from 'lucide-react';
import { profile } from '../data/profile';
import { socialLinks } from '../data/socialLinks';
import { SocialIcon } from './SocialIcons';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Rotating profession ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % profile.roles.length);
        setFadeState(true);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    // If CV file isn't uploaded yet, provide clear user feedback and scroll to contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const getSocialIcon = (iconName) => {
    return <SocialIcon name={iconName} className="w-4 h-4" />;
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-blue-500/10 dark:from-blue-600/15 via-indigo-500/10 dark:via-indigo-600/15 to-violet-500/10 dark:to-violet-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#64748b15_1px,transparent_1px),linear-gradient(to_bottom,#64748b15_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status & Greeting Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                {profile.status.text}
              </span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono">
                <MapPin className="w-3 h-3 text-slate-400" />
                {profile.location}
              </span>
            </div>

            {/* Main Greeting and Name */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase font-mono">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Antonius <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-800 dark:from-blue-400 dark:via-indigo-300 dark:to-white bg-clip-text text-transparent">Malir Istia</span>
              </h1>
              
              {/* Animated Profession Ticker */}
              <div className="h-9 flex items-center text-lg sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
                <span className="text-slate-500 dark:text-slate-400 mr-2.5">Focus:</span>
                <span
                  className={`inline-block text-blue-600 dark:text-blue-400 font-mono tracking-tight transition-all duration-300 transform ${
                    fadeState ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                  }`}
                >
                  {profile.roles[currentRoleIndex]}
                </span>
              </div>
            </div>

            {/* Headline & Description */}
            <div className="space-y-3 max-w-xl">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-100 leading-snug">
                {profile.headline}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                {profile.description}
              </p>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-blue-400/20 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white font-medium text-sm border border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 shadow-xs hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Quick Links */}
            <div className="flex items-center gap-4 pt-3 text-slate-500 dark:text-slate-400">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Connect:</span>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-105 shadow-xs"
                    aria-label={`Kunjungi ${social.name}`}
                    title={social.label}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}

                {/* Email Direct Copy Button */}
                <button
                  type="button"
                  onClick={() => handleCopyEmail(socialLinks.find(s => s.name === 'Email')?.rawEmail || 'antoniusmalir.work@gmail.com')}
                  className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-all duration-200 flex items-center gap-1.5 shadow-xs"
                  title="Salin alamat email"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                  <span>{copiedNotification ? 'Disalin!' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Developer Visual Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white dark:bg-[#0a0f1d]/90 rounded-2xl border border-slate-200 dark:border-slate-800/90 p-5 shadow-xl shadow-slate-200/60 dark:shadow-2xl dark:shadow-black/60 backdrop-blur-xl relative group hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800/80 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    ami-workspace ~ bash
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Developer Environment Mockup */}
              <div className="space-y-4 font-mono text-xs">
                
                {/* Active Stack Tags */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/60 space-y-2">
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-[11px]">
                    <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-medium">
                      <Server className="w-3.5 h-3.5" />
                      Core Environment
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">v11.x</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                      <span>Laravel 11 & PHP 8.3</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      <span>MySQL & Relational SQL</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                      <span>Tailwind CSS & Alpine</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <span>Java OOP (Learning)</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Migration & Route Log */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/60 space-y-2 text-[11px] leading-relaxed">
                  <div className="text-slate-500 dark:text-slate-400 flex items-center justify-between font-medium">
                    <span className="text-slate-700 dark:text-slate-400">$ php artisan migrate:status</span>
                    <span className="text-emerald-600 dark:text-emerald-400">Clean</span>
                  </div>
                  <div className="space-y-1 text-slate-500 dark:text-slate-400">
                    <p className="text-emerald-600 dark:text-emerald-400/90 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 dark:text-emerald-400 shrink-0" />
                      <span>2024_create_users_table ........... [Ran: 1.2ms]</span>
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400/90 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 dark:text-emerald-400 shrink-0" />
                      <span>2024_create_church_members_table .. [Ran: 0.9ms]</span>
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400/90 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 dark:text-emerald-400 shrink-0" />
                      <span>2024_create_rental_fleet_table ..... [Ran: 1.1ms]</span>
                    </p>
                  </div>
                </div>

                {/* System Specs & Metric */}
                <div className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 text-[11px]">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Database className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Query Optimization</span>
                  </div>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold font-mono">0.42ms Latency</span>
                </div>

                {/* Commit signature */}
                <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/60">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-500 dark:text-emerald-400" />
                    Role-Based Access Guard
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">RBAC Active</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
