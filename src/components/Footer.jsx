import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-100 text-gray-700 pt-10 pb-6 mt-20"
    >
      <motion.div
        className="container mx-auto px-4 grid md:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* About / NGO Info */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h3 className="text-xl font-heading text-primary mb-2">LCCDF</h3>
          <p className="text-sm leading-relaxed">
            Living Care Community Development Foundation (LCCDF) is a
            non-profit NGO promoting healthcare, education, and empowerment in underserved Nigerian communities.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h4 className="text-md font-semibold text-primary mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition">About</Link></li>
            <li><Link to="/programs" className="hover:text-primary transition">Programs</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h4 className="text-md font-semibold text-primary mb-2">Contact Us</h4>
          <ul className="text-sm space-y-1">
            <li>📍 Opp. LGEA Primary School, Oke-Ose, Ilorin East, Kwara State</li>
            <li>📞 +234 703 714 7543, +234 807 201 1082</li>
            <li>✉️ livingcarefoundation@gmail.com</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="border-t border-gray-200 mt-10 pt-4 text-center text-xs text-gray-500"
      >
        &copy; {new Date().getFullYear()} Living Care Community Development Foundation. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
