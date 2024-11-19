const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'Financial Transactions and Reports Analysis Centre of Canada (FINTRAC)',
      date: 'Jan 2023 - Dec 2023',
      description: [
        'Created an entity resolution package in Python using machine learning, achieving a 30% increase in accuracy for identifying individuals and an 80% increase in processing speed.',
        'Reduced over 100,000 data records to a few hundred actionable cases by optimizing SQL queries and automating workflows, enabling targeted fraud analysis.',
        'Improved detection of untracked entities by 50% and enhanced client reporting accuracy by automating transaction analysis and report generation, resulting in better fraud prevention.',
        'Identified and rectified over 10,000 misfiled reports in a relational database using Python and SQL, improving compliance and uncovering banks with reporting issues.'
      ]
    },
    {
      title: 'DevOps Engineer Intern',
      company: 'Public Services and Procurement Canada (PSPC)',
      date: 'May 2022 - Dec 2022',
      description: [
        'Configured and monitored 15+ security alerts in Azure Active Directory, reducing response times to security incidents.',
        'Streamlined infrastructure delivery processes by contributing to CI/CD pipelines, automating Terraform deployments, and reducing deployment time.',
        'Implemented and managed Azure DevOps to Microsoft Teams integration, improving team collaboration efficiency by streamlining project assignments.',
        'Automated resource type updates for a naming convention web app by creating a Python-based web scraper, enhancing data consistency and saving hours of manual updates monthly.',
        'Developed detailed documentation and guidelines for Azure DevOps integrations, enabling quicker onboarding and reducing setup errors.'
      ]
    }
  ];

const Experience = () => {
    return (
        <section className="bg-[#D7D7C4] py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12 relative">
                    <h2 className="text-6xl font-bold text-gray-900 mb-4 relative z-10">Experience</h2>
                    <span
                        className="absolute w-[275px] h-[20px] right-[20%] transform -translate-x-1/2 z-0"
                        style={{ backgroundColor: '#d4a373', top: '2.75rem'  }}
                    ></span>
                </div>
                <div className="relative flex flex-col items-center">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#B39774] h-full"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                            >
                                <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#B39774] w-8 h-8 rotate-45 z-10"></div>

                                <div
                                    className={`absolute max-w-xs text-lg font-semibold text-[#B39774] p-2 ${index % 2 === 0 ? 'left-[calc(60%-500px)] text-right' : 'right-[calc(60%-500px)] text-left'
                                        }`}
                                    style={{
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                    }}
                                >
                                    <div className="whitespace-pre-wrap break-words">{exp.date}</div>
                                    <div className="text-2xl font-bold text-gray-900 whitespace-pre-wrap break-words">{exp.title}</div>
                                    <div className="text-md font-medium text-[#B39774] whitespace-pre-wrap break-words">{exp.company}</div>
                                </div>

                                <div
                                    className="bg-[#fefae0] bg-opacity-50 border border-[#B39774] p-6 rounded-lg shadow-lg w-full max-w-md"
                                    style={{
                                        marginLeft: index % 2 === 0 ? '600px' : '0',
                                        marginRight: index % 2 !== 0 ? '600px' : '0',
                                    }}
                                >
                                    <ul className="list-disc list-inside text-gray-700">
                                        {exp.description.map((desc, idx) => (
                                            <li key={idx} className="mb-1">
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
