import React from "react";
import { partners } from "../data/data";
import { motion } from "framer-motion";

function Partners() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerList = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
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
        Partners & Affiliations
      </motion.h3>

      <motion.p variants={fadeUp} className="font-body mb-2">
        LCCDF partners with the following organizations:
      </motion.p>

      <motion.ul
        variants={staggerList}
        className="list-disc ml-6 columns-2 gap-4 text-sm"
      >
        {partners.map((item) => (
          <motion.li key={item.id} variants={fadeUp}>
            {item.name} <span>{`(${item.abbreviation})`}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default Partners;
