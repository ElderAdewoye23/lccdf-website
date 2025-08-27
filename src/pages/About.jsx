import React from "react";
import { motion } from "framer-motion";

import Partners from "../components/Partners";
import ProgramAreas from "../components/ProgramAreas";
import Services from "../components/Services";
import PeopleProfile from "../components/PeopleProfile";
import ExecutiveDirector from "../components/ExecutiveDirector";
import Introduction from "../components/Introduction";
import Vision from "../components/Vision";

function About() {
  // Reusable variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerList = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto px-4 py-12 space-y-16 text-gray-800"
    >
      {/* LEADERSHIP */}
      <h2 className="text-2xl md:text-3xl font-heading text-primary mb-6">
        Our Leadership
      </h2>
      <ExecutiveDirector />

      {/* INTRODUCTION */}
      <Introduction />

      {/* VISION & MISSION */}
      <Vision />

      {/* CORE VALUES */}
      <div >
        <h3 className="text-xl font-heading text-primary mb-4">Core Values</h3>
        <ul
          
          className="list-disc ml-6 space-y-1"
        >
          {[
            "Value for Human Dignity",
            "Transparency",
            "Honesty",
            "Accountability",
            "Prudence",
            "Diligence",
            "Effective Utilization of Resources",
          ].map((value, index) => (
            <li key={index} >
              {value}
            </li>
          ))}
        </ul>
      </div>

      {/* OBJECTIVES */}
      <div >
        <h3 className="text-xl font-heading text-primary mb-4">Objectives</h3>
        <ul
          
          className="list-disc ml-6 space-y-1"
        >
          {[
            "Upscaling access to education for vulnerable children and youth",
            "Promoting high-quality, gender-inclusive healthcare services",
            "Economically empowering marginalized communities",
            "Strengthening staff and volunteer capacity for project execution",
          ].map((obj, index) => (
            <li key={index} >
              {obj}
            </li>
          ))}
        </ul>
      </div>

      {/* SERVICES */}
      <Services />

      {/* PROGRAMME AREAS */}
      <ProgramAreas />

      {/* PARTNERS */}
      <Partners />

      {/* PEOPLE */}
      <PeopleProfile />
    </motion.section>
  );
}

export default About;
