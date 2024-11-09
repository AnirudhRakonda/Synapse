// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Landing</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/video-chat">Video Chat</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/messages">Messages</Link></li>
        <li><Link to="/groups">Groups</Link></li>
        <li><Link to="/channels">Channels</Link></li>
        <li><Link to="/discussion">Discussion</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/feed">Feed</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
