import React from 'react';
import styled from 'styled-components';
import SubscriptionPlans from '../components/SubscriptionPlans';
import { useAuth } from '../contexts/AuthContext';

const SubscriptionsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const Message = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

export default function Subscriptions() {
  const { user } = useAuth();

  if (!user) {
    return (
      <SubscriptionsContainer>
        <Message>
          Please log in to view subscription options.
        </Message>
      </SubscriptionsContainer>
    );
  }

  return (
    <SubscriptionsContainer>
      <Title>Choose Your Subscription Plan</Title>
      <SubscriptionPlans />
    </SubscriptionsContainer>
  );
}