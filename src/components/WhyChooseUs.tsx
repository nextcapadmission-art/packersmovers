import { motion } from "framer-motion";
import { features } from "@/data/siteData";
import { getIcon } from "@/components/IconHelper";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Why We Are the Most Trusted Packers Movers in India
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thousands of rupees' worth of furniture, electronics and memories go into a moving truck. Here is how we make sure every item reaches safely.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, idx) => {
            const Icon = getIcon(feature.icon);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -6 }}
                className="group p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 border border-gray-100 hover:border-orange-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
