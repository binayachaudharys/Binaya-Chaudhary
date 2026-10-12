const skills = [
  {
    category: "Shopify & commerce",
    items: ["Shopify apps", "Remix", "Polaris", "App Bridge", "Admin GraphQL", "REST APIs"],
  },
  {
    category: "Frontend",
    items: ["React", "JavaScript", "Web Components", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Backend & data",
    items: ["Laravel", "PHP", "MySQL", "Data modeling", "Query optimization"],
  },
  {
    category: "Ways of working",
    items: ["Git", "GitHub", "JIRA", "Agile / Scrum", "Cross-functional collaboration"],
  },
];

const experience = [
  {
    dates: "Sep 2022 — Present",
    role: "Shopify App Developer",
    company: "Nerd Platoon",
    location: "Bhaktapur, Nepal",
    details: [
      "Build and ship public and custom Shopify applications with Remix, React, and Laravel.",
      "Create merchant dashboards with Shopify Polaris, Web Components, and Tailwind CSS.",
      "Integrate Admin GraphQL and REST APIs with Shopify App Bridge for store operations and data sync.",
      "Grew from engineering intern to core developer, taking ownership of architecture, integrations, and releases.",
    ],
  },
  {
    dates: "Apr 2021 — Nov 2021",
    role: "Web Developer",
    company: "Angika Technology",
    location: "Bangalore, India",
    details: [
      "Developed web applications and content-management platforms using Laravel and WordPress.",
      "Created UI layouts and visual assets, maintained client codebases, and fixed functional issues.",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Hardware & Software Service Platform",
    type: "Troubleshooting portal",
    description:
      "An interactive diagnostic portal that gives people a clearer, structured path to resolve hardware and software issues.",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    theme: "project--mint",
    mark: "01",
  },
  {
    number: "02",
    title: "Chaudhary Shutting Sewa",
    type: "Operations management system",
    description:
      "A small-business management system that digitizes inventory, tracking, and day-to-day operations for a construction services company.",
    stack: ["PHP", "MySQL", "Bootstrap", "CRUD"],
    theme: "project--violet",
    mark: "02",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="shell nav">
          <a className="wordmark" href="#home" aria-label="Binaya Chaudhary, home">
            BC<span>.</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href="mailto:binyasaurahwa@gmail.com">
            Let&apos;s talk <ArrowIcon />
          </a>
        </div>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Shopify app developer · Nepal</p>
            <h1>I build useful things for the <span>web.</span></h1>
            <p className="hero-intro">
              I&apos;m Binaya Chaudhary, a Shopify app developer and full-stack engineer
              creating thoughtful commerce experiences and dependable web products.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#work">
                Explore my work <ArrowIcon />
              </a>
              <a className="text-link" href="mailto:binyasaurahwa@gmail.com">
                Get in touch
              </a>
            </div>
            <div className="hero-meta">
              <span><span className="meta-icon">⌖</span> Bhaktapur, Nepal</span>
              <span><span className="meta-icon">✳</span> English · Nepali · Tharu</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Shopify and full-stack development">
            <div className="art-orbit art-orbit--outer" />
            <div className="art-orbit art-orbit--inner" />
            <div
              className="art-center"
              aria-label="Original red and charcoal mechanical-inspired artwork"
            >
              <span className="art-monogram">BC</span>
              <span className="art-caption">engineered to endure</span>
            </div>
            <div className="float-card float-card--top">
              <span className="float-icon float-icon--red">↗</span>
              <span><b>Shopify apps</b><small>Merchant-first builds</small></span>
            </div>
            <div className="float-card float-card--bottom">
              <span className="float-icon float-icon--purple">&lt;/&gt;</span>
              <span><b>Full-stack</b><small>From interface to API</small></span>
            </div>
            <span className="art-spark art-spark--one">✳</span>
            <span className="art-spark art-spark--two">✦</span>
          </div>

          <div className="hero-bottom">
            <span>Based in Nepal · Working worldwide</span>
            <a href="#about">Scroll to explore <span>↓</span></a>
          </div>
        </section>

        <section className="about section-shell section-pad" id="about">
          <div className="section-kicker"><span>01</span> A little about me</div>
          <div className="about-layout">
            <h2>Engineering that feels <span>simple.</span></h2>
            <div className="about-copy">
              <p>
                I&apos;m a results-driven developer with 4+ years of hands-on experience
                building and maintaining production web applications and e-commerce
                solutions. I enjoy turning complex workflows into intuitive tools
                people can rely on.
              </p>
              <p>
                My work spans embedded Shopify apps, merchant interfaces, APIs, and
                relational databases. I value clear communication, practical
                problem-solving, and shipping quality work as a team.
              </p>
              <a className="inline-link" href="https://www.linkedin.com/in/binayachaudhary/" target="_blank" rel="noreferrer">
                More about my work <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="stats-row">
            <div><strong>4<span>+</span></strong><span>Years building for the web</span></div>
            <div><strong>Full<span>-</span>stack</strong><span>From UI to database</span></div>
            <div><strong>Shopify</strong><span>Apps & merchant experiences</span></div>
          </div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <div className="section-kicker"><span>02</span> Selected work</div>
                <h2>Built to solve <span>real problems.</span></h2>
              </div>
              <p>A few projects from my journey building practical digital products.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className={`project-card ${project.theme}`} key={project.number}>
                  <div className="project-art">
                    <span className="project-index">{project.number} / CASE STUDY</span>
                    <div className="project-window">
                      <div className="window-top"><span /><span /><span /></div>
                      <div className="window-content">
                        <div className="window-sidebar"><i /><i /><i /><i /></div>
                        <div className="window-main">
                          <div className="window-title" />
                          <div className="window-chart"><b /><b /><b /><b /><b /><b /></div>
                          <div className="window-lines"><i /><i /><i /></div>
                        </div>
                      </div>
                    </div>
                    <span className="project-watermark">{project.mark}</span>
                  </div>
                  <div className="project-info">
                    <div className="project-type">{project.type}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-list">
                      {project.stack.map((item) => <span key={item}>{item}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="work-note">
              Project summaries based on selected work in my resume. Detailed case studies coming soon.
            </p>
          </div>
        </section>

        <section className="skills section-shell section-pad" id="skills">
          <div className="section-heading">
            <div>
              <div className="section-kicker"><span>03</span> My toolkit</div>
              <h2>Good tools. <span>Good outcomes.</span></h2>
            </div>
            <p>The technologies I use to take a product from idea to production.</p>
          </div>
          <div className="skills-grid">
            {skills.map((group, index) => (
              <article className="skill-group" key={group.category}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{group.category}</h3>
                <div className="tag-list">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-pad" id="experience">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <div className="section-kicker"><span>04</span> The journey</div>
                <h2>Experience that <span>adds up.</span></h2>
              </div>
              <p>Learning, taking ownership, and growing with every release.</p>
            </div>
            <div className="timeline">
              {experience.map((job) => (
                <article className="timeline-item" key={job.company}>
                  <div className="timeline-date">{job.dates}</div>
                  <div className="timeline-main">
                    <div className="timeline-heading">
                      <div>
                        <h3>{job.role}</h3>
                        <p>{job.company} <span>·</span> {job.location}</p>
                      </div>
                      <span className="timeline-arrow">↗</span>
                    </div>
                    <ul>
                      {job.details.map((detail) => <li key={detail}>{detail}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="education section-shell section-pad" id="education">
          <div className="education-label">
            <div className="section-kicker"><span>05</span> Education</div>
            <h2>Always <span>learning.</span></h2>
          </div>
          <div className="education-list">
            <article><span>2017 — 2020</span><div><h3>Bachelor of Computer Application</h3><p>Acharya Institute of Graduate Studies · Bangalore University</p></div></article>
            <article><span>2015 — 2017</span><div><h3>Intermediate in Commerce (+2)</h3><p>Jan Siksha Secondary School · HSEB</p></div></article>
            <article><span>2015</span><div><h3>School Leaving Certificate</h3><p>Shree Bal Jagriti Higher Secondary School · Government of Nepal</p></div></article>
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <div className="contact-card">
            <div className="contact-glow" />
            <div className="section-kicker"><span>06</span> Have a project in mind?</div>
            <h2>Let&apos;s build something <span>great.</span></h2>
            <p>Open to conversations about Shopify apps, web products, and new opportunities.</p>
            <a className="button button--light" href="mailto:binayasaurahwa@gmail.com">
              Say hello <ArrowIcon />
            </a>
            <div className="contact-details">
              <a href="mailto:binayasaurahwa@gmail.com">binayasaurahwa@gmail.com</a>
              <a href="tel:+9779810771098">+977 9810 771098</a>
              <a href="https://www.linkedin.com/in/binayachaudhary/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <a className="wordmark" href="#home" aria-label="Back to top">BC<span>.</span></a>
          <p>Designed & built by Binaya Chaudhary · Bhaktapur, Nepal</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
