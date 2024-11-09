// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css'
import App from './App';
import Dashboard from './pages/Dashboard';
import VideoChat from './pages/VideoChat';
import Resources from './pages/Resources';
import Messages from './pages/Messages';
import Groups from './pages/Groups';
import Channels from './pages/Channels';
import Discussion from './pages/Discussions';
import Quiz from './pages/Quiz';
import Feed from './pages/Feed';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/video-chat" element={<VideoChat />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/channels" element={<Channels />} />
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </App>
  </Router>
);
