import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-textColor relative">
      <img src="/logo.png" alt="Synapse Logo" className="w-32 h-32 mb-8 absolute top-4 left-4" style={{ filter: 'invert(1)' }} />
      <header className="text-center mb-8">
        <h1 className="text-8xl font-bold text-cta mb-4">
          Welcome to <span className='text-white'>Synapse</span>
        </h1>
        <p className="text-lg text-white m-10 mx-40">
          Join our interactive platform for university students to learn, teach, and grow together. Whether you're mastering complex subjects or helping others, Synapse offers the tools to collaborate, support, and succeed.
        </p>
      </header>

      <div className="flex flex-row items-center justify-center space-x-4">
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
        <p>&copy; {new Date().getFullYear()} Synapse. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Landing
