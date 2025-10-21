export default function Contact() {
    return (
      <section id="contact" className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              I'm currently seeking graduate scheme opportunities in software engineering. If you'd like to discuss
              potential opportunities or have any questions, feel free to reach out.
            </p>
  
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a
                href="mailto:jronley@btinternet.com"
                className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors group"
              >
                <svg
                  className="w-8 h-8 mx-auto mb-3 text-muted-foreground group-hover:text-accent transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="font-semibold mb-1 text-card-foreground">Email</h3>
                <p className="text-sm text-muted-foreground">jronley@btinternet.com</p>
              </a>
  
              <a
                href="tel:07557641379"
                className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors group"
              >
                <svg
                  className="w-8 h-8 mx-auto mb-3 text-muted-foreground group-hover:text-accent transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <h3 className="font-semibold mb-1 text-card-foreground">Phone</h3>
                <p className="text-sm text-muted-foreground">07557641379</p>
              </a>
  
              <a
                href="https://www.linkedin.com/in/joshua-onley-6a1258332"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors group"
              >
                <svg
                  className="w-8 h-8 mx-auto mb-3 text-muted-foreground group-hover:text-accent transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <h3 className="font-semibold mb-1 text-card-foreground">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">Connect with me</p>
              </a>
            </div>
  
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Joshua Onley. Built with React and TypeScript.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  