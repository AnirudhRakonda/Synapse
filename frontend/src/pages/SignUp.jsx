import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Check if the email already exists in localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (existingUsers.some(user => user.email === formData.email)) {
      setErrorMessage('User already exists');
      return;
    }

    // Add the new user to the users array
    existingUsers.push({
      email: formData.email,
      username: formData.username,
      password: formData.password,
    });

    // Store updated users list in localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Redirect to login page
    navigate('/signin');
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

        {/* Show error message if there is one */}
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

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
