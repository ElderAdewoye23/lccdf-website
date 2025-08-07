
import React from 'react'
import { programmeAreas } from '../data/data'

function ProgramAreas() {
  return (
    <div>
      <h3 className="text-xl font-heading text-primary mb-4">Programme Areas</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {programmeAreas.map((area, index) => (
          <div key={index}>
            <h4 className="font-semibold mb-2">{area.category}</h4>
            <ul className="list-disc ml-5 text-sm">
              {area.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgramAreas
