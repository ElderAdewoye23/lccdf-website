import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, Eye, ShieldCheck, ArrowRight } from "lucide-react";

function AboutSection() {
  const coreValues = [
    "Value for Human Dignity",
    "Transparency",
    "Honesty",
    "Accountability",
    "Prudence",
    "Diligence",
    "Effective Utilization of Resources",
  ];

  // Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="bg-gradient-to-b from-slate-50 to-white py-24 relative overflow-hidden"
      id="about"
    >
      {/* Decorative details */}
      <div className="absolute inset-0 pattern-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <motion.div 
            variants={fadeUp}
            className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/50 px-3 py-1 rounded-full text-emerald-800 text-[10px] font-bold uppercase tracking-wider"
          >
            <span>Who We Are</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary tracking-tight"
          >
            Dedicated to Community Growth
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-600 text-base sm:text-lg leading-relaxed font-body"
          >
            Living Care Community Development Foundation (**LCCDF**) is a registered
            Nigerian Non-Governmental Organization working relentlessly since 2007 to elevate healthcare access, education quality, and economic livelihoods in underserved regions.
          </motion.p>
        </div>

        {/* Mission / Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          
          {/* Mission Card */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-accent" />
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Compass size={24} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-heading font-bold text-slate-800">
                Our Mission
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-body font-normal">
                To provide basic health care, educational and environmental services in society through continuous capacity building, advocacy of leaders and sensitization of the community.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gold" />
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-gold shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Eye size={24} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-heading font-bold text-slate-800">
                Our Vision
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-body font-normal">
                Building a society where high-quality health care, inclusive educational support and environmental services are fully accessible to all individuals.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          variants={staggerContainer}
          className="mt-16 bg-white border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-sm relative overflow-hidden"
        >
          {/* Subtle decoration inside */}
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-emerald-500/5 blur-2xl" />
          
          <motion.h3
            variants={fadeUp}
            className="text-2xl font-heading font-bold text-slate-800 mb-8 text-center"
          >
            Our Core Values
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-50 hover:bg-emerald-50/50 hover:border-emerald-500/30 border border-slate-100 p-4 rounded-xl flex items-center gap-3 transition-colors duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-accent shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <span className="text-slate-700 font-heading text-xs font-semibold tracking-tight">{value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Link */}
        <motion.div
          variants={fadeUp}
          className="text-center mt-12"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-primary hover:bg-emerald-800 text-white font-heading font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Learn More About Us
            <ArrowRight size={16} className="text-gold" />
          </Link>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default AboutSection;
