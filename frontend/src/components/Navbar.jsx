import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaTachometerAlt, FaSignOutAlt,FaVideo, FaBook, FaEnvelope, FaUsers, FaHashtag, FaComments, FaClipboardList, FaRss } from 'react-icons/fa'; // Import icons

function Navbar() {
  return (
    
    <div className="fixed top-0 left-0 h-full w-48 bg-navBar text-textColor flex flex-col justify-center items-center p-4">
       {/* <div className="mb-8 ">
        <img src="/logo.png" alt="Logo" className="h-12 w-auto 	fill-slate-200" />
      </div> */}
      <ul className="space-y-4">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `px-4 py-2 rounded flex items-center ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            <FaTachometerAlt className="mr-2" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/video-chat"
            className={({ isActive }) =>
              ` px-4 py-2 rounded flex items-center ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            <FaVideo className="mr-2" /> Video Chat
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              ` px-4 py-2 rounded flex items-center ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            <FaBook className="mr-2" /> Resources
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              ` px-4 py-2 rounded flex items-center ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            <FaEnvelope className="mr-2" /> Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/groups"
            className={({ isActive }) =>
              ` px-4 py-2 rounded flex items-center ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            <FaUsers className="mr-2" /> Groups
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/channels"
            className={({ isActive }) =>
              `px-4 py-2 rounded flex items-center ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            <FaHashtag className="mr-2" /> Channels
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/discussion"
            className={({ isActive }) =>
              ` px-4 py-2 rounded flex items-center ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            <FaComments className="mr-2" /> Discussion
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quiz"
            className={({ isActive }) =>
              ` px-4 py-2 rounded flex items-center ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            <FaClipboardList className="mr-2" /> Quiz
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/feed"
            className={({ isActive }) =>
              ` px-4 py-2 rounded flex items-center ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            <FaRss className="mr-2" /> Feed
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              ` px-4 py-2 rounded flex items-center ${isActive ? 'bg-active' : 'hover:bg-secondary'}`
            }
          >
            <FaSignOutAlt className="mr-2" /> Log Out
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
