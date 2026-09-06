import React, { useState } from 'react';

function App() {
  const [likes, setLikes] = useState(0);

  const myProjects = [
    { id: 1, title: "Mobile E-Commerce App", desc: "A sleek shopping platform coded completely on a mobile layout using pure React state." },
    { id: 2, title: "Crypto Live Tracker", desc: "Real-time cryptocurrency visualization UI leveraging React Hooks and modern flexbox grids." }
  ];

  // Pure Inline CSS - Koi CSS file import karne ki zarurat nahi hai
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '2rem 1.5rem',
    fontFamily: 'sans-serif',
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    minHeight: '100vh'
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '1.5rem',
    borderBottom: '1px solid #334155'
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: '#38bdf8'
  };

  const heroStyle = {
    textAlign: 'center',
    padding: '4rem 1rem'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '800',
    marginBottom: '1rem'
  };

  const highlightStyle = {
    color: '#38bdf8'
  };

  const subtitleStyle = {
    fontSize: '1.15rem',
    color: '#94a3b8',
    maxWidth: '600px',
    margin: '0 auto 2rem auto',
    lineHeight: '1.6'
  };

  const btnStyle = {
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    fontWeight: '700',
    padding: '0.75rem 2rem',
    border: 'none',
    borderRadius: '9999px',
    cursor: 'pointer'
  };

  const sectionTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    borderLeft: '4px solid #38bdf8',
    paddingLeft: '0.75rem'
  };

  const gridStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const cardStyle = {
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '12px',
    padding: '1.5rem'
  };

  const cardTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#f1f5f9',
    marginBottom: '0.5rem'
  };

  const cardDescStyle = {
    color: '#94a3b8',
    fontSize: '0.95rem'
  };

  return (
    <div style={containerStyle}>
      <header style={navbarStyle}>
        <div style={logoStyle}>Dev.Phone</div>
      </header>

      <main>
        <section style={heroStyle}>
          <h1 style={titleStyle}>
            Hi, I'm a <span style={highlightStyle}>React Developer</span>
          </h1>
          <p style={subtitleStyle}>
            I craft clean, fast, and modern web applications directly from my smartphone browser. No VS Code required.
          </p>
          <button style={btnStyle} onClick={() => setLikes(likes + 1)}>
            ✨ Support My Journey ({likes})
          </button>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2 style={sectionTitleStyle}>Featured Projects</h2>
          <div style={gridStyle}>
            {myProjects.map((project) => (
              <div key={project.id} style={cardStyle}>
                <h3 style={cardTitleStyle}>{project.title}</h3>
                <p style={cardDescStyle}>{project.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
