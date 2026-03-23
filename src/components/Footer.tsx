import { Instagram, Twitter, Youtube, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="pb-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-[#1a1a1a] rounded-[60px] p-16 md:p-24 relative overflow-hidden text-white">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-32 relative z-10">
            <div className="md:col-span-2">
              <a href="/" className="text-3xl font-bold tracking-tighter flex items-center gap-3 mb-8">
                <span className="bg-brand-red text-white w-10 h-10 rounded-xl flex items-center justify-center text-lg">C</span>
                CoreShift
              </a>
              <p className="text-slate-400 max-w-sm text-lg leading-relaxed font-medium">
                CoreShift is the HRM platform that build a thriving workplace culture—all in one place.
              </p>
              <div className="mt-10 flex gap-4">
                <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-brand-red transition-all duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-brand-red transition-all duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-brand-red transition-all duration-300">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-8">Product</h4>
              <ul className="space-y-5 text-slate-400 text-base font-medium">
                <li><a href="#" className="hover:text-brand-red transition-colors flex items-center gap-2">CoreHR <ArrowUpRight className="w-4 h-4" /></a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors flex items-center gap-2">Recruit <ArrowUpRight className="w-4 h-4" /></a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors flex items-center gap-2">Perform <ArrowUpRight className="w-4 h-4" /></a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors flex items-center gap-2">Pulse <ArrowUpRight className="w-4 h-4" /></a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-8">Features</h4>
              <ul className="space-y-5 text-slate-400 text-base font-medium">
                <li><a href="#" className="hover:text-brand-red transition-colors">Desk</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Time</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Analytics</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-8">Resources</h4>
              <ul className="space-y-5 text-slate-400 text-base font-medium">
                <li><a href="#" className="hover:text-brand-red transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Help Center</a></li>
              </ul>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-full text-center overflow-hidden"
            >
              <h2 className="text-[18vw] font-black leading-none tracking-tighter text-brand-red select-none">
                CoreShift
              </h2>
            </motion.div>
            <div className="w-full h-px bg-white/10 mt-10 mb-10" />
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 font-medium text-sm">
              <p>© 2026 CoreShift. All rights reserved.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>

          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 blur-[120px] rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/10 blur-[120px] rounded-full -ml-48 -mb-48" />
        </div>
      </div>
    </footer>
  );
}
