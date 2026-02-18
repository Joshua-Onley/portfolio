export default function Education() {
    const education = [
      {
        degree: "MSc Advanced Computer Science",
        institution: "University of Birmingham",
        period: "2024-2025",
        classification: "Distinction (obtained)",
        modules: [
          "Designing and Managing Secure Systems",
          "Algorithms and Complexity",
          "High Performance Computing",
          "Distributed Systems",
          "Intelligent Interactive Systems",
          "Game Theory",
        ],
        project: {
          title: "Adventure Code",
          description:
            "Full-stack educational platform for programming with 30+ users. Built with FastAPI, TypeScript, React, PostgreSQL, ReactFlow, Azure, GitHub Actions, and Docker. Since completing this project, I have taken the website down. The website can easily be run locally with just a few commands.",
          link: "https://github.com/Joshua-Onley/AdventureCode",
        },
      },
      {
        degree: "MSc Computer Science",
        institution: "University of Birmingham",
        period: "2023-2024",
        classification: "Distinction",
        modules: [
          "Software Workshop 1 (Python)",
          "Software Workshop 2 (Full-stack Development)",
          "Data Structures, Algorithms & Databases",
          "Computer Systems",
          "Artificial Intelligence and Machine Learning",
          "Building Usable Software",
        ],
        project: {
          title: "Chess Engine",
          description:
            "Python-based chess engine achieving 1700+ ELO rating. Built with Python and Pygame. Awarded distinction (79/100).",
	  link: "https://github.com/Joshua-Onley/PythonChessEngine"
	  
        },
      },
      {
        degree: "BSc Sports Exercise and Health Sciences",
        institution: "University of Birmingham",
        period: "2020-2023",
        classification: "First Class",
        project: {
          title: "Dissertation",
          description:
            "The Effect of Exercise on Physiological Finger Tremor - involved programming in MATLAB to measure and plot finger tremor data.",
        },
      },
    ]
  
    return (
      <section id="education" className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>
  
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-card-foreground">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                    <p className="text-sm font-medium text-secondary">{edu.classification}</p>
                  </div>
                </div>
  
                {edu.modules && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-card-foreground">Taught Modules:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.modules.map((module) => (
                        <span key={module} className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-sm">
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
  
                {edu.project && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="text-sm font-semibold mb-2 text-card-foreground">{edu.project.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{edu.project.description}</p>
                    {edu.project.link && (
                      <a
                        href={edu.project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-sm text-accent hover:underline"
                      >
                        View project
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
