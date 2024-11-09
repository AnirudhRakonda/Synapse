import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import VideoChat from './pages/VideoChat';
import Resources from './pages/Resources';
import Messages from './pages/Messages';
import Groups from './pages/Groups';
import Channels from './pages/Channels';
import Discussion from './pages/Discussions';
import Quiz from './pages/Quiz'; // Importing the Quiz component
import Feed from './pages/Feed';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Left Sidebar (Navbar) */}
        <aside className="w-1/5 bg-gray-800 text-white p-4">
          <Navbar />
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-6 bg-[#1E1E1E] overflow-y-auto">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/video-chat" element={<VideoChat />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/channels" element={<Channels />} />
            <Route path="/discussion" element={<Discussion />} />
            
            {/* Quiz Route */}
            <Route path="/quiz" element={<Quiz />} /> {/* Renders Quiz.jsx */}
            
            <Route path="/feed" element={<Feed />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
