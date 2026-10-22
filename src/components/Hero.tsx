import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Clock, Star, ChevronRight, Image as ImageIcon } from "lucide-react";
import { company, heroImages, reviewPlatforms } from "@/data/siteData";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[640px] lg:min-h-[720px] pt-24 pb-12 overflow-hidden flex items-center">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-900/75 to-slate-900/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white pt-6 lg:pt-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-300 px-4 py-1.5 rounded-full text-sm font-medium mb-5"
            >
              <Clock className="w-4 h-4" />
              {company.hours}
            </motion.div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Packers and Movers <span className="text-orange-400">India</span> – Safe, Fast & Affordable Shifting 24x7
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
              Ha Packers is a trusted, GST-registered packers and movers company in India for home shifting, office relocation, car & bike transport, packing and storage. Free survey, fixed price, no hidden charges.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <a
                href={company.phoneHref}
                className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <Phone className="w-5 h-5" />
                {company.phone}
              </a>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-5"
            >
              {reviewPlatforms.map((p) => (
                <div key={p.name} className="flex items-center gap-1.5 text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-white">{p.rating}</span>
                  <span className="text-gray-400">{p.name} ({p.reviews})</span>
                </div>
              ))}
            </motion.div>

            <div className="flex items-center gap-2 mt-6">
              <span className="text-xs text-gray-400 flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5" /> Change Background:
              </span>
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentImage
                      ? "bg-orange-500 w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Background ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:my-8"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">
                UPTO 15% OFF
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Get Free Quote</h2>
            <p className="text-sm text-gray-500 mb-5">
              Share your move details. Our moving expert calls back within 10 minutes.
            </p>
            <QuoteForm />
            <p className="text-xs text-gray-400 mt-4 text-center">
              100% privacy. No spam. Call us 24x7: {company.phone}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-8 text-center"
      >
        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center">
          <ChevronRight className="w-8 h-8 text-green-600" />
        </div>
        <p className="text-lg font-bold text-gray-900 mb-1">Thank You!</p>
        <p className="text-sm text-gray-600">
          We have received your request. Our team will call you back within 10 minutes.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <input
          required
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
        />
        <input
          required
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
        />
      </div>
      <input
        type="email"
        placeholder="Email (optional)"
        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
      />
      <div className="grid grid-cols-2 gap-3">
        <select
          required
          defaultValue=""
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
        >
          <option value="" disabled>Move Type</option>
          <option>Home Shifting</option>
          <option>Office Moving</option>
          <option>Vehicle Transport</option>
          <option>Local Moving</option>
          <option>Long Distance</option>
          <option>Warehousing</option>
        </select>
        <select
          required
          defaultValue=""
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
        >
          <option value="" disabled>Home Size</option>
          <option>1 RK / Single Room</option>
          <option>1 BHK</option>
          <option>2 BHK</option>
          <option>3 BHK</option>
          <option>4 BHK / Villa</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="From Location"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
        />
        <input
          type="text"
          placeholder="To Location"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
        />
      </div>
      <textarea
        placeholder="Additional details (optional)"
        rows={2}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
      >
        Get Free Quote
      </button>
    </form>
  );
}
