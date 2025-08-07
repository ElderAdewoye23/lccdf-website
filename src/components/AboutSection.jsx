import React from 'react'
import { Link } from 'react-router-dom'

function AboutSection() {

    const coreValues = [
        "Value for Human Dignity",
        "Transparency",
        "Honesty",
        "Accountability",
        "Prudence",
        "Diligence",
        "Effective Utilization of Resources"
    ];

  return (
     <section className="bg-gradient-to-b from-gray-50 to-white py-20" id="about">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-primary mb-8 text-center">
          Who We Are
        </h2>

        {/* Introduction */}
        <p className="text-gray-700 text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          Living Care Community Development Foundation (LCCDF) is a registered Nigerian NGO
          dedicated to promoting health, education, and economic empowerment in underserved
          communities since 2007.
        </p>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To provide basic health care, educational and environmental services in society
              through continuous capacity building, advocacy of leaders and sensitization of
              the society.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Building a society where quality health care, educational and environmental
              services are accessible to all.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Our Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors duration-200">
                <span className="text-gray-800 font-medium">{value}</span>
              </div>
            ))} 
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/about" 
            className="inline-block bg-primary text-white px-8 py-3.5 rounded-lg hover:bg-accent transform hover:-translate-y-0.5 transition-all duration-200 font-semibold shadow-sm hover:shadow-md"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
