import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  return (
   <footer className="bg-gray-100 text-gray-700 pt-10 pb-6 mt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
        {/* About / NGO Info */}
        <div>
          <h3 className="text-xl font-heading text-primary mb-2">LCCDF</h3>
          <p className="text-sm leading-relaxed">
            Living Care Community Development Foundation (LCCDF) is a
            non-profit NGO promoting healthcare, education, and empowerment in underserved Nigerian communities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-md font-semibold text-primary mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/programs" className="hover:text-primary">Programs</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-md font-semibold text-primary mb-2">Contact Us</h4>
          <ul className="text-sm space-y-1">
            <li>📍 Opp. LGEA Primary School, Oke-Ose, Ilorin East, Kwara State</li>
            <li>📞 +234 703 714 7543, +234 807 201 1082</li>
            <li>✉️ livingcarefoundation@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="border-t border-gray-200 mt-10 pt-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Living Care Community Development Foundation. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
