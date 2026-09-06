import React, { useState } from 'react';
import './App.css'; // <-- CSS files yahan link ho gayi

function App() {
  const [likes, setLikes] = useState(0);

  const myProjects = [
    { id: 1, title: "Mobile E-Commerce App", desc: "A sleek shopping platform coded completely on a mobile layout using pure React state." },
    { id: 2, title: "Crypto Live Tracker", desc: "Real-time cryptocurrency visualization UI leveraging React Hooks and modern flexbox grids." }
  ];

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Dev.Phone</div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="hero-section">
          <h1 className="hero-title">
            Hi, I'm a <span className="hero-highlight">React Developer</span>
          </h1>
          <p className="hero-subtitle">
            I craft clean, fast, and modern web applications directly from my smartphone browser. No VS Code required.
          </p>
          <button className="cta-btn" onClick={() => setLikes(likes + 1)}>
            ✨ Support My Coding Journey ({likes})
          </button>
        </section>

        {/* Projects Section */}
        <section style={{ marginTop: '2rem' }}>
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {myProjects.map((project) => (
              <div key={project.id} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
