import React from 'react';
import styled from 'styled-components';
import { createSubscription } from '../services/stripe';

const PlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const PlanCard = styled.div`
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  text-align: center;
`;

const PlanTitle = styled.h3`
  color: #333;
  margin-bottom: 1rem;
`;

const PlanPrice = styled.div`
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 1rem;
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const PlanFeature = styled.li`
  margin: 0.5rem 0;
  color: #666;
`;

const SubscribeButton = styled.button`
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const plans = [
  {
    id: 'basic',
    title: 'Basic Plan',
    price: '$9.99/month',
    features: [
      'Access to all basic articles',
      'Comment on posts',
      'Monthly newsletter'
    ],
    priceId: 'price_basic'
  },
  {
    id: 'premium',
    title: 'Premium Plan',
    price: '$19.99/month',
    features: [
      'Access to all articles',
      'Exclusive content',
      'Priority support',
      'Monthly webinars'
    ],
    priceId: 'price_premium'
  }
];

export default function SubscriptionPlans() {
  const handleSubscribe = async (priceId) => {
    try {
      await createSubscription(priceId);
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  return (
    <PlansContainer>
      {plans.map((plan) => (
        <PlanCard key={plan.id}>
          <PlanTitle>{plan.title}</PlanTitle>
          <PlanPrice>{plan.price}</PlanPrice>
          <PlanFeatures>
            {plan.features.map((feature, index) => (
              <PlanFeature key={index}>{feature}</PlanFeature>
            ))}
          </PlanFeatures>
          <SubscribeButton onClick={() => handleSubscribe(plan.priceId)}>
            Subscribe
          </SubscribeButton>
        </PlanCard>
      ))}
    </PlansContainer>
  );
}