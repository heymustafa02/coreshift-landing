import { motion } from "motion/react";
import { ReactNode } from "react";
import { 
  Lightbulb, 
  ShieldCheck, 
  Zap, 
  Eye, 
  Check,
  PartyPopper
} from "lucide-react";

const FloatingElement = ({ children, className, delay = 0, yOffset = 10 }: { children: ReactNode, className: string, delay?: number, yOffset?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, -yOffset, 0]
    }}
    transition={{ 
      opacity: { duration: 0.8, delay },
      scale: { duration: 0.8, delay },
      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay }
    }}
    className={`absolute ${className}`}
  >
    {children}
  </motion.div>
);

export default function Hero() {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden min-h-screen flex flex-col items-center">
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Floating Elements Container */}
        <div className="relative w-full max-w-5xl mx-auto h-[450px] mb-16">
          {/* Central Icon */}
          <motion.div 
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 100, delay: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-brand-purple to-brand-purple/80 rounded-[40px] flex items-center justify-center shadow-[0_20px_60px_-10px_rgba(168,85,247,0.5)] z-20"
          >
            <div className="w-16 h-16 rounded-full border-4 border-white/30 flex items-center justify-center">
              <Check className="w-10 h-10 text-white stroke-[3px]" />
            </div>
          </motion.div>

          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full -z-10 opacity-10" viewBox="0 0 1000 450">
            <path d="M500,225 L250,100" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M500,225 L750,100" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M500,225 L250,350" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M500,225 L750,350" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M500,225 L150,225" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M500,225 L850,225" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>

          {/* Icons */}
          <FloatingElement className="top-10 left-[20%] z-10" delay={0.4}>
            <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center shadow-lg shadow-brand-yellow/30">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
          </FloatingElement>

          <FloatingElement className="bottom-10 left-[22%] z-10" delay={0.6} yOffset={-15}>
            <div className="w-20 h-20 bg-brand-blue rounded-3xl flex items-center justify-center shadow-lg shadow-brand-blue/30">
              <PartyPopper className="w-10 h-10 text-white" />
            </div>
          </FloatingElement>

          <FloatingElement className="top-10 right-[20%] z-10" delay={0.8}>
            <div className="w-20 h-20 bg-brand-red rounded-3xl flex items-center justify-center shadow-lg shadow-brand-red/30">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
          </FloatingElement>

          <FloatingElement className="bottom-10 right-[22%] z-10" delay={1} yOffset={-12}>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-black/5">
              <span className="text-3xl font-bold">👀</span>
            </div>
          </FloatingElement>

          {/* Images */}
          <FloatingElement className="top-[35%] left-[5%] z-10" delay={1.2} yOffset={20}>
            <div className="w-24 h-28 rounded-[32px] overflow-hidden border-4 border-white shadow-2xl rotate-[-5deg]">
              <img src="https://picsum.photos/seed/man1/300/400" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </FloatingElement>

          <FloatingElement className="bottom-[20%] right-[8%] z-10" delay={1.4} yOffset={-18}>
            <div className="w-20 h-24 rounded-[28px] overflow-hidden border-4 border-white shadow-2xl rotate-[8deg]">
              <img src="https://picsum.photos/seed/woman1/300/400" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </FloatingElement>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            All-in-one HR <br /> platform
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium">
            CoreShift is a modern, all-in-one HR platform <br /> designed to perfectly fit your business needs
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-red text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-red/90 transition-all shadow-xl shadow-brand-red/20"
          >
            Request a Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
