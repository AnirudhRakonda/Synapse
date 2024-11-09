// App.jsx
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
import Quiz from './pages/Quiz';
import Feed from './pages/Feed';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Landing from './pages/Landing';

function App() {
  return (
    <>
    <Landing/>
    </>
  );
}

export default App;
