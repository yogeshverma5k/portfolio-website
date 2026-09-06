function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <h2>Yogesh.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero">
        <div className="hero-text">
          <p className="hello">Hello, I'm</p>

          <h1>Yogesh Verma</h1>

          <h2>Frontend Developer</h2>

          <p>
            I create simple and beautiful websites using
            HTML, CSS, JavaScript and React.
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
          👨‍💻
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          Hi! I'm Yogesh, a beginner frontend developer
          who enjoys building websites and learning new
          technologies.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>My Skills</h2>

        <div className="skills">
          <div className="card">HTML</div>
          <div className="card">CSS</div>
          <div className="card">JavaScript</div>
          <div className="card">React</div>
          <div className="card">Git & GitHub</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>My Projects</h2>

        <div className="projects">

          <div className="project-card">
            <h3>Todo App</h3>
            <p>
              A simple task management application
              built with React.
            </p>

            <button>View Project</button>
          </div>

          <div className="project-card">
            <h3>Login & Signup</h3>
            <p>
              A modern authentication interface
              created using React.
            </p>

            <button>View Project</button>
          </div>

          <div className="project-card">
            <h3>Voting App</h3>
            <p>
              An interactive voting project built
              using web technologies.
            </p>

            <button>View Project</button>
          </div>

        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="section">
        <h2>Certificates</h2>

        <div className="certificates">

          <div className="certificate-card">
            <div className="certificate-image">
              📜
            </div>

            <h3>React Certificate</h3>

            <p>React Development</p>

            <button>View Certificate</button>
          </div>

          <div className="certificate-card">
            <div className="certificate-image">
              🏆
            </div>

            <h3>JavaScript Certificate</h3>

            <p>JavaScript Fundamentals</p>

            <button>View Certificate</button>
          </div>

        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <h2>Education</h2>

        <div className="education-card">
          <h3>College</h3>
          <p>Computer Science / IT</p>
          <p>2023 - Present</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2>Contact Me</h2>

        <p>
          Interested in working together? Feel free
          to contact me.
        </p>

        <button className="btn">
          Email Me
        </button>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Yogesh Verma. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;