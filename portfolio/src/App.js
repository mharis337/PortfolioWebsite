import React, { useRef } from 'react';
import Navbar from './components/NavBar';
import AboutMe from './components/About';
import Project from './components/Project';
import Experience from './components/Experience';
import EducationAndCertification from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  const projectRef = useRef(null);

  const scrollToProjects = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#D7D7C4]">
      <Navbar />
      
      <section id="home" className="min-w-[1024px] mx-auto">
        <AboutMe scrollToProjects={scrollToProjects} />
      </section>

      <section id="projects" ref={projectRef} className="min-w-[1024px] mx-auto">
        <Project />
      </section>

      <section id="experience" className="min-w-[1024px] mx-auto">
        <Experience />
      </section>

      <section id="skills" className="min-w-[1024px] mx-auto">
        <Skills />
      </section>

      <section id="education" className="min-w-[1024px] mx-auto">
      <EducationAndCertification />
      </section>

      <section className="min-w-[1024px] mx-auto">
      <Footer />
      </section>
      <Analytics />



      
    </div>



  );
};

export default App;