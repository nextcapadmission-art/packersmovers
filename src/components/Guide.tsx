import { motion } from "framer-motion";
import { guideTips, packingMaterials, company } from "@/data/siteData";
import { Phone, Info } from "lucide-react";

export default function Guide() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Complete Guide to Hiring Packers and Movers in India
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            India is one of the world's busiest relocation markets. This short guide explains what to check, what to expect and how to save money on your move.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {guideTips.map((tip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="flex gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                <Info className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1.5">{tip.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white h-full flex flex-col justify-center">
              <Phone className="w-10 h-10 mb-3" />
              <h3 className="text-xl font-bold mb-2">Talk to a Moving Expert</h3>
              <p className="text-orange-50 text-sm mb-4">
                Free advice and quote – 24 hours a day. Our expert calls you back within 10 minutes.
              </p>
              <a
                href={company.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-bold px-5 py-3 rounded-xl hover:bg-orange-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {company.phone}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden h-full">
              <h3 className="text-lg font-bold text-gray-900 p-5 border-b border-gray-100">
                Packing Materials We Use
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left px-5 py-3 font-semibold text-gray-700">Packing Material</th>
                      <th className="text-left px-5 py-3 font-semibold text-gray-700">Used For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {packingMaterials.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                        <td className="px-5 py-3 font-medium text-gray-900">{row.material}</td>
                        <td className="px-5 py-3 text-gray-600">{row.usedFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
