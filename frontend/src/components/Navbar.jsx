// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="fixed top-0 left-0 h-full w-48 bg-primary text-textColor flex flex-col justify-center items-center p-4">
      <ul className="space-y-4">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/video-chat"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            Video Chat
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/groups"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            Groups
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/channels"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            Channels
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/discussion"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            Discussion
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quiz"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            Quiz
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/feed"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            Feed
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
