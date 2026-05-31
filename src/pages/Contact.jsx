import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, HelpCircle, ChevronDown, Sparkles } from "lucide-react";

function Contact() {
  // FAQ accordion state
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "When was LCCDF established?",
      a: "Living Care Community Development Foundation was officially founded on the 2nd of March 2007. We have been actively serving and uplifting underserved communities across Kwara State and Nigeria for over 19 years."
    },
    {
      q: "How can I partner or donate to the foundation?",
      a: "We welcome strategic organizational partnerships, civil society alignments, and financial support. Please reach out via our contact form or call our directors directly to coordinate support avenues."
    },
    {
      q: "What regions do you actively serve?",
      a: "While headquartered in Ilorin East Local Government Area, our outreach teams, advocacy campaigns, and home-based care networks cover multiple LGAs across Kwara State and broader regions in Nigeria."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="px-6 py-16 max-w-6xl mx-auto font-body space-y-12 relative"
    >
      {/* Background soft glowing blob */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      {/* Main Header */}
      <div className="text-center sm:text-left space-y-3 pb-6 border-b border-slate-200/60 max-w-2xl">
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/50 px-3 py-1 rounded-full text-emerald-800 text-[10px] font-bold uppercase tracking-wider"
        >
          <Sparkles size={12} className="text-gold" />
          <span>Restoration Counseling & Advocacy</span>
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-heading font-extrabold text-primary tracking-tight"
        >
          Connect With Us
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-sm text-slate-500 leading-relaxed font-body"
        >
          We'd love to hear from you. Reach out for strategic collaboration, project reporting, voluntary outreach support, or general inquiries.
        </motion.p>
      </div>

      {/* Split Pane Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Panel: Contact Cards & FAQs - span 5 */}
        <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
          
          {/* Main Info Blocks */}
          <div className="space-y-4">
            <h2 className="text-xs font-heading font-bold text-slate-400 uppercase tracking-widest">
              Direct Channels
            </h2>
            
            {/* Address */}
            <div className="bg-white border border-slate-100 p-4 rounded-2xl flex items-start gap-4 shadow-sm hover:border-emerald-500/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                <MapPin size={18} />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-heading font-bold text-slate-800 uppercase tracking-wider">Head Office</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-body">
                  Opposite LGEA Primary School, Oke-Ose, Ilorin East LGA, Kwara State, Nigeria
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white border border-slate-100 p-4 rounded-2xl flex items-start gap-4 shadow-sm hover:border-emerald-500/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-gold shrink-0">
                <Phone size={18} />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-heading font-bold text-slate-800 uppercase tracking-wider">Call Directly</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-body">
                  +234 703 714 7543, +234 807 201 1082
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white border border-slate-100 p-4 rounded-2xl flex items-start gap-4 shadow-sm hover:border-emerald-500/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Mail size={18} />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-heading font-bold text-slate-800 uppercase tracking-wider">Email Inquiry</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-body">
                  livingcarefoundation@gmail.com
                </p>
              </div>
            </div>

          </div>

          {/* FAQs Accordion */}
          <div className="space-y-4">
            <h2 className="text-xs font-heading font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <HelpCircle size={14} className="text-emerald-700" />
              Frequently Asked Questions
            </h2>

            <div className="space-y-2.5">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div 
                    key={index}
                    className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 flex items-center justify-between gap-4 font-heading font-bold text-xs text-slate-700 hover:text-primary transition-colors cursor-pointer select-none"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown 
                        size={14} 
                        className={`text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-4 pb-4 text-xs text-slate-500 font-body leading-relaxed border-t border-slate-50 pt-2">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </motion.div>

        {/* Right Panel: Premium Contact Form - span 7 */}
        <motion.div variants={itemVariants} className="lg:col-span-7">
          <ContactForm />
        </motion.div>

      </div>
    </motion.div>
  );
}

export default Contact;
