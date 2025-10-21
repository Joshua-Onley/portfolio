export default function Skills() {
    const skillCategories = [
      {
        category: "Languages",
        skills: ["Python", "TypeScript", "JavaScript", "HTML", "CSS", "SQL"],
      },
      {
        category: "Frameworks & Libraries",
        skills: ["React", "FastAPI", "Pygame", "ReactFlow"],
      },
      {
        category: "Databases",
        skills: ["PostgreSQL", "SQLite"],
      },
      {
        category: "Cloud & DevOps",
        skills: ["Azure", "Docker", "GitHub Actions", "CI/CD"],
      },
      {
        category: "Concepts",
        skills: [
          "Full-Stack Development",
          "Algorithms & Data Structures",
          "Distributed Systems",
          "Secure Systems Design",
          "High Performance Computing",
          "Machine Learning",
        ],
      },
    ]
  
    return (
      <section id="skills" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical Skills</h2>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-card-foreground">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  