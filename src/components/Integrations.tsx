import { motion } from "motion/react";
import { Settings } from "lucide-react";

const integrations = [
  { name: "Microsoft Teams", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg" },
  { name: "Gmail", icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" },
  { name: "Loom", icon: "https://cdn.worldvectorlogo.com/logos/loom-1.svg" },
  { name: "Google Meet", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg" },
  { name: "Outlook", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg" },
];

export default function Integrations() {
  return (
    <section className="py-48 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-12 shadow-xl shadow-black/5"
        >
          <div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center">
            <Settings className="w-5 h-5 text-white animate-spin-slow" />
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-7xl font-bold mb-24 max-w-4xl mx-auto leading-tight tracking-tight"
        >
          Integrate with your existing <br /> tools in seconds
        </motion.h2>

        <div className="relative h-[400px] flex items-end justify-center">
          {integrations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotate: -20 }}
              whileInView={{ opacity: 1, y: 0, rotate: (i - 2) * 15 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-32 h-32 bg-white rounded-[32px] shadow-2xl flex items-center justify-center p-8 border border-slate-50"
              style={{
                left: `calc(50% + ${(i - 2) * 160}px)`,
                bottom: `${Math.pow(Math.abs(i - 2), 2) * 20}px`
              }}
            >
              <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-24"
        >
          <p className="text-2xl font-bold mb-2">Loom</p>
          <p className="text-slate-400 font-medium">Video feedback & communication</p>
        </motion.div>
      </div>
    </section>
  );
}
