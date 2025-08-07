import React from 'react'
import { partners } from '../data/data'


function Partners() {
  return (
    <div>
        <h3 className="text-xl font-heading text-primary mb-4">Partners & Affiliations</h3>
        <p className="font-body mb-2">LCCDF partners with the following organizations:</p>
        <ul className="list-disc ml-6 columns-2 gap-4 text-sm">
            {partners.map((item) => (
            <li key={item.id}>
              {item.name} <span>{`(${item.abbreviation})`} </span>
               </li>
            ) ) }
        </ul>
      </div>
  )
}

export default Partners
