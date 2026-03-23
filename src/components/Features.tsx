import { motion } from "motion/react";
import { BarChart3, FileText, ShieldCheck, Users } from "lucide-react";
import { ReactNode } from "react";

const FeatureCard = ({ title, description, children, className }: { title: string, description: string, children: ReactNode, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={`bg-white p-10 rounded-[40px] border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 group ${className}`}
  >
    <div className="mb-10">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-slate-400 text-base font-medium leading-relaxed">{description}</p>
    </div>
    <div className="relative overflow-hidden rounded-3xl bg-[#f8f9fa] p-8 min-h-[250px] flex items-center justify-center">
      {children}
    </div>
  </motion.div>
);

export default function Features() {
  return (
    <section className="py-48 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-7xl font-bold mb-8 tracking-tight"
          >
            Built for everyone
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-slate-400 max-w-2xl mx-auto font-medium"
          >
            Thousands of businesses, from startups to enterprises, use CoreShift to handle payments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* HR Professionals */}
          <FeatureCard 
            title="For HR professionals" 
            description="Use a single cloud system for your employees, candidates and HR processes info."
          >
            <div className="w-full max-w-[240px] bg-white rounded-2xl p-6 shadow-xl shadow-black/5">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold text-slate-400">Attendance Report</span>
                <span className="text-[10px] font-bold bg-slate-50 px-2 py-1 rounded-md">Monthly</span>
              </div>
              <div className="flex justify-between items-end gap-2 h-24">
                {[30, 60, 40, 80, 50, 70].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1, duration: 1 }}
                    className={`flex-1 rounded-t-md ${i === 3 ? 'bg-brand-purple' : 'bg-brand-purple/20'}`}
                  />
                ))}
              </div>
            </div>
          </FeatureCard>

          {/* Managers & Leaders */}
          <FeatureCard 
            title="For managers & leaders" 
            description="Get always up-to-date data and monitor performance of the company."
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-48 h-48 border border-slate-200 rounded-full" />
              <div className="absolute w-32 h-32 border border-slate-200 rounded-full" />
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="glass p-4 rounded-2xl flex items-center gap-3 shadow-2xl z-10"
              >
                <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center text-white">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm whitespace-nowrap">Make Data-Driven Decisions</span>
              </motion.div>
            </div>
          </FeatureCard>

          {/* Legal Teams */}
          <FeatureCard 
            title="For legal teams" 
            description="CoreShift helps legal teams by streamlining compliance, managing contracts and policies."
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div 
                initial={{ x: -20, rotate: -10 }}
                whileInView={{ x: 0, rotate: -5 }}
                className="absolute w-32 h-40 bg-white rounded-xl shadow-lg border border-slate-100"
              />
              <motion.div 
                initial={{ x: 20, rotate: 10 }}
                whileInView={{ x: 0, rotate: 5 }}
                className="absolute w-32 h-40 bg-white rounded-xl shadow-lg border border-slate-100"
              />
              <motion.div 
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                className="w-16 h-16 bg-brand-purple rounded-2xl shadow-2xl z-10 flex items-center justify-center text-white"
              >
                <ShieldCheck className="w-8 h-8" />
              </motion.div>
            </div>
          </FeatureCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* All employee data */}
          <FeatureCard 
            title="All employee data at once" 
            description="Contact and personal information, past and unpaid leave balances, career history, projects and more."
          >
            <div className="w-full bg-white rounded-2xl p-6 shadow-xl shadow-black/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="h-2 w-32 bg-slate-100 rounded-full" />
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-100" />
                    <div className="flex-1 h-2 bg-slate-50 rounded-full" />
                    <div className="w-12 h-2 bg-slate-50 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </FeatureCard>

          {/* Teams & Employees */}
          <FeatureCard 
            title="For teams & employees" 
            description="CoreShift helps legal teams by streamlining compliance, managing contracts and policies."
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-48 h-48 border-2 border-dashed border-slate-200 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-brand-purple" />
                </div>
              </div>
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="absolute w-10 h-10 rounded-full border-2 border-white shadow-lg overflow-hidden"
                  style={{
                    transform: `rotate(${i * 45}deg) translateY(-80px) rotate(-${i * 45}deg)`
                  }}
                >
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" />
                </motion.div>
              ))}
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
