import { useState } from 'react';
import { Send, CheckCircle2, Copy, MapPin, Clock, MessageSquare, AlertCircle } from 'lucide-react';
import { socialLinks, contactDetails } from '../data/socialLinks';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null); // null | 'ready-mailto'

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Nama lengkap wajib diisi.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Alamat email wajib diisi.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Format email tidak valid.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Subjek pesan wajib diisi.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Pesan wajib diisi.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Pesan minimal terdiri dari 10 karakter.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Construct mailto URL with prefilled subject and body
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Halo Antonius,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:${contactDetails.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmittedStatus('ready-mailto');
    
    // Automatically trigger mail client
    window.location.href = mailtoUrl;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`py-24 sm:py-32 relative border-t border-slate-800/60 bg-[#070b12]/60 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Useful Together.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Terbuka untuk kolaborasi proyek pengembangan web, sistem backend Laravel, arsitektur database, maupun diskusi teknis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-[#0b101b] border border-slate-800/90 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Direct Email
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <div className="space-y-1">
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="text-base sm:text-lg font-bold text-white hover:text-blue-400 transition-colors block break-all font-mono"
                >
                  {contactDetails.email}
                </a>
                <p className="text-xs text-slate-400">
                  Respon biasanya diberikan dalam waktu 1x24 jam kerja.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all duration-200"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Tersalin ke Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Salin Alamat Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Timezone info */}
            <div className="p-6 rounded-2xl bg-[#0b101b] border border-slate-800/90 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Lokasi Saat Ini</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{contactDetails.location}</p>
                  <p className="text-[11px] font-mono text-slate-400 mt-1">Zona Waktu: {contactDetails.timezone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-2 border-t border-slate-800/80">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Ketersediaan</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{contactDetails.availability}</p>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="p-6 rounded-2xl bg-[#0b101b] border border-slate-800/90 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Profil Sosial & Profesional
              </span>
              <div className="flex flex-col space-y-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs"
                  >
                    <span className="font-medium">{link.name}</span>
                    <span className="text-[11px] font-mono text-slate-400">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0b101b] border border-slate-800/90 shadow-xl space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  Kirim Pesan
                </h3>
                <p className="text-xs text-slate-400">
                  Isi formulir di bawah ini untuk membuka aplikasi email Anda secara otomatis dengan format yang rapi.
                </p>
              </div>

              {submittedStatus === 'ready-mailto' && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 flex items-start gap-3 text-xs text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Format pesan telah disiapkan!</p>
                    <p className="text-emerald-400/80 mt-0.5">
                      Klien email default Anda telah dibuka. Jika klien email tidak muncul otomatis, Anda dapat mengirim langsung ke <span className="font-mono text-white underline">{contactDetails.email}</span>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                
                {/* Name field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300">
                    Nama Lengkap <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Contoh: Budi Santoso"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 transition-colors ${
                      errors.name
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300">
                    Alamat Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nama@perusahaan.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 transition-colors ${
                      errors.email
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300">
                    Subjek Proyek / Diskusi <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Contoh: Pengembangan Web Sistem Informasi / Tawaran Proyek"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 transition-colors ${
                      errors.subject
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300">
                    Detail Pesan <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ceritakan gambaran kebutuhan sistem, estimasi jadwal, atau pertanyaan yang ingin didiskusikan..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 transition-colors resize-y ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 border border-blue-400/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Siapkan & Kirim Email</span>
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
