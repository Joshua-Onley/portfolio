export default function About() {
    return (
      <section id="about" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I have recently completed my Master's degree in Advanced Computer Science from the University
                  of Birmingham, where I am predicted a Distinction. My academic background has equipped me with strong
                  foundations in technology, software engineering, and full-stack web development.
                </p>
                <p>
                  I'm passionate about building software that solves real-world problems. My most recent project 'Adventure Code' is a full-stack web-application
                  that supports coding education. For more details scroll down to my Projects section.
                </p>
                <p>
                  Beyond coding, I'm an endurance sports enthusiast who has completed a 100-mile charity bike ride, helping to raise over £600 for charity. I have been regularly playing
                  team sports such as football and hockey from a young age and I frequently go to the gym for strength training. In addition to sports, I also enjoy playing strategy games such as chess.
                </p>
              </div>
            </div>
  
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-4 text-card-foreground">Quick Facts</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Location</dt>
                    <dd className="font-medium text-card-foreground">Birmingham, England</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Education</dt>
                    <dd className="font-medium text-card-foreground">MSc Advanced Computer Science</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Certifications</dt>
                    <dd className="font-medium text-card-foreground">Azure Fundamentals</dd>
                  </div>
                
                </dl>
              </div>
  
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-4 text-card-foreground">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Full-Stack Development",
                    "Python Programming",
                    "FastAPI",
                    "Algorithms",
                    "Cloud Computing",
                    "Endurance Sports",
                    "Chess",
                    "Football",
                    
                  ].map((interest) => (
                    <span key={interest} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  