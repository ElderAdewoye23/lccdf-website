import React from 'react'
import { teamMembers } from '../data/data';
import { FaUserCircle } from "react-icons/fa";

function Teams() {
  return (
    <div>
      <h3 className="text-xl font-heading text-primary mb-4">Team Members</h3>
      <ul className="grid md:grid-cols-2 gap-4 text-sm">
        {teamMembers.map((member) => (
          <li key={member.id} className="flex items-start gap-4 border p-4 rounded shadow">
            {member.image && !member.image.includes("placeholder") ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 object-cover rounded-full border border-gray-300"
                onError={(e) => {
                  e.currentTarget.src = "/person.jpeg";
                }}
              />
            ) : (
              <FaUserCircle className="w-20 h-20 text-gray-400" />
            )}
            <div>
              <p className="font-semibold">{member.name} - <span className="font-normal">{member.position}</span></p>
              <p>{member.qualification}</p>
              <p className="text-gray-600">Status: {member.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Teams
