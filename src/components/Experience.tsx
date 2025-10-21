export default function Experience() {
    const experiences = [
      {
        title: "Contract Packer",
        company: "Lemonpath",
        location: "Loughborough, England",
        period: "08/2022 – 09/2022",
        achievements: [
          "Packed bulk products into retail-ready packages, producing 22+ units per hour",
          "Identified and implemented process improvements that increased packaging speed by 20%",
        ],
      },
      {
        title: "E-Scooter Customer Service / Foot Patroller",
        company: "Wind Mobility",
        location: "Nottingham, England",
        period: "08/2021 – 09/2021",
        achievements: [
          "Resolved 10+ rider inquiries and technical issues on each shift",
          "Inspected 90+ e-scooters per shift for damages and proper parking, maintaining operational standards",
        ],
      },
    ]
  
    const certification = {
      title: "Microsoft Certified: Azure Fundamentals",
      date: "08/2025",
      topics: ["CI/CD pipelines", "Cloud services", "Cloud Architecture", "Resource management"],
    }
  
    return (
      <section id="experience" className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience & Certifications</h2>
  
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">Certifications</h3>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <h4 className="text-lg font-semibold text-card-foreground">{certification.title}</h4>
                  <span className="text-sm text-muted-foreground mt-1 md:mt-0">{certification.date}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {certification.topics.map((topic) => (
                    <span key={topic} className="px-3 py-1 bg-accent/10 text-accent rounded-md text-sm">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">Work Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-card-foreground">{exp.title}</h4>
                        <p className="text-muted-foreground">
                          {exp.company} • {exp.location}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-1 md:mt-0">{exp.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  