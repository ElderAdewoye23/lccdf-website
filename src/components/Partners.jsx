import React from "react";
import { partners } from "../data/data";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

function Partners() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const staggerList = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerList}
      className="space-y-6"
    >
      <motion.h3
        variants={fadeUp}
        className="text-2xl font-heading font-bold text-slate-800 flex items-center gap-3"
      >
        <span className="w-1.5 h-6 bg-gold rounded-full inline-block" />
        Partners & Core Affiliations
      </motion.h3>

      <motion.p variants={fadeUp} className="font-body text-sm text-slate-500 max-w-2xl leading-relaxed">
        LCCDF maintains strong collaborations and project accountability with key state, federal, and global non-governmental organizations.
      </motion.p>

      <motion.div
        variants={staggerList}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2"
      >
        {partners.map((item) => (
          <motion.div 
            key={item.id} 
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            className="bg-white border border-slate-100 p-4 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md hover:border-emerald-500/20 transition-all duration-200"
          >
            <div className="space-y-1 pr-3">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-heading leading-tight">Partner</p>
              <h4 className="text-xs font-heading font-semibold text-slate-700 leading-snug line-clamp-2">
                {item.name}
              </h4>
            </div>
            
            {/* Abbreviation Badge */}
            <span className="px-2.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 text-[10px] font-extrabold uppercase font-heading tracking-wider shrink-0 select-none shadow-sm">
              {item.abbreviation}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Partners;
