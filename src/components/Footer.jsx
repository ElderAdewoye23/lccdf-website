import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="bg-darkgreen text-slate-300 pt-16 pb-8 mt-24 border-t border-emerald-950 relative overflow-hidden"
    >
      {/* Background soft glowing orb */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl -mr-20 -mt-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        
        {/* About / NGO Info - Column span 4 */}
        <motion.div variants={itemVariants} className="md:col-span-4 space-y-4">
          <h3 className="text-2xl font-heading font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-6 bg-gold rounded-full inline-block" />
            LCCDF
          </h3>
          <p className="text-sm leading-relaxed text-slate-300 font-body">
            Living Care Community Development Foundation is a registered, certified 
            Nigerian CBO / NGO working tirelessly since 2007 to uplift underserved populations via healthcare excellence, 
            educational campaigns, and gender-inclusive empowerment.
          </p>
          {/* Social media icons */}
          <div className="flex space-x-3 pt-2">
            {[
              { icon: <Facebook size={18} />, href: "#", name: "Facebook" },
              { icon: <Twitter size={18} />, href: "#", name: "Twitter" },
              { icon: <Linkedin size={18} />, href: "#", name: "LinkedIn" },
              { icon: <Instagram size={18} />, href: "#", name: "Instagram" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-900/60 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gold hover:border-gold hover:-translate-y-1 transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links - Column span 3 */}
        <motion.div variants={itemVariants} className="md:col-span-3 space-y-4">
          <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm font-body">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Our Programs", to: "/programs" },
              { label: "Contact Us", to: "/contact" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link 
                  to={link.to} 
                  className="hover:text-gold hover:pl-1 text-slate-300 transition-all duration-200 inline-flex items-center gap-1.5"
                >
                  <span className="text-emerald-500 font-bold">&middot;</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info - Column span 5 */}
        <motion.div variants={itemVariants} className="md:col-span-5 space-y-4">
          <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider">
            Newsletter & Support
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed font-body">
            Stay up to date with our community impact drives, outreach camps, and developmental projects.
          </p>
          
          {/* Newsletter Input Box */}
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 max-w-md pt-1">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-emerald-950/60 border border-emerald-900/70 text-slate-100 placeholder-slate-500 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent flex-grow font-body"
              required
            />
            <button 
              type="submit" 
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-semibold text-xs px-4 py-2 rounded-lg transition-colors shadow-sm duration-200"
            >
              Subscribe
            </button>
          </form>

          {/* Contact Details */}
          <ul className="text-xs space-y-2.5 pt-2 text-slate-400 font-body">
            <li className="flex items-start gap-2.5">
              <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
              <span>Opposite LGEA Primary School, Oke-Ose, Ilorin East LGA, Kwara State, Nigeria</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={14} className="text-gold shrink-0" />
              <span>+234 703 714 7543, +234 807 201 1082</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={14} className="text-gold shrink-0" />
              <span>livingcarefoundation@gmail.com</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        variants={itemVariants}
        className="border-t border-emerald-950 mt-12 pt-6 text-center text-xs text-slate-500 font-body"
      >
        <p>&copy; {new Date().getFullYear()} Living Care Community Development Foundation (LCCDF). All rights reserved.</p>
        <p className="mt-1 text-slate-600">Starting date: March 2, 2007 - Uplifting lives for over 19 years.</p>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
