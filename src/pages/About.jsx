import React from 'react'

import Partners from '../components/Partners'
import ProgramAreas from '../components/ProgramAreas'
import Services from '../components/Services'
import PeopleProfile from '../components/PeopleProfile'
import ExecutiveDirector from '../components/ExecutiveDirector'
import Introduction from '../components/Introduction'
import Vision from '../components/Vision'
function About() {
  return (
    
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-16 text-gray-800">
      {/* LEADERSHIP */}
      <div>
        <h2 className="text-2xl md:text-3xl font-heading text-primary mb-6">Our Leadership</h2>
        <ExecutiveDirector />
      </div>
      {/* INTRODUCTION */}
      <Introduction />

      {/* VISION & MISSION */}
     <Vision />

      {/* CORE VALUES */}
      <div>
        <h3 className="text-xl font-heading text-primary mb-4">Core Values</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Value for Human Dignity</li>
          <li>Transparency</li>
          <li>Honesty</li>
          <li>Accountability</li>
          <li>Prudence</li>
          <li>Diligence</li>
          <li>Effective Utilization of Resources</li>
        </ul>
      </div>

      {/* OBJECTIVES */}
      <div>
        <h3 className="text-xl font-heading text-primary mb-4">Objectives</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Upscaling access to education for vulnerable children and youth</li>
          <li>Promoting high-quality, gender-inclusive healthcare services</li>
          <li>Economically empowering marginalized communities</li>
          <li>Strengthening staff and volunteer capacity for project execution</li>
        </ul>
      </div>

      {/* SERVICES PROVIDED */}
     <Services />

      {/* PROGRAMME AREAS */}
     <ProgramAreas />

      {/* PARTNERS */}
     <Partners />

     {/* People */}
     <div className="mt-10">
      <PeopleProfile />
     </div>
    </section>
  )
}

export default About
