import React from "react";
import { keyServices } from "../data/data";
import { motion } from "framer-motion";
import { 
  HeartPulse, 
  MessageSquare, 
  ShieldAlert, 
  GraduationCap, 
  BookOpen, 
  Activity, 
  Megaphone, 
  Compass, 
  Scissors, 
  Layers, 
  Home 
} from "lucide-react";

// Helper to map services to Lucide icons
function getServiceIcon(title) {
  const t = title.toLowerCase();
  if (t.includes("malaria")) return <ShieldAlert size={20} className="text-emerald-700" />;
  if (t.includes("behavioral") || t.includes("communication")) return <MessageSquare size={20} className="text-blue-600" />;
  if (t.includes("immunization") || t.includes("maternal")) return <HeartPulse size={20} className="text-red-600" />;
  if (t.includes("educational") || t.includes("school")) return <GraduationCap size={20} className="text-indigo-600" />;
  if (t.includes("literacy") || t.includes("adult")) return <BookOpen size={20} className="text-amber-600" />;
  if (t.includes("monitoring") || t.includes("evaluation")) return <Activity size={20} className="text-teal-600" />;
  if (t.includes("advocacy")) return <Megaphone size={20} className="text-purple-600" />;
  if (t.includes("community")) return <Compass size={20} className="text-pink-600" />;
  if (t.includes("vocational") || t.includes("training")) return <Scissors size={20} className="text-rose-600" />;
  if (t.includes("hiv") || t.includes("testing")) return <Activity size={20} className="text-orange-600" />;
  if (t.includes("home-based") || t.includes("care")) return <Home size={20} className="text-violet-600" />;
  return <Layers size={20} className="text-slate-600" />;
}

function Services() {
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const staggerList = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={staggerList}
      className="space-y-6"
    >
      <motion.h3
        variants={fadeUp}
        className="text-2xl font-heading font-bold text-slate-800 flex items-center gap-3"
      >
        <span className="w-1.5 h-6 bg-gold rounded-full inline-block" />
        Key Services & Expertise
      </motion.h3>
      
      <motion.div
        variants={staggerList}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {keyServices.map((service, index) => (
          <motion.div 
            key={index} 
            variants={fadeUp}
            whileHover={{ y: -3 }}
            className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-500/20 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 shadow-inner">
                {getServiceIcon(service.title)}
              </div>
              <h4 className="font-heading font-bold text-slate-800 text-sm leading-snug">
                {service.title}
              </h4>
            </div>
            <p className="text-xs text-slate-500 font-body leading-relaxed mt-3 pt-3 border-t border-slate-50">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Services;
