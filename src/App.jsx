
import "./App.css";

const projects = [
  
  {
    number: "01",
    title: "Notes App",
    category: "CLOUD & DEVOPS",
    description:
      "A cloud-hosted notes application containerized with Docker and deployed using Amazon ECS Fargate, with RDS for database storage, ECR for images, CloudWatch for monitoring, and Terraform for infrastructure provisioning.",
    stack: [
      "Docker",
      "AWS ECS Fargate",
      "Amazon RDS",
      "Terraform",
      "CloudWatch",
    ],
  },

  {
    number: "02",
    title: "AI PDF Chatbot",
    category: "ARTIFICIAL INTELLIGENCE",
    description:
      "A Python application that extracts information from PDF documents to build the foundation for an AI-powered document assistant.",
    stack: ["Python", "PyMuPDF", "AI"],
  },
  {
    number: "03",
    title: "Image Processing Pipeline",
    category: "AWS SERVERLESS",
    description:
      "A serverless image processing workflow using S3, Lambda, and OpenCV, with CloudWatch for monitoring.",
    stack: ["AWS Lambda", "S3", "OpenCV"],
  },
  {
    number: "04",
    title: "Todo Summary Assistant",
    category: "FULL-STACK DEVELOPMENT",
    description:
      "A full-stack task management application built with a REST API, React frontend, MySQL, and containerization.",
    stack: ["React", "Spring Boot", "MySQL", "Docker"],
  },
  {
    number: "05",
    title: "Premier League Data Pipeline",
    category: "DATA ENGINEERING",
    description:
      "A Python ETL pipeline that processes football data, stores Parquet files in Amazon S3, and enables analysis using Athena.",
    stack: ["Python", "Amazon S3", "Athena"],
  },
];


const skills = [
  {
    title: "Programming & Development",
    items: ["Python", "SQL", "JavaScript",  "REST APIs", "React"],
  },
  {
    title: "AWS & Cloud",
    items: [
      "AWS",
      "EC2",
      "S3",
      "IAM",
      "Lambda",
      "CloudWatch",
      "CloudFront",
      "RDS",
    ],
  },
  {
    title: "DevOps & Infrastructure",
    items: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Terraform",
      "Git",
      "GitHub Actions",
      "Linux",
      "CI/CD",
    ],
  },
  {
    title: "Databases & Data Engineering",
    items: [
      "MySQL",
      "ETL Pipelines",
      "PySpark",
      "Parquet",
      "Amazon Athena",
      "Data Processing",
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "OpenCV",
      "Hugging Face",
      "LangChain",
      "Vector Databases",
    ],
  },
  {
    title: "Tools & Analytics",
    items: [
      "GitHub",
      "VS Code",
      "Power BI",
      "Excel",
      "Jupyter Notebook",
      "Postman",
    ],
  },
];


function App() {
  return (
    <>
      <header className="navbar">
        <a className="logo" href="#home">
          SMP<span>.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a className="nav-contact" href="#contact">
            Contact ↗
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              OPEN TO OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO, I'M</p>
            <h1>
              Shashank M P<span className="accent">.</span>
            </h1>

            <h2>
              Building software.
              <br />
              <span>Learning the cloud.</span>
            </h2>

            <p className="hero-description">
              AI & Data Science graduate passionate about Python development,
              cloud infrastructure, automation, and building reliable software.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span>↗</span>
              </a>
              <a
                className="button button-secondary"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View resume ↗
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/shashank030718"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/shashank-m-p007/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Developer technology graphic">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orbit orbit-three"></div>
            <div className="core">
              <span className="core-symbol">&lt;/&gt;</span>
              <span className="core-caption">BUILD · AUTOMATE · DEPLOY</span>
            </div>
            <span className="floating-tag tag-python">Python</span>
            <span className="floating-tag tag-aws">AWS Cloud</span>
            <span className="floating-tag tag-docker">Docker</span>
            <span className="floating-tag tag-git">CI/CD</span>
          </div>

          <a className="scroll-cue" href="#about">
            <span>↓</span> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>A little about my journey.</h2>
          </div>

          <div className="about-grid">
            <div>
              <p className="about-lead">
                I enjoy turning ideas into practical applications and
                understanding what makes them work in production.
              </p>
              <p className="muted">
                I graduated in Artificial Intelligence and Data Science from
                East West Institute of Technology, Bengaluru. I am building
                hands-on experience through projects involving Python,
                full-stack development, AWS, containers, and deployment
                automation.
              </p>
              <p className="muted">
                My goal is to grow as a software and cloud engineer by
                continuously learning, building, testing, and deploying.
              </p>
            </div>

            <div className="about-note">
              <span className="note-mark">✳</span>
              <p>Curious by nature.</p>
              <p>Practical by approach.</p>
              <p>Always learning.</p>
              <span className="note-caption">BENGALURU, INDIA</span>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / TOOLKIT</p>
            <h2>Technologies I work with.</h2>
            <p className="muted">
              Tools I use in projects and continue to develop my skills in.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading project-heading">
            <div>
              <p className="eyebrow">03 / SELECTED WORK</p>
              <h2>Projects I've been building.</h2>
            </div>
            <a
              className="text-link"
              href="https://github.com/shashank030718"
              target="_blank"
              rel="noreferrer"
            >
              All repositories ↗
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-arrow">↗</span>
                </div>

                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href="https://github.com/shashank030718"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Find ${project.title} on GitHub`}
                >
                  Explore on GitHub ↗
                </a>
              </article>
            ))}
          </div>
          <p className="project-disclaimer">
            Project descriptions summarize my work. Individual repository links
            will be added as each project is published.
          </p>
        </section>

        <section className="section certifications-section" id="certifications">
          <div className="section-heading">
            <p className="eyebrow">04 / LEARNING</p>
            <h2>Certifications.</h2>
          </div>

          <div className="certification-list">
            <article className="certification">
              <span className="cert-icon">AWS</span>
              <div>
                <h3>AWS Certified Cloud Practitioner</h3>
                <p className="muted">Amazon Web Services</p>
              </div>
              <span className="cert-check">✓</span>
            </article>

            <article className="certification">
              <span className="cert-icon azure">AZ</span>
              <div>
                <h3>Microsoft Certified: Azure Fundamentals</h3>
                <p className="muted">Microsoft · AZ-900</p>
              </div>
              <span className="cert-check">✓</span>
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <p className="eyebrow">05 / GET IN TOUCH</p>
          <h2>
            Have an opportunity?
            <br />
            <span>Let's connect.</span>
          </h2>
          <p className="muted contact-description">
            I'm interested in entry-level software engineering, Python
            development, cloud, and DevOps opportunities.
          </p>

          <a
            className="button button-primary"
            href="https://www.linkedin.com/in/shashank-m-p007/"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn ↗
          </a>

          <div className="contact-socials">
            <a href="https://github.com/shashank030718" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shashank-m-p007/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          SMP<span>.</span>
        </a>
        <p>Designed and built by Shashank M P · 2026</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
