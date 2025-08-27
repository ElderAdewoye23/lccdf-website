import React from "react";
import { keyServices } from "../data/data";
import { motion } from "framer-motion";

function Services() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerList = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
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
        Key Services
      </motion.h3>
      <motion.ul
        variants={staggerList}
        className="space-y-2 list-disc ml-6"
      >
        {keyServices.map((service, index) => (
          <motion.li key={index} variants={fadeUp}>
            <strong>{service.title}</strong>: {service.description}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default Services;
