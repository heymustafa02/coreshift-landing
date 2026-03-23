import { motion } from "motion/react";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white/90 backdrop-blur-xl border border-slate-200/50 rounded-full px-8 py-3 flex items-center gap-12 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]"
      >
        <a href="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
          CoreShift
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-slate-600">
          <a href="#" className="hover:text-black transition-colors">Product</a>
          <a href="#" className="hover:text-black transition-colors">Features</a>
          <a href="#" className="hover:text-black transition-colors">Pricing</a>
          <a href="#" className="hover:text-black transition-colors">Resources</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-[13px] font-semibold text-slate-800 hover:text-black transition-colors px-4 py-2 bg-slate-50 rounded-full">
            Sign in
          </button>
          <button className="bg-black text-white text-[13px] font-bold px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-black/10">
            Request a Demo
          </button>
        </div>
      </motion.nav>
    </div>
  );
}
