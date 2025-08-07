import React from 'react'
import { keyServices } from '../data/data'
function Services() {
  return (
    <div>
      <h3 className="text-xl font-heading text-primary mb-4">Key Services</h3>
      <ul className="space-y-2 list-disc ml-6">
        {keyServices.map((service, index) => (
          <li key={index}>
            <strong>{service.title}</strong>: {service.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Services
