import React from "react";
import { motion } from "framer-motion";
import Hero from "/images/Ngo.avif";
import { Link } from "react-router-dom";
import { Heart, Calendar, Award, Sparkles } from "lucide-react";

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative overflow-hidden bg-gradient-to-b from-emerald-50/30 via-slate-50/50 to-white py-20 lg:py-28 pattern-grid"
    >
      {/* Background Glowing Blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto grid grid-cols-1 items-center gap-x-16 gap-y-16 px-6 md:grid-cols-12 relative z-10 max-w-6xl">
        
        {/* Left: Text Content */}
        <motion.div
          variants={textVariants}
          className="text-center md:text-left md:col-span-7 space-y-6"
        >
          {/* Tagline */}
          <motion.div 
            variants={textVariants}
            className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/50 px-3.5 py-1.5 rounded-full text-emerald-800 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles size={14} className="text-gold animate-spin-slow" />
            <span>Empowering Communities Since 2007</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={textVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-primary leading-[1.12] tracking-tight"
          >
            Promoting Human Dignity,{" "}
            <span className="gradient-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-gold">
              One Community
            </span>{" "}
            at a Time
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={textVariants}
            className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-body font-normal"
          >
            Living Care Community Development Foundation (**LCCDF**) is dedicated to promoting high-quality, gender-inclusive healthcare, education initiatives, and economic empowerment in underserved Nigerian communities.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={textVariants}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-emerald-800 text-white font-heading font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 glow-emerald"
            >
              Get Involved
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center border-2 border-emerald-900/10 hover:border-primary/30 text-primary hover:bg-emerald-50/50 font-heading font-semibold px-8 py-4 rounded-xl transition-all duration-200 bg-white/40"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Image & Floating Badges */}
        <motion.div
          variants={imageContainerVariants}
          className="md:col-span-5 flex justify-center relative"
        >
          <div className="relative w-full max-w-md">
            
            {/* Visual Frame Ring */}
            <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-emerald-900/10 scale-105 pointer-events-none" />
            
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl bg-slate-100 aspect-w-4 aspect-h-5 border border-slate-200">
              <motion.img
                src={Hero}
                alt="LCCDF outreach community work"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // If image fails, show beautiful graphical green card
                  e.currentTarget.style.display = 'none';
                }}
              />
              
              {/* Fallback Graphic when image not present */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent flex flex-col items-center justify-center p-8 text-center text-white space-y-4 select-none pointer-events-none">
                <Heart size={48} className="text-gold animate-bounce" />
                <h4 className="font-heading font-bold text-xl">Living Care Foundation</h4>
                <p className="text-xs text-emerald-100 font-body">Promoting basic health, education and livelihoods across Kwara State & Nigeria</p>
              </div>
            </div>

            {/* Floating Badge 1: Starting Date (March 2, 2007) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-white border border-slate-100 p-3 rounded-xl shadow-lg flex items-center gap-3 select-none backdrop-blur-md bg-white/90 z-20"
            >
              <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Calendar size={18} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-heading">Established</p>
                <p className="text-xs font-heading font-bold text-slate-800">March 2, 2007</p>
              </div>
            </motion.div>

            {/* Floating Badge 2: Years of Impact */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white border border-slate-100 p-3.5 rounded-xl shadow-lg flex items-center gap-3 select-none backdrop-blur-md bg-white/90 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-accent shrink-0">
                <Award size={20} className="text-emerald-700" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-heading">Active Impact</p>
                <p className="text-xs font-heading font-bold text-slate-800">19+ Years of Care</p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
