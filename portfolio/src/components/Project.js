// Project.js

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import placeHolder from '../images/placeholder-image.jpg';
const projects = [
  {
    title: 'ClimateLens',
    technologies: ['JavaScript', 'Bootstrap', 'React', 'HTML', 'CSS'],
    description: 'Designed an engaging and responsive user interface for a climate change awareness website, ensuring accessibility and visual appeal across various devices. Implemented dynamic content rendering using React and Bootstrap, providing a seamless and interactive user experience with modern styling and optimized performance.',
    liveLink: 'https://github.com/mharis337/ClimateLens',
    githubLink: 'https://github.com/mharis337/ClimateLens',
    image: placeHolder,
  },
  {
    title: 'Gesture-Controlled Drone',
    technologies: ['Python', 'C++', 'ESP32'],
    description: 'Designed and developed a gesture-controlled drone using an ESP32 WROOM microcontroller and a CNN, enabling real-time hand gesture recognition for precise drone maneuvering. Implemented a wireless system to send gesture commands from a computer to the drone, ensuring accurate control using OpenCV, MediaPipe, and C++.',
    liveLink: 'https://github.com/mharis337/Gesture-Controlled-Drone',
    githubLink: 'https://github.com/mharis337/Gesture-Controlled-Drone',
    image: placeHolder,
  },
  {
    title: 'Chess Game',
    technologies: ['C++', 'SFML'],
    description: 'Developed a Chess game using C++, leveraging the SFML library for rich graphical representation and interactive gameplay, demonstrating advanced Object-Oriented Programming skills.',
    liveLink: 'https://github.com/mharis337/Chess',
    githubLink: 'https://github.com/mharis337/Chess',
    image: placeHolder,
  },
];


const Project = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => setShowAll(!showAll);

  const projectsToDisplay = showAll ? projects : projects.slice(0, 2);

  return (
    <section className="bg-white pt-0 pb-4">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="relative text-center mb-24">
        <h2 className="text-6xl font-bold text-gray-900 mb-4 relative z-10">Projects</h2>
            <span
              className="absolute top-11 w-[196px] h-[20px] left-[440px]"
              style={{ backgroundColor: '#d4a373' }}
            ></span>
        </div>

        <div className="space-y-12 ">
          {projectsToDisplay.map((project, index) => (
            <div
              key={index}
              className={`relative flex flex-col lg:flex-row items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
              style={{ minWidth: '800px', maxWidth: '1000px' }}
            >
              <div
                className="h-64 lg:h-80 bg-cover bg-center rounded-lg shadow-lg border-8 mb-16"
                style={{
                  width: '400px',
                  height: '300px',
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderColor: '#faedcd',
                }}
              ></div>

              <div
                className="relative z-10 bg-white border border-[#B39774] p-6 rounded-lg shadow-lg mb-16"
                style={{
                  width: '500px',
                  minWidth: '500px',
                  maxWidth: '500px',
                  marginTop: '-4rem',
                  marginLeft: index % 2 === 0 ? '-50px' : '0',
                  marginRight: index % 2 !== 0 ? '-50px' : '0',
                }}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#D7D7C4] text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-6">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B39774] font-semibold hover:text-[#A67E5B] underline"
                    >
                      Live Site
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B39774] font-semibold hover:text-[#A67E5B] underline"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={toggleShowAll}
            className="flex items-center text-[#B39774] font-semibold hover:text-[#A67E5B] p-2 px-4 border-2 border-[#B39774] rounded-lg"
          >
            {showAll ? 'Show Less' : 'Show More'}
            {showAll ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;