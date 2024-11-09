// SignIn.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submit logic here
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-textColor">
      <h1 className="text-3xl font-bold text-cta mb-6">Sign In</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-secondary p-6 rounded-lg shadow-lg space-y-4">
        <div>
          <label htmlFor="email" className="block text-textColor mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-primary text-textColor border border-active focus:outline-none focus:border-cta"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-textColor mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-primary text-textColor border border-active focus:outline-none focus:border-cta"
          />
        </div>

        <button type="submit" className="w-full p-2 bg-cta text-white rounded font-semibold hover:bg-active transition-colors">
          Sign In
        </button>

        <p className="text-center text-sm text-textColor mt-4">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-cta hover:text-active transition-colors">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
