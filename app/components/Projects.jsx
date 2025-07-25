// Projects.jsx
import { assets, workData } from '@/assets/assets';
import React, { useState } from 'react'; // Import useState
import Image from 'next/image';

const Projects = () => {
  // State to manage the active project for mobile tap
  const [activeProject, setActiveProject] = useState(null);

  const handleProjectClick = (index) => {
    // Toggle the active project. If already active, deactivate it.
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <div id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h2 className='text-center text-5xl font-Ovo'>Projects</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5'>
        {workData.map((project, index) => (
          <div
            key={index}
            className='aspect-square rounded-lg relative cursor-pointer group overflow-hidden'
            onClick={() => handleProjectClick(index)} // Add onClick handler
          >
            <Image
              src={project.bgImage}
              alt={`Project image for ${project.title}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className='object-cover'
            />

            {project.skills && Array.isArray(project.skills) && project.skills.length > 0 && (
              <div className='absolute top-3 left-3 z-20 flex flex-wrap gap-2'>
                {project.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-800 text-white text-xs px-2 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {/* Conditional class for mobile "hover" effect */}
            <div
              className={`absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-start p-5 text-white transition-opacity duration-300 z-30
                opacity-0 group-hover:opacity-85 md:opacity-0 md:group-hover:opacity-85
                ${activeProject === index ? 'opacity-85' : 'opacity-0'}
              `}
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>

              {project.description && (
                <p className="text-sm mb-4 line-clamp-3 md:line-clamp-4 lg:line-clamp-5">
                  {project.description}
                </p>
              )}

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Prevent click on the link from closing the overlay immediately on mobile
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center bg-gray-700 hover:bg-gray-400 transition-colors duration-200 text-white px-4 py-2 rounded-md text-sm font-medium w-fit mt-auto"
                >
                  <Image
                    src={assets.github_mark}
                    alt="GitHub icon"
                    width={16}
                    height={16}
                    className="mr-2 invert"
                  />
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;