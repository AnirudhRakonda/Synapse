// SignUp.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
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
      <h1 className="text-3xl font-bold text-cta mb-6">Sign Up</h1>
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
          <label htmlFor="username" className="block text-textColor mb-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
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

        <div>
          <label htmlFor="confirmPassword" className="block text-textColor mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-primary text-textColor border border-active focus:outline-none focus:border-cta"
          />
        </div>

        <button type="submit" className="w-full p-2 bg-cta text-white rounded font-semibold hover:bg-active transition-colors">
          Sign Up
        </button>

        <p className="text-center text-sm text-textColor mt-4">
          Already have an account?{' '}
          <Link to="/signin" className="text-textColor hover:text-active transition-colors">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
