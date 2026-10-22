import { motion } from "framer-motion";
import { processSteps } from "@/data/siteData";
import { getIcon } from "@/components/IconHelper";

export default function Process() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(https://images.pexels.com/photos/4246238/pexels-photo-4246238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            How Our House Shifting Process Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A simple, transparent process – from your first call to the last carton unpacked in your new home.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {processSteps.map((step, idx) => {
            const Icon = getIcon(step.icon);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-white/20">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-bold text-white mb-2 text-base">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/20 z-10" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
