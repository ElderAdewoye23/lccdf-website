import React from "react";
import { boardOfTrustees } from "../data/data";
import { motion } from "framer-motion";

function Trustees() {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }, // delays each card slightly
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.h3
        variants={card}
        className="text-xl font-heading text-primary mb-4"
      >
        Board of Trustees
      </motion.h3>

      <motion.ul
        variants={container}
        className="grid md:grid-cols-2 gap-4 text-sm"
      >
        {boardOfTrustees.map((member) => (
          <motion.li
            key={member.id}
            variants={card}
            className="border p-4 rounded shadow bg-white"
          >
            <p>
              <strong>{member.name}</strong> - {member.position}
            </p>
            <p>{member.profession}</p>
            <p className="text-gray-600">Contact: {member.contact}</p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default Trustees;
