import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "HR Director at Nexa Solutions",
    image: "https://picsum.photos/seed/sarah/200/200",
    rating: 5.0,
    text: "CoreShift has streamlined our HR processes, making tasks like onboarding and performance tracking more efficient. It helps us stay organized and saves our team time, allowing us to focus more on supporting our employees."
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const flapRotate = useTransform(scrollYProgress, [0.3, 0.5], [0, -180]);
  const cardY = useTransform(scrollYProgress, [0.4, 0.6], [0, -150]);
  const cardScale = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1]);

  return (
    <section ref={containerRef} className="py-64 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-7xl font-bold mb-8 tracking-tight"
        >
          Words of Appreciation
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-slate-400 max-w-2xl mx-auto mb-32 font-medium"
        >
          Thousands of businesses, from startups to enterprises, use CoreShift to handle payments.
        </motion.p>

        <div className="relative max-w-4xl mx-auto h-[600px] flex items-center justify-center">
          <div className="envelope-wrapper relative w-full max-w-[600px] h-[400px] bg-[#f8f9fa] rounded-2xl shadow-2xl">
            {/* Envelope Flap */}
            <motion.div 
              style={{ rotateX: flapRotate }}
              className="envelope-flap absolute top-0 left-0 w-full h-1/2 bg-[#e9ecef] rounded-t-2xl origin-top z-30 border-b border-slate-200"
            />
            
            {/* Envelope Body Front */}
            <div className="envelope-body absolute bottom-0 left-0 w-full h-full bg-[#f8f9fa] rounded-2xl z-20 border border-slate-200 shadow-inner" />

            {/* The Card inside */}
            <motion.div 
              style={{ y: cardY, scale: cardScale }}
              className="envelope-card absolute top-10 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-3xl p-12 shadow-2xl z-10 border border-slate-100"
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-2xl overflow-hidden mb-8 shadow-xl border-4 border-white">
                  <img src={testimonials[0].image} alt={testimonials[0].name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-bold mb-1">{testimonials[0].name}</h3>
                <p className="text-slate-400 font-medium mb-8">{testimonials[0].role}</p>
                
                <div className="flex items-center gap-1 mb-10">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-3 font-bold text-lg">{testimonials[0].rating.toFixed(1)}</span>
                </div>

                <p className="text-2xl text-slate-700 italic leading-relaxed font-medium">
                  "{testimonials[0].text}"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
