import React from 'react';

const skills = [
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'C++', icon: 'fas fa-code' },
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'Fullstack Development', icon: 'fas fa-layer-group' },
    { name: 'Web Scraping', icon: 'fas fa-spider' },
    { name: 'Machine Learning', icon: 'fas fa-brain' },
    { name: 'Data Science', icon: 'fas fa-chart-line' },
    { name: 'SQL', icon: 'fas fa-database' },
    { name: 'SFML', icon: 'fas fa-gamepad' },
    { name: 'Git', icon: 'fab fa-git' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Kubernetes', icon: 'fas fa-network-wired' },
    { name: 'Linux', icon: 'fab fa-linux' },
    { name: 'Azure', icon: 'fab fa-microsoft' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'Excel', icon: 'fas fa-file-excel' },
    { name: 'GDB', icon: 'fas fa-bug' },
    { name: 'Agile Methodologies', icon: 'fas fa-sync-alt' },
    { name: 'CI/CD', icon: 'fas fa-play-circle' }
  ];
  

const Skills = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative text-center mb-12">
          <h2 className="text-6xl font-bold text-gray-900 mb-4 relative z-10">Skills</h2>
                    <span
                        className="absolute w-[140px] h-[20px] right-[40%] transform -translate-x-1/2 z-0"
                        style={{ backgroundColor: '#d4a373', top: '2.75rem'  }}
                    ></span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <i className={`${skill.icon} text-4xl text-[#B39774] mb-4`}></i>
              <span className="text-gray-800 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
