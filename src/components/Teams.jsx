import React from "react";
import { teamMembers } from "../data/data";
import { motion } from "framer-motion";
import { ShieldCheck, User } from "lucide-react";

// Helper to get initials and corresponding gradient color
function getAvatarFallback(name) {
  const clean = name.replace(/^(mr\.|mrs\.|dr\.)\s+/i, "").trim();
  const parts = clean.split(/\s+/);
  const initials = (parts[0]?.[0] || "") + (parts[1]?.[0] || "");
  
  // Deterministic gradients based on name length or letters
  const code = clean.charCodeAt(0) + clean.charCodeAt(clean.length - 1);
  const gradients = [
    "from-emerald-700 to-teal-900 text-emerald-100",
    "from-slate-700 to-slate-900 text-slate-100",
    "from-indigo-700 to-violet-900 text-indigo-100",
    "from-emerald-900 to-slate-900 text-emerald-100",
    "from-teal-800 to-emerald-950 text-teal-100",
  ];
  
  return {
    initials: initials.toUpperCase().slice(0, 2),
    gradient: gradients[code % gradients.length]
  };
}

function Teams() {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={container}
      className="space-y-6"
    >
      <motion.h3
        variants={card}
        className="text-2xl font-heading font-bold text-slate-800 flex items-center gap-3"
      >
        <span className="w-1.5 h-6 bg-gold rounded-full inline-block" />
        Foundation Officers & Staff
      </motion.h3>

      <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamMembers.map((member) => {
          const fallback = getAvatarFallback(member.name);
          return (
            <motion.div
              key={member.id}
              variants={card}
              className="group border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md bg-white transition-all duration-300 flex items-start gap-5 relative overflow-hidden"
              whileHover={{ y: -3 }}
            >
              {/* Highlight bar for active full-time members */}
              <div className={`absolute top-0 left-0 h-full w-1 ${member.status.toLowerCase() === "full-time" ? "bg-accent" : "bg-slate-300"}`} />
              
              {/* Image / Fallback Container */}
              <div className="relative shrink-0 select-none">
                {member.image && !member.image.includes("placeholder") ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 object-cover rounded-xl border border-slate-100 shadow-inner group-hover:scale-[1.02] transition-transform duration-300"
                    onError={(e) => {
                      // Hide img and render fallback below it
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : null}

                {/* Backing Gradient Fallback Initials */}
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${fallback.gradient} flex flex-col items-center justify-center shadow-sm shrink-0 select-none`}>
                  <span className="text-xl font-heading font-extrabold tracking-wider leading-none">
                    {fallback.initials || <User size={24} />}
                  </span>
                </div>
              </div>

              {/* Text specifications */}
              <div className="space-y-2 flex-grow min-w-0">
                <div className="space-y-0.5">
                  <h4 className="font-heading font-extrabold text-slate-800 text-sm leading-tight truncate">
                    {member.name}
                  </h4>
                  <p className="text-xs font-heading font-bold text-slate-400 uppercase tracking-wider">
                    {member.position}
                  </p>
                </div>
                
                <p className="text-xs text-slate-500 font-body leading-relaxed line-clamp-2">
                  {member.qualification}
                </p>
                
                {/* Badges */}
                <div className="flex items-center gap-2 pt-1">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wide font-heading border ${
                    member.status.toLowerCase() === "full-time"
                      ? "bg-emerald-50 text-emerald-800 border-emerald-100"
                      : "bg-slate-50 text-slate-600 border-slate-100"
                  }`}>
                    {member.status}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Teams;
