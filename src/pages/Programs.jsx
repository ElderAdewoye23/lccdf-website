import React, { useState } from "react";
import ProgramsCard from "../components/ProgramsCard";
import { projects } from "../data/data";
import Projects from "../components/Projects";
import Evidence from "../components/Evidence";
import { motion } from "framer-motion";

function Programs() {
  const [projectStatus, setProjectStatus] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (projectStatus === "all") return true;
    return project.status === projectStatus;
  });

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen">
      {/* Programs Header */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-heading text-primary text-center mb-10"
          >
            Our Programs
          </motion.h1>

          {/* Programs Cards (animate wrapper inside ProgramsCard if you want stagger too) */}
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

      {/* Evidence Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Evidence />
      </motion.div>

      {/* Projects Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Project Buttons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="flex gap-4 mb-6"
          >
            {["all", "onGoing", "completed"].map((status) => (
              <motion.button
                key={status}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`py-2 px-4 rounded-lg ${
                  projectStatus === status
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setProjectStatus(status)}
              >
                {status === "all"
                  ? "All Projects"
                  : status === "onGoing"
                  ? "Ongoing Projects"
                  : "Completed Projects"}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
          >
            <Projects filteredProjects={filteredProjects} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Programs;
