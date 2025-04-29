import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
  <h1>DEAN: Defending Elders Against Neglect</h1>
  <nav>
    <a href="#home">Home</a>
    <a href="#resources">Resources</a>
    <a href="#contact">Contact</a>
  </nav>
</header>
      <main>
        <section className="intro">
          <h2>Supporting Victims of Elder Abuse</h2>
          <p>
            Our non-profit is dedicated to helping victims of elder abuse find
            resources, support, and justice. Learn more about how you can help.
          </p>
        </section>
        <section className="resources">
          <h2>Resources</h2>
          <ul>
            <li>
              <strong>National Elder Abuse Hotline</strong>: Call 1-800-677-1116
              for immediate assistance.
            </li>
            <li>
              <strong>Elder Justice Initiative</strong>: Visit{' '}
              <a href="https://www.justice.gov/elderjustice">justice.gov</a> for
              legal resources.
            </li>
            <li>
              <strong>Local Support</strong>: Contact your local Area Agency on
              Aging.
            </li>
          </ul>
        </section>
      </main>
      <footer>
  <p>© 2025 DEAN: Defending Elders Against Neglect. All rights reserved.</p>
</footer>
    </div>
  );
}

export default App;