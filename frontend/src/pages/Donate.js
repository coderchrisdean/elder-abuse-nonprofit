import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

// Initialize Stripe with Publishable Key from .env
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function Donate() {
  const location = useLocation();
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle success/cancel feedback from Stripe redirect
  useEffect(() => {
    if (location.search.includes('success=true')) {
      setSuccessMessage('Thank you for your donation!');
      setAmount('');
      setName('');
      setEmail('');
    } else if (location.search.includes('cancel=true')) {
      setError('Donation was cancelled. Please try again.');
    }
  }, [location]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Convert amount to cents
      const amountInCents = Math.round(parseFloat(amount) * 100);
      if (isNaN(amountInCents) || amountInCents < 100) {
        throw new Error('Please enter a valid amount (minimum $1.00).');
      }

      // Request checkout session from backend
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/payment`,
        {
          amount: amountInCents,
          email,
        }
      );

      // Debug response
      console.log('Backend response:', response.data);

      // Ensure sessionId is provided
      if (!response.data.sessionId) {
        throw new Error('No session ID returned from backend');
      }

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: response.data.sessionId,
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (err) {
      console.error('Stripe error:', err);
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
                <NavLink className="nav-link active" to="/donate" end>Donate</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/#contact">Contact</NavLink>
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
                  Your donation is processed securely through Stripe. You’ll receive a confirmation email and a tax-deductible receipt. The Victim Fund is managed transparently, with regular updates on how funds are helping victims.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="custom-card p-4">
                <h3 className="card-title">Donate Now</h3>
                <p className="card-text">
                  Help us protect elders like Dock Dean from financial abuse. Your contribution makes a difference.
                </p>
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
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
                        step="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : 'Donate'}
                  </button>
                </form>
                <p className="mt-3">
                  <small>
                    Donations are processed securely via Stripe. 75% supports legal representation for victims; 25% funds DEAN’s education and advocacy programs.
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