import React from "react";
import { programmeAreas } from "../data/data";
import { motion } from "framer-motion";

function ProgramAreas() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerGrid = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h3
        variants={fadeUp}
        className="text-xl font-heading text-primary mb-4"
      >
        Programme Areas
      </motion.h3>
      <motion.div
        variants={staggerGrid}
        className="grid md:grid-cols-3 gap-6"
      >
        {programmeAreas.map((area, index) => (
          <motion.div key={index} variants={fadeUp}>
            <h4 className="font-semibold mb-2">{area.category}</h4>
            <ul className="list-disc ml-5 text-sm">
              {area.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default ProgramAreas;
