import React from 'react';

function Donate() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
            DEAN: Defending Elders Against Neglect
          </a>
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
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#resources">Resources</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#facts">Facts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/donate">Donate</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Donation Section */}
      <section className="section-bg-light py-5 text-center">
        <div className="container">
          <div className="custom-card p-4 mb-4">
            <h1 className="display-4">Support the Victim Fund</h1>
            <p className="lead">
              Your donation to DEAN helps victims of financial elder abuse access legal representation. <strong>75% of every donation goes directly to our Victim Fund</strong>, providing critical support for seniors who lack the resources to fight exploitation.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8 mb-4">
              <div className="custom-card p-4">
                <h3>Why Your Donation Matters</h3>
                <p>
                  Financial elder abuse devastates countless seniors, like our founder’s father, Dock Dean, who lost hundreds of thousands due to exploitation. Many victims lack the financial resources to seek justice through legal representation. The DEAN Victim Fund bridges this gap by allocating <strong>75% of your donation</strong> to cover legal costs, helping victims recover stolen assets and hold abusers accountable.
                </p>
                <p>
                  The remaining 25% supports DEAN’s mission to educate families and advocate for stronger protections during the largest wealth transfer in history. Every dollar you contribute makes a difference in protecting our elders and ensuring no family endures the pain of financial abuse.
                </p>
                <h3>How It Works</h3>
                <p>
                  Your donation is processed securely through our trusted payment platform (coming soon). You’ll receive a confirmation email and a tax-deductible receipt. The Victim Fund is managed transparently, with regular updates on how funds are helping victims. Join us in making a tangible impact today.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="custom-card p-4">
                <h3 className="card-title">Donate Now</h3>
                <p className="card-text">
                  Help us protect elders like Dock Dean from financial abuse. Your contribution makes a difference.
                </p>
                <form>
                  <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Donation Amount</label>
                    <div className="input-group">
                      <span className="input-group-text">$</span>
                      <input
                        type="number"
                        className="form-control"
                        id="amount"
                        placeholder="Enter amount"
                        min="1"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">
                    Donate
                  </button>
                </form>
                <p className="mt-3">
                  <small>
                    Donations are processed securely. 75% supports legal representation for victims; 25% funds DEAN’s education and advocacy programs.
                  </small>
                </p>
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

export default Donate;