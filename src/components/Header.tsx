import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Phone, Menu, X, Truck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/data/siteData";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Gallery", href: "/#gallery" },
  { label: "FAQs", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <motion.div
            initial={{ rotate: -10, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md"
          >
            <Truck className="w-6 h-6 text-white" />
          </motion.div>
          <div className="leading-tight">
            <div className="font-bold text-gray-900 text-base sm:text-lg">
              Ha <span className="text-orange-600">Packers</span>
            </div>
            <div className="text-[10px] sm:text-xs text-gray-500 font-medium">
              Packers & Movers India
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-3.5 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={company.phoneHref}
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-4 py-2.5 rounded-xl text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden md:inline">{company.phone}</span>
            <span className="md:hidden">Call Now</span>
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-700 hover:bg-orange-50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={company.phoneHref}
                className="flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-4 py-2.5 rounded-xl text-sm mt-2"
              >
                <Phone className="w-4 h-4" />
                {company.phone}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
