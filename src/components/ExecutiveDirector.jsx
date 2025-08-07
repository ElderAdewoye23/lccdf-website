import React from 'react'
import ED from "/images/executive.jpg"

function ExecutiveDirector() {
  return (
    <div className="flex flex-col items-center gap-6 rounded-xl bg-gray-50 p-8 text-center shadow-sm md:flex-row md:text-left">
      <img
        src={ED}
        alt="Executive Director"
        className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-md"
      />
      <div>
        <h3 className="text-2xl font-heading font-semibold text-primary">
          Mr. ADEWOYE OLUSESAN ELIJAH
        </h3>
        <p className="mt-1 text-lg text-gray-600">
          Executive Director of Living Care Community Development Foundation
        </p>
      </div>
    </div>
  )
}

export default ExecutiveDirector
