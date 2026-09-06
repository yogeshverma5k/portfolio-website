import React from "react";

export default function App() {
  const projects = [
    {
      title: "Todo App",
      icon: "✅",
      description:
        "A simple and clean Todo application to add, manage and complete daily tasks.",
      tech: "React",
      link: "#",
    },
    {
      title: "Weather App",
      icon: "🌤️",
      description:
        "A responsive weather application that displays weather information in a simple interface.",
      tech: "React",
      link: "#",
    },
    {
      title: "Login & Signup",
      icon: "🔐",
      description:
        "A modern login and registration interface with a clean and user-friendly design.",
      tech: "React",
      link: "#",
    },
    {
      title: "Profile Section",
      icon: "👤",
      description:
        "A responsive profile section created with React and modern UI styling.",
      tech: "React",
      link: "#",
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">YV.</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <p className="hello">Hello, I'm</p>

          <h1>Yogesh Verma</h1>

          <h2>Frontend Developer</h2>

          <p>
            I'm a beginner frontend developer passionate about creating
            beautiful, responsive and user-friendly websites using modern web
            technologies.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn">
              View Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="profile">
          <img src="/profile.jpg" alt="Yogesh Verma" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <p className="section-tag">ABOUT ME</p>

        <h2>Who I Am</h2>

        <p className="section-text">
          I'm Yogesh Verma, a beginner frontend developer who enjoys creating
          websites and learning new technologies. I like turning simple ideas
          into attractive and responsive web experiences.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <p className="section-tag">MY SKILLS</p>

        <h2>Technologies I Use</h2>

        <div className="skills">
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">GitHub</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <p className="section-tag">MY WORK</p>

        <h2>Projects</h2>

        <p className="section-text">
          Here are some of the projects I have created while learning frontend
          development.
        </p>

        <div className="projects">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-icon">{project.icon}</div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="tech">{project.tech}</span>

              <br />

              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="section">
        <p className="section-tag">ACHIEVEMENTS</p>

        <h2>Certificates</h2>

        <p className="section-text">
          Some certificates I have earned during my learning journey.
        </p>

        <div className="certificates">
          {/* CERTIFICATE 1 */}
          <div className="certificate-card">
            <div className="certificate-placeholder">
              <img
                src="/EduskillJava.jpg"
                alt="EduSkill Java Certificate"
              />
            </div>

            <h3>EduSkill Java Certificate</h3>

            <p>Certificate earned during my Java learning journey.</p>

            <a
              href="/EduskillJava.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <button>View Certificate</button>
            </a>
          </div>

          {/* CERTIFICATE 2 */}
          <div className="certificate-card">
            <div className="certificate-placeholder">
              <img
                src="/Nasscom%20.jpg"
                alt="Nasscom Certificate"
              />
            </div>

            <h3>Nasscom Certificate</h3>

            <p>Certificate received for completing the program successfully.</p>

            <a
              href="/Nasscom%20.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <button>View Certificate</button>
            </a>
          </div>

          {/* CERTIFICATE 3 */}
          <div className="certificate-card">
            <div className="certificate-placeholder">
              <img
                src="/Technova.jpg"
                alt="Technova Certificate"
              />
            </div>

            <h3>Technova Certificate</h3>

            <p>Certificate earned as part of my technical learning journey.</p>

            <a
              href="/Technova.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <button>View Certificate</button>
            </a>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section">
        <p className="section-tag">EDUCATION</p>

        <h2>My Education</h2>

        <div className="education-card">
          <div className="education-icon">🎓</div>

          <div>
            <h3>Student & Frontend Developer</h3>

            <p>
              Currently learning web development and building projects using
              React, JavaScript, HTML and CSS.
            </p>

            <span>Learning • Building • Growing</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <p className="section-tag">GET IN TOUCH</p>

        <h2>Let's Connect</h2>

        <p>
          I'm always interested in learning new things and working on
          interesting projects.
        </p>

        <div className="buttons">
          <a
            href="mailto:your-email@gmail.com"
            className="btn"
          >
            Email Me
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Yogesh Verma. All Rights Reserved.</p>
      </footer>
    </>
  );
}