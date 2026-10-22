import { motion } from "framer-motion";
import { certifications, reviewPlatforms } from "@/data/siteData";
import { getIcon } from "@/components/IconHelper";
import { Star } from "lucide-react";

export default function Certifications() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            GST Registered, ISO Certified & IBA Approved Movers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choosing a registered mover protects you from fraud. Our registrations and approvals are your guarantee of genuine, accountable service.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, idx) => {
            const Icon = getIcon(cert.icon);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-orange-50/50 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{cert.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{cert.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-1">Rated by Customers Across Review Platforms</h3>
          <p className="text-sm text-gray-500">Read what customers say about us.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {reviewPlatforms.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="flex flex-col items-center p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all"
            >
              <div className="text-sm font-bold text-gray-700 mb-1">{p.name}</div>
              <div className="flex items-center gap-1 mb-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-2xl font-bold text-gray-900">{p.rating}</span>
              </div>
              <div className="text-xs text-gray-500">{p.reviews} reviews</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
