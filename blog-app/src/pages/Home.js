import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const HomeContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    background-color: #0056b3;
  }
`;

export default function Home() {
  const { user } = useAuth();

  return (
    <HomeContainer>
      <Hero>
        <Title>Welcome to Our Blog Platform</Title>
        <Subtitle>
          Discover amazing content and join our community of readers and writers.
        </Subtitle>
        {!user ? (
          <CTAButton to="/subscriptions">Get Started</CTAButton>
        ) : (
          <CTAButton to="/blog">View Latest Posts</CTAButton>
        )}
      </Hero>
    </HomeContainer>
  );
}