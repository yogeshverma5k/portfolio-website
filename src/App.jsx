import React, { useState } from 'react';

function App() {
  const [projectCount, setProjectCount] = useState(2);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', backgroundColor: '#121212', color: '#fff', minHeight: '100vh' }}>
      <header style={{ borderBottom: '1px solid #333', paddingBottom: '10px' }}>
        <h1>My Pure React Portfolio</h1>
        <p>Built entirely from my Phone without VS Code!</p>
      </header>

      <main style={{ marginTop: '30px' }}>
        <h2>About Me</h2>
        <p>Hi, I am a passionate React developer managing code repositories straight from a mobile browser.</p>

        <h2 style={{ marginTop: '40px' }}>My Projects ({projectCount})</h2>
        <div style={{ display: 'grid', gap: '15px', marginTop: '10px' }}>
          <div style={{ background: '#222', padding: '15px', borderRadius: '8px' }}>
            <h3>Project 1: Mobile E-Commerce</h3>
            <p>A functional shopping cart app built purely in React.</p>
          </div>
          <div style={{ background: '#222', padding: '15px', borderRadius: '8px' }}>
            <h3>Project 2: Crypto Tracker</h3>
            <p>Real-time data visualization layout using React state.</p>
          </div>
        </div>

        <button 
          onClick={() => setProjectCount(projectCount + 1)}
          style={{ marginTop: '20px', padding: '10px 20px', background: '#00adb5', border: 'none', borderRadius: '5px', color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}>
          ➕ Add Simulated Project
        </button>
      </main>
    </div>
  );
}

export default App;
