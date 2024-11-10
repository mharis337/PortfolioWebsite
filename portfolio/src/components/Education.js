const education = [
  {
    institution: 'University of Ottawa',
    degree: 'Honours B.Sc., Major: Computer Science, Minor: Mathematics',
    date: '2020 - 2024',
    coursework: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Database Management Systems',
      'Machine Learning',
      'Web Development',
    ],
  },
];

const certifications = [
  {
    title: 'CompTIA Network+',
    date: 'Obtained Date: September 2024',
  },
];

const EducationAndCertification = () => {
  return (
    <section className="bg-[#D7D7C4] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative text-center mb-12">
          <h2 className="text-6xl font-bold text-gray-900 mb-4 relative z-10">Education & Certifications</h2>
                    <span
                        className="absolute w-[700px] h-[20px] right-[-20%] transform -translate-x-1/2 z-0"
                        style={{ backgroundColor: '#d4a373', top: '2.75rem'  }}
                    ></span>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-3xl font-semibold text-gray-900 mb-6 border-b-2 border-[#d4a373] pb-2">Education</h3>
            <ul>
              {education.map((edu, index) => (
                <li key={index} className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
                  <p className="text-[#B39774] font-medium">{edu.institution}</p>
                  <p className="text-gray-700">{edu.date}</p>

                  {/* 
                  <h5 className="text-lg font-semibold text-gray-800 mt-4">Coursework</h5>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    {edu.coursework.map((course, idx) => (
                      <li key={idx}>{course}</li>
                    ))}
                  </ul>
                  */}
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications Column */}
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-semibold text-gray-900 mb-6 border-b-2 border-[#d4a373] pb-2">Certifications</h3>
            <ul>
              {certifications.map((cert, index) => (
                <li key={index} className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-800">{cert.title}</h4>
                  <p className="text-gray-700">{cert.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndCertification;
