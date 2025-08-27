import React from "react";
import { motion } from "framer-motion";
import Hero from "/images/Ngo.avif";
import { Link } from "react-router-dom";

function HeroSection() {
  // Variants for stagger animation
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden bg-white py-24"
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-x-12 gap-y-16 px-4 md:grid-cols-2">
        
        {/* Left: Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}
          className="text-center md:text-left"
        >
          <motion.h1
            variants={textVariants}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6 leading-tight"
          >
            Promoting Human Dignity,{" "}
            <span className="text-accent">One Community</span> at a Time
          </motion.h1>

          <motion.p
            variants={textVariants}
            transition={{ duration: 0.8 }}
            className="text-gray-700 mb-8 text-lg leading-relaxed"
          >
            Living Care Community Development Foundation (LCCDF) empowers
            underserved communities in Nigeria through healthcare, education,
            and advocacy.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="space-x-4"
          >
            <Link
              to="/contact"
              className="inline-block bg-primary text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent transform hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get Involved
            </Link>
            <Link
              to="/about"
              className="inline-block border-2 border-primary text-primary font-semibold px-8 py-3.5 rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="order-first flex justify-center md:order-last"
        >
          <motion.img
            src={Hero}
            alt="LCCDF community work"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-full max-w-lg rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
