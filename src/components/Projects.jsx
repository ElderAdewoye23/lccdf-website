import React, { useState } from "react";
import { 
  FolderGit, 
  Trash2, 
  ChevronDown, 
  User, 
  Briefcase, 
  Calendar, 
  Coins, 
  CheckCircle2, 
  Activity 
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function Projects({ filteredProjects, onDelete }) {
  const [showDetails, setShowDetails] = useState(null);

  function toggleDetails(id) {
    setShowDetails((prev) => (prev === id ? null : id));
  }

  return (
    <div className="space-y-6">
      {filteredProjects.length === 0 ? (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-slate-400 text-center py-12 bg-white border border-slate-100 rounded-2xl shadow-inner font-body text-sm"
        >
          No project records match the active filter criteria.
        </motion.p>
      ) : (
        filteredProjects.map((project, index) => {
          const isOpen = showDetails === project.id;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col bg-white relative overflow-hidden group"
            >
              {/* Top gradient highlights */}
              <div className={`absolute top-0 left-0 w-full h-1 transition-all duration-300 ${
                project.status === "onGoing" ? "bg-accent" : "bg-slate-400"
              }`} />

              {/* Header block with Name & Action button */}
              <div className="flex items-start justify-between gap-6 mb-4">
                <h3 className="font-heading font-extrabold text-slate-800 text-sm leading-snug flex items-start gap-3">
                  <FolderGit className="text-emerald-700 shrink-0 mt-0.5" size={18} />
                  <span>{project.name}</span>
                </h3>
                
                <div className="flex items-center gap-3 shrink-0 select-none">
                  {/* Status Indicator */}
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                      project.status === "onGoing"
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-100"
                        : "bg-slate-50 text-slate-600 border border-slate-100"
                    }`}
                  >
                    {project.status === "onGoing" ? "Ongoing" : "Completed"}
                  </span>
                  
                  {/* Delete option for dynamically added custom records */}
                  {project.isCustom && onDelete && (
                    <button
                      onClick={() => onDelete(project.id)}
                      className="p-1.5 rounded-lg text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                      title="Remove Custom Record"
                    >
                      <Trash2 size={15} />
                    </button>
                  )}
                </div>
              </div>

              {/* Info Badges/Chips Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs font-body text-slate-500 bg-slate-50/50 p-4 rounded-2xl border border-slate-100/50">
                <div className="flex items-center gap-2.5 min-w-0">
                  <User size={13} className="text-emerald-700 shrink-0" />
                  <span className="truncate"><strong>Client:</strong> {project.client}</span>
                </div>
                
                <div className="flex items-center gap-2.5 min-w-0">
                  <Briefcase size={13} className="text-emerald-700 shrink-0" />
                  <span className="truncate"><strong>Position:</strong> {project.position}</span>
                </div>
                
                {/* <div className="flex items-center gap-2.5 min-w-0">
                  <Coins size={13} className="text-emerald-700 shrink-0" />
                  <span className="truncate"><strong>Value:</strong> {project.value}</span>
                </div> */}
                
                <div className="flex items-center gap-2.5 min-w-0">
                  <Calendar size={13} className="text-emerald-700 shrink-0" />
                  <span className="truncate"><strong>Length:</strong> {project.length}</span>
                </div>
              </div>

              {/* Project Brief Description */}
              <p className="font-body text-slate-600 text-sm leading-relaxed mb-4 font-normal">
                {project.description}
              </p>

              {/* Expand Toggle Button */}
              <button
                onClick={() => toggleDetails(project.id)}
                className="w-full sm:w-fit mt-2 text-xs text-emerald-800 hover:text-emerald-600 font-heading font-extrabold flex items-center justify-center gap-1 py-2 px-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-all cursor-pointer self-start"
              >
                <span>{isOpen ? "Hide Checklist Details" : "Show Checklist Details"}</span>
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                />
              </button>

              {/* Animated Checklist Drawer */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 p-5 bg-emerald-50/20 border border-emerald-900/5 rounded-2xl space-y-3.5">
                      <h4 className="text-xs font-heading font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                        <Activity size={12} className="text-gold stroke-[3]" />
                        Scope of Interventions & Metrics
                      </h4>
                      
                      <ul className="space-y-2.5">
                        {Array.isArray(project.details) ? (
                          project.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-body leading-relaxed">
                              <CheckCircle2 size={13} className="text-accent shrink-0 mt-0.5 stroke-[2.5]" />
                              <span>{detail}</span>
                            </li>
                          ))
                        ) : (
                          // Graceful string rendering fallback
                          <li className="flex items-start gap-2.5 text-xs text-slate-600 font-body leading-relaxed">
                            <CheckCircle2 size={13} className="text-accent shrink-0 mt-0.5 stroke-[2.5]" />
                            <span>{String(project.details)}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })
      )}
    </div>
  );
}

export default Projects;
