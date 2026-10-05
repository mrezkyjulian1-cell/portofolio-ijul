import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { 
  Send, 
  Mail, 
  MapPin, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ExternalLink,
  Clock,
  User,
  Sparkles
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";
import { portfolioData } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Contact() {
  const { personal, socials } = portfolioData;

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [recentMessages, setRecentMessages] = useState([]);

  // Load existing messages from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("portfolio_messages");
      if (stored) {
        setRecentMessages(JSON.parse(stored));
      } else {
        // Sample starter testimonial/comment
        setRecentMessages([
          {
            id: "msg-1",
            name: "Alex Pratama",
            message: "Desain portofolio yang sangat bersih dan interaktif! Sukses terus untuk studinya di RPL SMK Wiraswasta Cimahi.",
            date: "2 days ago",
          }
        ]);
      }
    } catch {
      // fallback
    }
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Nama lengkap minimal 2 karakter.";
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Alamat email tidak valid.";
    }
    if (!formData.subject.trim()) {
      errs.subject = "Subjek pesan tidak boleh kosong.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = "Pesan minimal 5 karakter.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);

      // Trigger Confetti Celebration!
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#2c67ed", "#38bdf8", "#8b5cf6", "#ffffff"],
        });
      } catch {
        // safely ignore
      }

      // Add to local storage
      const newMsg = {
        id: `msg-${Date.now()}`,
        name: formData.name,
        message: formData.message,
        date: "Just now",
      };

      const updated = [newMsg, ...recentMessages];
      setRecentMessages(updated);
      try {
        localStorage.setItem("portfolio_messages", JSON.stringify(updated.slice(0, 10)));
      } catch {
        // ignore
      }

      // Reset Form after a short delay
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setSubmittedSuccess(false);
      }, 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div id="Contact" className="absolute top-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <Reveal y={40} delay={0.05}>
          <div className="text-center mb-16">
            <div className="section-badge mx-auto mb-3">Get In Touch</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Let's <span className="grad-vi">Work Together</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
              Punya ide proyek menarik, tawaran kolaborasi, atau sekadar ingin menyapa? Hubungi saya kapan saja!
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (5 Cols): Social & Contact Info Cards */}
          <Reveal y={50} delay={0.15} className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span>FIND ME</span>
            </h3>

            {/* Social connection cards matching the reference website */}
            <div className="space-y-3.5">
              {socials.map((soc) => {
                const getSocialIcon = () => {
                  if (soc.icon === "github") return <GithubIcon className="w-5 h-5" />;
                  if (soc.icon === "linkedin") return <LinkedinIcon className="w-5 h-5" />;
                  if (soc.icon === "instagram") return <InstagramIcon className="w-5 h-5" />;
                  return <Mail className="w-5 h-5" />;
                };

                return (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-blue-500/40 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_25px_-5px_rgba(37,99,235,0.25)]"
                  >
                    {/* Hover Gradient Overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 10% 50%, ${soc.accent}20 0%, transparent 70%)`,
                      }}
                    />

                    <div className="relative z-10 flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm"
                        style={{
                          background: `${soc.accent}15`,
                          border: `1px solid ${soc.accent}35`,
                          color: soc.accent,
                        }}
                      >
                        {getSocialIcon()}
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                          {soc.name}
                        </h4>
                        <p className="text-xs text-slate-400 font-mono mt-0.5">
                          {soc.handle}
                        </p>
                      </div>
                    </div>

                    <ExternalLink className="relative z-10 w-4 h-4 text-slate-500 group-hover:text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                );
              })}
            </div>

            {/* Direct Location & Status Card */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/[0.06] space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{personal.email}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{personal.status}</span>
              </div>
            </div>
          </Reveal>

          {/* Right Column (7 Cols): Modern Message Form */}
          <Reveal y={50} delay={0.25} className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/60 border border-white/[0.08] backdrop-blur-xl shadow-2xl text-left relative overflow-hidden">
              {/* Background ambient lighting inside form */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 mb-6">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light">
                  Formulir terhubung langsung. Kirimkan pesan atau ajakan kolaborasi Anda di bawah ini.
                </p>
              </div>

              {/* Success Notification Alert */}
              <AnimatePresence>
                {submittedSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 mb-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-300 text-xs sm:text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                    <div>
                      <p className="font-bold">Pesan Berhasil Dikirim!</p>
                      <p className="text-slate-300 text-xs mt-0.5">
                        Terima kasih sudah menghubungi. Saya akan membalas secepat mungkin.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rezky Julian"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] text-white text-sm placeholder-slate-500 border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${
                        errors.name
                          ? "border-rose-500/60 focus:border-rose-500"
                          : "border-white/[0.08] focus:border-blue-500"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="mrezkyjulian1@gmail.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] text-white text-sm placeholder-slate-500 border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${
                        errors.email
                          ? "border-rose-500/60 focus:border-rose-500"
                          : "border-white/[0.08] focus:border-blue-500"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider">
                    Subjek Proyek / Pesan *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Penawaran Proyek Website Modern"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] text-white text-sm placeholder-slate-500 border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${
                      errors.subject
                        ? "border-rose-500/60 focus:border-rose-500"
                        : "border-white/[0.08] focus:border-blue-500"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider">
                    Pesan Anda *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ceritakan detail proyek atau pertanyaan yang ingin didiskusikan..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] text-white text-sm placeholder-slate-500 border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 resize-none ${
                      errors.message
                        ? "border-rose-500/60 focus:border-rose-500"
                        : "border-white/[0.08] focus:border-blue-500"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(37,99,235,0.7)] transition-all duration-300 hover:scale-[1.01] active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Guestbook / Recent Interaction Preview */}
              {recentMessages.length > 0 && (
                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
                      Recent Activity / Messages ({recentMessages.length})
                    </span>
                  </div>

                  <div className="space-y-2.5 max-h-40 overflow-y-auto custom-scrollbar pr-1">
                    {recentMessages.slice(0, 3).map((item) => (
                      <div
                        key={item.id}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs space-y-1"
                      >
                        <div className="flex items-center justify-between text-slate-300">
                          <span className="font-semibold text-blue-300 flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {item.name}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono">
                            {item.date}
                          </span>
                        </div>
                        <p className="text-slate-400 font-light line-clamp-2">
                          "{item.message}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
