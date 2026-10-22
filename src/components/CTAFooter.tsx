import { Link } from "react-router-dom";
import { Phone, MessageCircle, Truck, Clock, MapPin, Mail } from "lucide-react";
import { company } from "@/data/siteData";

export default function CTAFooter() {
  return (
    <>
      <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "url(https://images.pexels.com/photos/7414934/pexels-photo-7414934.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
              <Clock className="w-4 h-4" />
              {company.hours}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Planning to shift? Get your free quote in 10 minutes.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
              Open 24 hours, all 7 days. Free survey, fixed price, zero hidden charges.
              Book online today and get <span className="text-orange-400 font-semibold">upto 15% off</span> on home & office shifting in India.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={company.phoneHref}
                className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <Phone className="w-5 h-5" />
                {company.phone}
              </a>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-gray-400 pt-14 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white text-base">Ha Packers</div>
                  <div className="text-xs text-gray-500">Packers & Movers India</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Ha Packers is an independent, GST-registered packers and movers company in India offering home shifting, office relocation, packing, car & bike transport, local and long-distance moving and warehousing – open 24 hours, all days.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
                <li><Link to="/#services" className="hover:text-orange-400 transition-colors">Services</Link></li>
                <li><Link to="/#why-us" className="hover:text-orange-400 transition-colors">Why Choose Us</Link></li>
                <li><Link to="/#gallery" className="hover:text-orange-400 transition-colors">Gallery</Link></li>
                <li><Link to="/#faq" className="hover:text-orange-400 transition-colors">FAQs</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm">Our Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/service/home-relocation" className="hover:text-orange-400 transition-colors">Home Relocation</Link></li>
                <li><Link to="/service/office-moving" className="hover:text-orange-400 transition-colors">Office Moving</Link></li>
                <li><Link to="/service/packing-services" className="hover:text-orange-400 transition-colors">Packing Services</Link></li>
                <li><Link to="/service/vehicle-transport" className="hover:text-orange-400 transition-colors">Vehicle Transport</Link></li>
                <li><Link to="/service/local-moving" className="hover:text-orange-400 transition-colors">Local Moving</Link></li>
                <li><Link to="/service/warehousing-services" className="hover:text-orange-400 transition-colors">Warehousing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                  <span>{company.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <a href={company.phoneHref} className="hover:text-orange-400 transition-colors">{company.phone}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <a href={`mailto:${company.email}`} className="hover:text-orange-400 transition-colors">{company.email}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  {company.hours}
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              &copy; 2026 Ha Packers. All Rights Reserved. &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
