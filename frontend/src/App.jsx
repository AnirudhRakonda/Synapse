// App.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-textColor">
      <header className="text-center mb-8">
        <h1 className="text-8xl font-bold text-cta mb-4">Welcome to SYNAPSE</h1>
        <p className="text-[18px] text-textColor max-w-lg mx-auto">
          Join our interactive platform for university students to learn, teach, and grow together. Whether you're
          mastering complex subjects or helping others, PeerLearn offers the tools to collaborate, support, and succeed.
        </p>
      </header>

      <div className="flex flex-col items-center justify-center space-y-4">
        <Link
          to="/signin"
          className="px-8 py-3 bg-cta text-white rounded-lg font-semibold text-lg hover:bg-active transition-colors"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="px-6 py-3 border border-cta text-cta rounded-lg font-semibold text-lg hover:bg-secondary hover:text-white transition-colors"
        >
          Sign Up
        </Link>
      </div>

      <footer className="absolute bottom-4 text-secondary text-sm text-center">
        <p>Empowering Students, One Lesson at a Time</p>
        <p>&copy; {new Date().getFullYear()} PeerLearn. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
