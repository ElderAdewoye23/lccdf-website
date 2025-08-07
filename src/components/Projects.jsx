import React, { useState } from 'react'
import { FaProjectDiagram } from "react-icons/fa";


function Projects({ filteredProjects }) {

const [showDetails, setShowDetails] = useState(null);

function toggleDetails(index) {
  setShowDetails((prev) => (prev === index ? null : index));
}

  return (
     <div className="space-y-8">
        {filteredProjects.length === 0 ? (
          <p className="text-gray-500 text-center py-8 bg-gray-50 rounded-lg">No projects found for this filter.</p>
        ) : (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out flex flex-col bg-white"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading text-sm flex items-center gap-3 text-primary font-semibold group">
                  <FaProjectDiagram className="text-accent group-hover:scale-110 transition-transform" /> {project.name}
                </h2>
                <span
                  className={` px-4 py-1 rounded-full text-xs md:text-sm font-semibold select-none transition-colors ${
                    project.status === "onGoing"
                      ? "bg-accent/90 hover:bg-accent text-white"
                      : "bg-gray-600/90 hover:bg-gray-600 text-white"
                  }`}
                >
                  {project.status === "onGoing" ? "On-going" : "Completed"}
                </span>
              </div>

              <div className="grid gap-3 mb-4">
                <p className="font-body text-gray-700">
                  <span className="font-semibold text-gray-900">Client:</span> {project.client}
                </p>
                <p className="font-body text-gray-700">
                  <span className="font-semibold text-gray-900">Position:</span> {project.position}
                </p>
                <p className="font-body text-gray-700">
                  <span className="font-semibold text-gray-900">Value:</span> {project.value} |{" "}
                  <span className="font-semibold text-gray-900">Length:</span> {project.length}
                </p>
              </div>
              <p className="font-body text-gray-700 leading-relaxed">{project.description}</p>
                <button
                    onClick={() => toggleDetails(project.id)} 
                    className="mt-6 text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1 font-medium">
                    {showDetails ? "Hide Details" : "Show Details"}
                    <svg className={`w-4 h-4 transition-transform ${showDetails ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {showDetails === project.id && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg text-gray-700 leading-relaxed">
                      {project.details}
                    </div>
                )}
            </div>
          ))
        )}
      </div>
  )
}

export default Projects
