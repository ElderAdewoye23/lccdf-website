
import React from 'react'
import Hero from '/images/Ngo.avif';
function HeroSection() {
  return (
    <section className="overflow-hidden bg-white py-24">
       <div className="container mx-auto grid grid-cols-1 items-center gap-x-12 gap-y-16 px-4 md:grid-cols-2">
        {/* Left: Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6 leading-tight animate-fade-in">
            Promoting Human Dignity, <span className="text-accent">One Community</span> at a Time
          </h1>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            Living Care Community Development Foundation (LCCDF) empowers underserved communities in Nigeria through healthcare, education, and advocacy.
          </p>
          <div className="space-x-4">
            <a href="/contact" className="inline-block bg-primary text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent transform hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md">
              Get Involved
            </a>
            <a href="/about" className="inline-block border-2 border-primary text-primary font-semibold px-8 py-3.5 rounded-lg hover:bg-primary hover:text-white transition-all duration-200">
              Learn More
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="order-first flex justify-center md:order-last">
          <img
            src={Hero}
            alt="LCCDF community work"
            className="w-full max-w-lg rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
   
  )
}

export default HeroSection
