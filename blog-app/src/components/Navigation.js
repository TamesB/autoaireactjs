import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';

const Nav = styled.nav`
  padding: 1rem;
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  &:hover {
    color: #007bff;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export default function Navigation() {
  const { user, logout, signInWithGoogle } = useAuth();

  const handleAuth = async () => {
    if (user) {
      try {
        await logout();
      } catch (error) {
        console.error('Error logging out:', error);
      }
    } else {
      try {
        await signInWithGoogle();
      } catch (error) {
        console.error('Error signing in:', error);
      }
    }
  };

  return (
    <Nav>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
        <StyledLink to="/subscriptions">Subscriptions</StyledLink>
      </NavLinks>
      <Button onClick={handleAuth}>
        {user ? 'Logout' : 'Login with Google'}
      </Button>
    </Nav>
  );
}