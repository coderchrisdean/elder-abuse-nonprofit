import React from 'react';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            DEAN: Defending Elders Against Neglect
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/#about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/#resources">Resources</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/#facts">Facts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/donate">Donate</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/#contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-bg-light py-5 text-center">
        <div className="container">
          <div className="custom-card p-4">
            <h1 className="display-4">Protecting Our Elders</h1>
            <p className="lead">
              DEAN is dedicated to defending elders against financial abuse and neglect.
              Join us in safeguarding the wealth and dignity of our loved ones.
            </p>
            <div className="mt-3">
              <a href="#about" className="btn btn-primary btn-lg mx-2">
                Learn More
              </a>
              <NavLink to="/donate" className="btn btn-success btn-lg mx-2">
                Donate Now
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section-bg-white py-5">
        <div className="container">
          <h2 className="text-center mb-4">About Us</h2>
          <div className="custom-card p-4">
            <p>
              Founded by Christopher Dean and Keithra Dean-Snowden, DEAN: Defending Elders Against Neglect was inspired by the heartbreaking story of Dock Dean, Christopher’s father and Keithra’s grandfather. Dock, who has Alzheimer’s Disease, worked tirelessly his entire life, building wealth through real estate and property investments. Tragically, someone he trusted took advantage of his declining cognitive state, stealing hundreds of thousands of dollars in a devastating act of financial elder abuse. This could have been prevented.
            </p>
            <p>
              We are in the midst of the largest wealth transfer in history, with trillions of dollars passing from older generations to their heirs. Yet, most people remain unprotected from financial exploitation. Our mission is to educate families, advocate for stronger protections, and help safeguard assets so elderly loved ones are not targeted. DEAN is committed to ensuring no family endures the pain we experienced.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="section-bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Resources</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="custom-card h-100 p-3">
                <div className="card-body">
                  <h5 className="card-title">National Elder Abuse Hotline</h5>
                  <p className="card-text">
                    Call 1-800-677-1116 for immediate assistance and support.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="custom-card h-100 p-3">
                <div className="card-body">
                  <h5 className="card-title">Elder Justice Initiative</h5>
                  <p className="card-text">
                    Visit <a href="https://www.justice.gov/elderjustice">justice.gov</a> for legal resources and support.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="custom-card h-100 p-3">
                <div className="card-body">
                  <h5 className="card-title">Local Support</h5>
                  <p className="card-text">
                    Contact your local Area Agency on Aging for community resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section id="facts" className="section-bg-white py-5">
        <div className="container">
          <h2 className="text-center mb-4">Facts About Financial Elder Abuse in California</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="custom-card p-3">
                <div className="card-body">
                  <h5 className="card-title">Prevalence</h5>
                  <p className="card-text">
                    In California, approximately 1 in 10 elders experiences some form of abuse annually, with financial abuse being the most common, affecting over 200,000 seniors.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="custom-card p-3">
                <div className="card-body">
                  <h5 className="card-title">Economic Impact</h5>
                  <p className="card-text">
                    Financial elder abuse costs California seniors an estimated $2.9 billion annually, often targeting those with cognitive impairments like Alzheimer’s.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="custom-card p-3">
                <div className="card-body">
                  <h5 className="card-title">Legal Protections</h5>
                  <p className="card-text">
                    California’s Elder Abuse and Dependent Adult Civil Protection Act (Welfare & Institutions Code §15600) provides legal recourse, but only 1 in 14 cases is reported.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="custom-card p-3">
                <div className="card-body">
                  <h5 className="card-title">Vulnerability</h5>
                  <p className="card-text">
                    Seniors with assets in real estate or investments, like Dock Dean, are prime targets, especially during the ongoing wealth transfer of $68 trillion nationally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-white text-center py-3">
        <div className="container">
          <p>© 2025 DEAN: Defending Elders Against Neglect. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;