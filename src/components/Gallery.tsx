import { motion } from "framer-motion";
import { galleryImages } from "@/data/siteData";

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Real Packing & Shifting Photos From Our Moves
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These are photos of real goods packed by our team – sofas, beds, fridges, washing machines, bikes and cartons ready for safe transport.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 aspect-square"
            >
              <img
                src={img}
                alt={`Packing & shifting photo ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
