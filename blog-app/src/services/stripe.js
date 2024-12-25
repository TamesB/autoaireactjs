import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

export const createSubscription = async (priceId) => {
  try {
    const stripe = await stripePromise;
    
    // Call your backend to create a Checkout Session
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
      }),
    });

    const session = await response.json();

    // Redirect to Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};