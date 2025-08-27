import React from "react";
import { motion } from "framer-motion";
import { programs } from "../data/data";

function ProgramsCard() {
  return (
    <div>
      {/* Program Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            className="border border-green-200 rounded-lg overflow-hidden shadow-sm bg-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
            }}
          >
            {/* Image */}
            <div className="h-48 w-full bg-gray-100">
              <motion.img
                src={program.image}
                alt={`${program.title} Program`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                {program.title}
              </h3>
              <p className="text-sm text-gray-700">{program.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProgramsCard;
