import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, GraduationCap, Building2 } from "lucide-react";

function StatsSection() {
  const stats = [
    {
      id: 1,
      number: "19+",
      label: "Years of Dedication",
      sublabel: "Founded March 2, 2007",
      icon: <CalendarDays className="text-gold" size={24} />,
      color: "from-amber-500/10 to-orange-500/10",
      borderColor: "group-hover:border-gold/30",
    },
    {
      id: 2,
      number: "10,000+",
      label: "Lives & Caregivers Impacted",
      sublabel: "Healthcare & home-based aid",
      icon: <Users className="text-emerald-600" size={24} />,
      color: "from-emerald-500/10 to-teal-500/10",
      borderColor: "group-hover:border-emerald-500/30",
    },
    {
      id: 3,
      number: "125+",
      label: "School Committees Formed",
      sublabel: "Improving literacy outcomes",
      icon: <GraduationCap className="text-blue-600" size={24} />,
      color: "from-blue-500/10 to-indigo-500/10",
      borderColor: "group-hover:border-blue-500/30",
    },
    {
      id: 4,
      number: "13+",
      label: "Global & Core Affiliations",
      sublabel: "Global Fund, Oxfam & more",
      icon: <Building2 className="text-purple-600" size={24} />,
      color: "from-purple-500/10 to-fuchsia-500/10",
      borderColor: "group-hover:border-purple-500/30",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle details */}
      <div className="absolute inset-0 pattern-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-48 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className={`group border border-slate-100 p-6 rounded-2xl bg-gradient-to-b from-white to-slate-50/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${stat.borderColor}`}
            >
              {/* Card accent bg */}
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br ${stat.color} blur-xl -mr-6 -mt-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="space-y-4 relative z-10">
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* Number */}
                <div className="space-y-1">
                  <h3 className="text-3xl font-heading font-extrabold text-primary tracking-tight">
                    {stat.number}
                  </h3>
                  <p className="text-sm font-heading font-semibold text-slate-800 leading-tight">
                    {stat.label}
                  </p>
                </div>
              </div>

              {/* Sublabel */}
              <p className="text-xs text-slate-500 font-body mt-4 pt-4 border-t border-slate-100/80 relative z-10 leading-normal">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default StatsSection;
