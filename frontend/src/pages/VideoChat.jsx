// VideoChat.jsx
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const VideoChat = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/video-chat';

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary text-textColor">
      {isRootPath ? (
        <nav className="flex flex-col items-center space-y-4">
          <Link
            to="connect"
            className="w-64 p-6 bg-secondary rounded-lg text-center text-cta font-semibold text-xl hover:bg-active hover:text-textColor transition duration-300"
          >
            Connect
          </Link>
          <Link
            to="studywithme"
            className="w-64 p-6 bg-secondary rounded-lg text-center text-cta font-semibold text-xl hover:bg-active hover:text-textColor transition duration-300"
          >
            Study With Me
          </Link>
          <Link
            to="teaching"
            className="w-64 p-6 bg-secondary rounded-lg text-center text-cta font-semibold text-xl hover:bg-active hover:text-textColor transition duration-300"
          >
            Teaching
          </Link>
        </nav>
      ) : (
        <div className="w-full max-w-4xl p-4">
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default VideoChat;
