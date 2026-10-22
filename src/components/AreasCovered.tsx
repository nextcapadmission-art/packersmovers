import { motion } from "framer-motion";
import { areas } from "@/data/siteData";
import { MapPin } from "lucide-react";

export default function AreasCovered() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Packers and Movers Near Me – All Cities Covered
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Searching "packers and movers near me"? Our crews across India reach any city quickly. Choose your area for local rates and details.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {areas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-1.5 bg-white px-4 py-2.5 rounded-xl border border-gray-100 shadow-sm hover:border-orange-300 hover:shadow-md transition-all cursor-default"
            >
              <MapPin className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">{area}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
