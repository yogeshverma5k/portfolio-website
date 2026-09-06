function App() {
  const projects = [
    {
      title: "Todo App",
      description:
        "A simple and interactive task management application built with React.",
      tech: "React",
      link: "#",
    },
    {
      title: "Weather App",
      description:
        "A weather application that displays weather information with a clean interface.",
      tech: "React + API",
      link: "#",
    },
    {
      title: "Login & Signup",
      description:
        "A modern login and registration interface with a clean user experience.",
      tech: "React",
      link: "#",
    },
    {
      title: "Profile Section",
      description:
        "A responsive profile section designed using React with a modern layout.",
      tech: "React + CSS",
      link: "#",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git & GitHub",
  ];

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Yogesh.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-text">
          <p className="hello">Hello, I'm</p>

          <h1>Yogesh Verma</h1>

          <h2>Frontend Developer</h2>

          <p>
            I build clean, responsive and user-friendly websites
            using modern web technologies and React.
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
          <span>👨‍💻</span>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section">

        <p className="section-tag">ABOUT ME</p>

        <h2>Who I Am</h2>

        <p className="section-text">
          I'm Yogesh Verma, a beginner frontend developer
          passionate about creating websites and learning
          new technologies. I enjoy turning ideas into
          simple and attractive web experiences.
        </p>

      </section>

      {/* SKILLS */}
      <section id="skills" className="section">

        <p className="section-tag">MY SKILLS</p>

        <h2>Technologies I Use</h2>

        <div className="skills">

          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">

        <p className="section-tag">MY WORK</p>

        <h2>Featured Projects</h2>

        <p className="section-text">
          Some of the projects I have created while learning
          frontend development and React.
        </p>

        <div className="projects">

          {projects.map((project) => (
            <div className="project-card" key={project.title}>

              <div className="project-icon">
                💻
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="tech">
                {project.tech}
              </span>

              <br />

              <a
                href={project.link}
                className="project-link"
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

        <div className="certificates">

          <div className="certificate-card">

            <div className="certificate-placeholder">
              📜
            </div>

            <h3>React Development</h3>

            <p>
              React and frontend development certificate.
            </p>

            <button>
              View Certificate
            </button>

          </div>

          <div className="certificate-card">

            <div className="certificate-placeholder">
              🏆
            </div>

            <h3>JavaScript</h3>

            <p>
              JavaScript fundamentals certificate.
            </p>

            <button>
              View Certificate
            </button>

          </div>

        </div>

      </section>

      {/* EDUCATION */}
      <section id="education" className="section">

        <p className="section-tag">EDUCATION</p>

        <h2>My Education</h2>

        <div className="education-card">

          <div className="education-icon">
            🎓
          </div>

          <div>
            <h3>Computer Science / IT</h3>

            <p>
              Currently pursuing my degree and building
              practical skills in web development.
            </p>

            <span>2023 - Present</span>
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">

        <p className="section-tag">GET IN TOUCH</p>

        <h2>Let's Work Together</h2>

        <p>
          Have a project or opportunity? I'd love to hear
          from you.
        </p>

        <a
          href="mailto:your-email@gmail.com"
          className="btn"
        >
          Email Me
        </a>

      </section>

      {/* FOOTER */}
      <footer>
        <p>
            2026 Yogesh Verma. Built with React.
        </p>
      </footer>

    </div>
  );
}

export default App;