import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ArrowLeft,
  Check,
  Clock,
  ShieldCheck,
  Tag,
} from "lucide-react";
import { services, company } from "@/data/siteData";
import { getIcon } from "@/components/IconHelper";
import CTAFooter from "@/components/CTAFooter";

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h2>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-orange-600 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  const Icon = getIcon(service.icon);
  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-900/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-5 shadow-xl">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed">
              {service.short}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <a
                href={company.phoneHref}
                className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <Phone className="w-5 h-5" />
                Get Free Quote
              </a>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                About This Service
              </h2>
              <p className="text-gray-600 leading-relaxed text-base mb-8">
                {service.long}
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What's Included
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-2.5 p-4 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <div className="shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                How It Works
              </h3>
              <div className="space-y-4">
                {service.steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                      {idx + 1}
                    </div>
                    <p className="text-sm text-gray-700 pt-1.5">{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-5">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-xl">
                  <Tag className="w-8 h-8 mb-3" />
                  <h3 className="text-xl font-bold mb-2">Get Upto 15% Off</h3>
                  <p className="text-orange-50 text-sm mb-4">
                    Book this service online today and get a discount on your move.
                  </p>
                  <a
                    href={company.phoneHref}
                    className="flex items-center justify-center gap-2 bg-white text-orange-600 font-bold px-5 py-3 rounded-xl hover:bg-orange-50 transition-colors w-full"
                  >
                    <Phone className="w-4 h-4" />
                    {company.phone}
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm">
                    Why Choose Us
                  </h4>
                  <ul className="space-y-2.5 text-sm">
                    <li className="flex items-center gap-2 text-gray-600">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      Transit insurance available
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-green-500" />
                      Fixed price, no hidden charges
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4 text-green-500" />
                      Open 24 hours, all 7 days
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-green-500" />
                      GST-registered, IBA-approved
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Other Services You May Need
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedServices.map((s, idx) => {
              const RelIcon = getIcon(s.icon);
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={`/service/${s.id}`}
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                      <RelIcon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                        {s.short}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTAFooter />
    </>
  );
}
