import React from "react";
import { motion } from "framer-motion";
import { Target, CheckCircle2, Award, Heart } from "lucide-react";

import Partners from "../components/Partners";
import ProgramAreas from "../components/ProgramAreas";
import Services from "../components/Services";
import PeopleProfile from "../components/PeopleProfile";
import ExecutiveDirector from "../components/ExecutiveDirector";
import Introduction from "../components/Introduction";
import Vision from "../components/Vision";

function About() {
  const coreValues = [
    "Value for Human Dignity",
    "Transparency",
    "Honesty",
    "Accountability",
    "Prudence",
    "Diligence",
    "Effective Utilization of Resources",
  ];

  const objectives = [
    "Upscaling access to education for vulnerable children and youth",
    "Promoting high-quality, gender-inclusive healthcare services",
    "Economically empowering marginalized communities",
    "Strengthening staff and volunteer capacity for project execution",
  ];

  // Reusable variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="max-w-6xl mx-auto px-6 py-16 space-y-20 text-slate-800"
    >
      
      {/* SECTION HEADER & LEADERSHIP */}
      <div className="space-y-8">
        <motion.div variants={fadeUp} className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary tracking-tight flex items-center gap-3">
            <span className="w-1.5 h-8 bg-gold rounded-full inline-block" />
            Our Leadership
          </h2>
          <p className="text-slate-500 font-body text-sm max-w-2xl">
            Meet the driving force behind LCCDF's sustainable community initiatives and programs.
          </p>
        </motion.div>
        
        <motion.div variants={fadeUp}>
          <ExecutiveDirector />
        </motion.div>
      </div>

      {/* INTRODUCTION */}
      <motion.div variants={fadeUp} className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm">
        <Introduction />
      </motion.div>

      {/* VISION & MISSION */}
      <motion.div variants={fadeUp} className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm">
        <Vision />
      </motion.div>

      {/* CORE VALUES */}
      <motion.div 
        variants={containerVariants}
        className="space-y-6"
      >
        <h3 className="text-2xl font-heading font-bold text-slate-800 flex items-center gap-2.5">
          <Award className="text-gold" size={24} />
          Core Values
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {coreValues.map((value, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-center gap-3 hover:bg-emerald-50/40 hover:border-emerald-500/20 transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-accent shrink-0">
                <Heart size={16} />
              </div>
              <span className="text-xs font-heading font-semibold text-slate-700 tracking-tight leading-tight">{value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* OBJECTIVES */}
      <motion.div 
        variants={containerVariants}
        className="space-y-6"
      >
        <h3 className="text-2xl font-heading font-bold text-slate-800 flex items-center gap-2.5">
          <Target className="text-emerald-700" size={24} />
          Our Objectives
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {objectives.map((obj, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              whileHover={{ y: -2 }}
              className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-500/20 transition-all duration-200 flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-accent shrink-0 mt-0.5">
                <CheckCircle2 size={18} />
              </div>
              <p className="text-slate-600 font-body text-sm leading-relaxed">{obj}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* SERVICES */}
      <motion.div variants={fadeUp}>
        <Services />
      </motion.div>

      {/* PROGRAMME AREAS */}
      <motion.div variants={fadeUp}>
        <ProgramAreas />
      </motion.div>

      {/* PARTNERS */}
      <motion.div variants={fadeUp}>
        <Partners />
      </motion.div>

      {/* PEOPLE & TEAMS */}
      <div className="space-y-6">
        <motion.div variants={fadeUp} className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary tracking-tight flex items-center gap-3">
            <span className="w-1.5 h-8 bg-gold rounded-full inline-block" />
            Our Officers & Trustees
          </h2>
          <p className="text-slate-500 font-body text-sm max-w-2xl">
            The dedicated professionals and community leaders ensuring transparent, active administration of LCCDF projects.
          </p>
        </motion.div>
        
        <motion.div variants={fadeUp}>
          <PeopleProfile />
        </motion.div>
      </div>

    </motion.section>
  );
}

export default About;
