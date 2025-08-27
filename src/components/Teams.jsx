import React from "react";
import { teamMembers } from "../data/data";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

function Teams() {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }, // stagger each card
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
        Team Members
      </motion.h3>

      <motion.ul variants={container} className="grid md:grid-cols-2 gap-4 text-sm">
        {teamMembers.map((member) => (
          <motion.li
            key={member.id}
            variants={card}
            className="flex items-start gap-4 border p-4 rounded shadow bg-white"
            whileHover={{ scale: 1.03, boxShadow: "0px 6px 15px rgba(0,0,0,0.15)" }}
          >
            {member.image && !member.image.includes("placeholder") ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 object-cover rounded-full border border-gray-300"
                onError={(e) => {
                  e.currentTarget.src = "/person.jpeg";
                }}
              />
            ) : (
              <FaUserCircle className="w-20 h-20 text-gray-400" />
            )}
            <div>
              <p className="font-semibold">
                {member.name} -{" "}
                <span className="font-normal">{member.position}</span>
              </p>
              <p>{member.qualification}</p>
              <p className="text-gray-600">Status: {member.status}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default Teams;
