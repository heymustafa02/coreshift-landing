import { motion, useScroll, useTransform } from "motion/react";
import { User } from "lucide-react";
import { useRef } from "react";

const ProfileCard = ({ src, className, delay = 0, yOffset = 0 }: { src: string, className: string, delay?: number, yOffset?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 50 }}
    whileInView={{ opacity: 1, scale: 1, y: yOffset }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`relative rounded-[32px] overflow-hidden shadow-2xl ${className}`}
  >
    <img src={src} alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
  </motion.div>
);

export default function Solutions() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="py-48 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-12 shadow-xl shadow-black/5"
        >
          <div className="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-7xl font-bold mb-8 tracking-tight"
        >
          Core HR solutions
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-slate-400 max-w-2xl mx-auto mb-16 font-medium"
        >
          Streamline HR processes in one centralized platform, <br /> enhancing team transparency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <button className="bg-brand-purple text-white px-10 py-4 rounded-full font-bold hover:bg-brand-purple/90 transition-all shadow-xl shadow-brand-purple/20">
            Learn more
          </button>
        </motion.div>

        {/* Grid of profiles with Parallax */}
        <div className="relative max-w-6xl mx-auto h-[800px]">
          {/* Left Column */}
          <motion.div style={{ y: y1 }} className="absolute left-[5%] top-0">
            <ProfileCard src="https://picsum.photos/seed/p1/400/500" className="w-48 h-60" delay={0.1} />
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute left-[18%] top-[250px]">
            <ProfileCard src="https://picsum.photos/seed/p2/400/500" className="w-56 h-72" delay={0.2} />
          </motion.div>
          <motion.div style={{ y: y1 }} className="absolute left-[8%] bottom-0">
            <ProfileCard src="https://picsum.photos/seed/p3/400/500" className="w-44 h-56" delay={0.3} />
          </motion.div>

          {/* Right Column */}
          <motion.div style={{ y: y2 }} className="absolute right-[5%] top-20">
            <ProfileCard src="https://picsum.photos/seed/p4/400/500" className="w-52 h-64" delay={0.4} />
          </motion.div>
          <motion.div style={{ y: y1 }} className="absolute right-[20%] top-[300px]">
            <ProfileCard src="https://picsum.photos/seed/p5/400/500" className="w-56 h-72" delay={0.5} />
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute right-[10%] bottom-10">
            <ProfileCard src="https://picsum.photos/seed/p6/400/500" className="w-48 h-60" delay={0.6} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
