import React,{ useState } from 'react'
import ProgramsCard from '../components/ProgramsCard'
import { projects } from '../data/data'
import Projects from '../components/Projects';
import Evidence from '../components/Evidence';


function Programs() {

  const [projectStatus, setProjectStatus] = useState('all')
  const filteredProjects = projects.filter((project) => {
    if (projectStatus === 'all') return true;
    return project.status === projectStatus;
  });

  return (
     <section className="min-h-screen">
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-heading text-primary text-center mb-10">
            Our Programs
          </h1>
          <ProgramsCard />
        </div>
      </div>   

      {/* Visual Evidence Section */}
      <Evidence />

      <div className="bg-white py-16">
        <div className='container mx-auto px-4 max-w-6xl'>
   {/* Projects */}
      {/* Project Buttons */}
      <div className="flex gap-4 mb-6">
        {["all", "onGoing", "completed"].map((status) => (
          <button
            key={status}
            className={`py-2 px-4 rounded-lg ${
              projectStatus === status
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setProjectStatus(status)}
          >
            {status === "all" ? "All Projects" 
            : status === "onGoing" ? "Ongoing Projects" 
            : "Completed Projects"
            }
          </button>
        ) ) }
      </div>
      {/* Projects List */}
<Projects filteredProjects={filteredProjects} />
      </div>
      </div>
    </section>
  )
}

export default Programs
