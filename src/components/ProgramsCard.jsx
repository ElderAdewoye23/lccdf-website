import React from 'react'
import { programs } from '../data/data'

function ProgramsCard() {
  return (
    <div>
      {/* Program Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="border border-green-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transform hover:scale-102 transition-all duration-300 ease-in-out"
            >
              {/* Image */}
              <div className="h-48 w-full bg-gray-100">
                <img
                  src={program.image}
                  alt={`${program.title} Program`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-700">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default ProgramsCard
