import React from 'react'
import { boardOfTrustees } from '../data/data'


function Trustees() {
  return (
    <div>
      <div>
        <h3 className="text-xl font-heading text-primary mb-4">Board of Trustees</h3>
        <ul className="grid md:grid-cols-2 gap-4 text-sm">
          {boardOfTrustees.map((member) => (
            <li key={member.id} className="border p-4 rounded shadow">
              <p><strong>{member.name}</strong> - {member.position}</p>
              <p>{member.profession}</p>
              <p className="text-gray-600">Contact: {member.contact}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Trustees
