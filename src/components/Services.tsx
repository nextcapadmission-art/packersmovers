import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/data/siteData";
import { getIcon } from "@/components/IconHelper";

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Packers and Movers Services in India
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            One company for every kind of move – household, corporate, vehicle and storage. Click a service to see its process, details and more.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Link
                  to={`/service/${service.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:bg-orange-500 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-xs font-bold text-orange-600 px-3 py-1.5 rounded-full shadow-md">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {service.short}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Check className="w-3.5 h-3.5 text-green-500" />
                        Free Survey
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
