import React, { useState, useEffect } from "react";
import ProgramsCard from "../components/ProgramsCard";
import { projects as initialProjects } from "../data/data";
import Projects from "../components/Projects";
import Evidence from "../components/Evidence";
import { motion } from "framer-motion";


function Programs() {
  const [projectStatus, setProjectStatus] = useState("all");
  const [projectsList, setProjectsList] = useState([]);

  // Synchronize state with local storage
  useEffect(() => {
    const saved = localStorage.getItem("lccdf_projects");
    if (saved) {
      try {
        setProjectsList(JSON.parse(saved));
      } catch {
        setProjectsList(initialProjects);
      }
    } else {
      setProjectsList(initialProjects);
      localStorage.setItem("lccdf_projects", JSON.stringify(initialProjects));
    }
  }, []);

  const filteredProjects = projectsList.filter((project) => {
    if (projectStatus === "all") return true;
    return project.status === projectStatus;
  });


  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-slate-50/50">
      {/* Visual background details */}
      <div className="absolute inset-0 pattern-grid opacity-10 pointer-events-none" />

      {/* Programs Header with modern nature theme gradient */}
      <div className="bg-gradient-to-br from-primary via-emerald-950 to-slate-900 py-20 text-white relative border-b border-emerald-950">
        <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl text-center space-y-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 bg-emerald-800/50 border border-emerald-700/30 px-3 py-1 rounded-full text-emerald-300 text-xs font-bold uppercase tracking-wider"
          >
            <span>Restoration & Services</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white"
          >
            Our Programs & Initiatives
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-emerald-100/70 text-sm md:text-base max-w-xl mx-auto font-body"
          >
            Explore our core focal areas of public health advocacy, girl-child literacy campaigns, and vocational economic training.
          </motion.p>
        </div>
      </div>

      {/* Programs Category Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl space-y-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-heading font-bold text-slate-800 text-center"
          >
            Core Focal Sectors
          </motion.h2>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.div variants={fadeUp}>
              <ProgramsCard />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Visual Evidence Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Evidence />
      </motion.div>

      {/* Projects Timeline Showcase & Dynamic Admin Panel */}
      <div className="py-20 bg-slate-50/50">
        <div className="container mx-auto px-6 max-w-4xl space-y-10">
          
          {/* Section Header + Admin Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-6 border-b border-slate-200/60">
            <div className="space-y-1">
              <h2 className="text-3xl font-heading font-extrabold text-slate-800">
                Grant Project Register
              </h2>
              <p className="text-xs font-body text-slate-500">
                A transparent directory of active and historic state, federal, and global fund grants.
              </p>
            </div>
            
          </div>

          {/* Project Filtering Tab controls */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-100/80 border border-slate-200/40 w-fit self-center mx-auto"
          >
            {["all", "onGoing", "completed"].map((status) => (
              <motion.button
                key={status}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`py-2 px-4 rounded-lg text-xs font-heading font-semibold select-none cursor-pointer transition-all duration-200 ${
                  projectStatus === status
                    ? "bg-white text-primary shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
                onClick={() => setProjectStatus(status)}
              >
                {status === "all"
                  ? "All Projects"
                  : status === "onGoing"
                  ? "Ongoing"
                  : "Completed"}
              </motion.button>
            ))}
          </motion.div>

          {/* Interactive Project List Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
          >
            <Projects 
              filteredProjects={filteredProjects} 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Programs;
