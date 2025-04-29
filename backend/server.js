// Load environment variables from .env file
require('dotenv').config();

// Import required modules
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Initialize Express app
const app = express();

// Enable CORS for frontend communication (adjust the origin if needed)
app.use(cors({ origin: 'http://localhost:3000' }));

// Parse JSON request bodies
app.use(express.json());

// Root route for testing the server
app.get('/', (req, res) => {
  res.send('Backend server running');
});

// Stripe payment route to create a checkout session
app.post('/payment', async (req, res) => {
  try {
    const { amount, email } = req.body;

    // Validate required fields
    if (!amount || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Donation to DEAN Victim Fund',
            },
            unit_amount: amount, // Amount in cents (e.g., 5000 for $50.00)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/donate?success=true',
      cancel_url: 'http://localhost:3000/donate?cancel=true',
      customer_email: email,
    });

    // Return the checkout session URL to the frontend
    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating payment session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});