// VideoChat.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const VideoChat = () => {
  return (
    <div className="flex">
      <nav className="w-1/4 bg-secondary p-4">
        <ul className="space-y-2">
          <li>
            <Link to="connect" className="text-cta hover:text-active">Connect</Link>
          </li>
          <li>
            <Link to="studywithme" className="text-cta hover:text-active">Study With Me</Link>
          </li>
          <li>
            <Link to="teaching" className="text-cta hover:text-active">Teaching</Link>
          </li>
        </ul>
      </nav>
      <div className="w-3/4 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default VideoChat;
