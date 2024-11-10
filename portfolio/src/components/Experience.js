const experiences = [
    {
        title: 'Software Developer Intern',
        company: 'Financial Transactions and Reports Analysis Centre of Canada (FINTRAC)',
        date: 'Jan 2023 - Dec 2023',
        description: [
            'Developed an entity resolution package using machine learning, achieving 92% accuracy and enabling optimization of existing projects, boosting processing speed by 80%.',
            'Streamlined the analysis of high-volume data, narrowing search results from over 100,000 records to a few hundred actionable cases through optimized SQL queries and automation scripts.',
            'Expanded search parameters for transaction data analysis, increasing detection of previously untracked entities by 50%, delivering comprehensive, automated client reports.',
            'Utilized Python and SQL to analyze extensive datasets, identifying and rectifying over 10,000 misfiled reports in a relational database.',
        ],
    },
    {
        title: 'DevOps Engineer Intern',
        company: 'Public Services and Procurement Canada (PSPC)',
        date: 'May 2022 - Dec 2022',
        description: [
            'Contributed to the development and optimization of Terraform scripts under the guidance of a mentor, enhancing infrastructure provisioning efficiency and reducing setup time for cloud resources across multiple environments.',
            'Configured and monitored over 15 security alerts using Azure Active Directory, enhancing the overall security posture of the system and ensuring proactive threat detection.',
            'Led a project to validate and present cost-free integration options for Azure DevOps and Microsoft Teams, gaining stakeholder approval and saving the department an estimated $5,000 in potential integration costs.',
            'Developed a web application to automate Azure resource naming, improving consistency and reducing human error across dozens of resources weekly.',
        ],
    },
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
