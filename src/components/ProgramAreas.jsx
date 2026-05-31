import React from "react";
import { programmeAreas } from "../data/data";
import { motion } from "framer-motion";
import { HeartPulse, GraduationCap, Heart, Check } from "lucide-react";

// Helper to map program area categories to icons
function getCategoryIcon(cat) {
  const c = cat.toLowerCase();
  if (c.includes("health")) return <HeartPulse size={22} className="text-emerald-700" />;
  if (c.includes("education")) return <GraduationCap size={22} className="text-indigo-600" />;
  return <Heart size={22} className="text-amber-600" />;
}

function ProgramAreas() {
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const staggerGrid = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerGrid}
      className="space-y-6"
    >
      <motion.h3
        variants={fadeUp}
        className="text-2xl font-heading font-bold text-slate-800 flex items-center gap-3"
      >
        <span className="w-1.5 h-6 bg-gold rounded-full inline-block" />
        Primary Program Areas
      </motion.h3>

      <motion.div
        variants={staggerGrid}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {programmeAreas.map((area, index) => (
          <motion.div 
            key={index} 
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-500/20 transition-all duration-300 flex flex-col gap-5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-800" />
            
            {/* Header section with icon */}
            <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                {getCategoryIcon(area.category)}
              </div>
              <h4 className="font-heading font-extrabold text-slate-800 text-base leading-snug">
                {area.category}
              </h4>
            </div>

            {/* Program sub-items list */}
            <ul className="space-y-3 font-body text-sm text-slate-600">
              {area.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-50 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={10} className="stroke-[3]" />
                  </div>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default ProgramAreas;
