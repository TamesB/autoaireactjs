import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Subscriptions from './pages/Subscriptions';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;