import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'
import Logo from "../assets/logo.jpg";
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Contact", path: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 glass-card border-b border-slate-200/50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <img 
              src={Logo} 
              alt="LCCDF logo" 
              className="h-10 w-10 rounded-full border border-slate-200 object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                // Graceful fallback if image fails to load
                e.currentTarget.style.display = 'none';
              }} 
            />
            <div className="absolute inset-0 rounded-full bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="text-2xl font-heading font-bold text-primary tracking-tight transition-colors duration-300 group-hover:text-accent">
            LCCDF
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path} 
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium font-body transition-colors duration-300 cursor-pointer ${
                  isActive ? "text-primary font-semibold" : "text-slate-600 hover:text-primary"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <motion.span 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          
          {/* Main Call to Action */}
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-gold hover:bg-gold/90 text-slate-950 font-heading font-semibold text-xs px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 glow-gold"
          >
            Get Involved
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden p-2 rounded-lg text-primary hover:bg-emerald-50 focus:outline-none transition-colors" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-lg px-6 py-4 space-y-2 shadow-inner overflow-hidden"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-medium font-heading transition-all duration-200 ${
                    isActive 
                      ? "text-primary bg-emerald-50/70 font-semibold border-l-4 border-primary" 
                      : "text-slate-600 hover:text-primary hover:bg-slate-50"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-4 border-t border-slate-100 mt-2">
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="w-full text-center block bg-gold text-slate-950 font-heading font-semibold py-3 rounded-xl shadow-sm glow-gold"
              >
                Get Involved
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
