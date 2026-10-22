import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { company } from "@/data/siteData";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <motion.a
        href={company.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, x: 50 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="group flex items-center gap-2 bg-green-500 text-white px-4 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold group-hover:max-w-[120px] transition-all duration-300">
          WhatsApp
        </span>
      </motion.a>
      <motion.a
        href={company.phoneHref}
        initial={{ scale: 0, x: 50 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ delay: 0.6, type: "spring" }}
        className="group flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
        aria-label="Call now"
      >
        <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-30" />
        <Phone className="w-6 h-6 relative" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold group-hover:max-w-[120px] transition-all duration-300 relative">
          Call Now
        </span>
      </motion.a>
    </div>
  );
}
