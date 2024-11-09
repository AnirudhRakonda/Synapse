// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css'
import App from './App';
import PrivateLayout from './PrivateLayout';
import Dashboard from './pages/Dashboard';
import VideoChat from './pages/VideoChat';
import StudyWithMe from './pages/StudyWithMe';
import Teaching from './pages/Teaching';
import Connect from './pages/Connect';
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>

    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      {/* Routes after login */}
      <Route
        path="/dashboard"
        element={
          <PrivateLayout>
            <Dashboard />
          </PrivateLayout>
        }
      />
       <Route
          path="/video-chat"
          element={
            <PrivateLayout>
              <VideoChat />
            </PrivateLayout>
          }
        >
          <Route path="connect" element={<Connect />} />
          <Route path="studywithme" element={<StudyWithMe />} />
          <Route path="teaching" element={<Teaching />} />
        </Route>
      <Route
        path="/resources"
        element={
          <PrivateLayout>
            <Resources />
          </PrivateLayout>
        }
      />
      <Route
        path="/messages"
        element={
          <PrivateLayout>
            <Messages />
          </PrivateLayout>
        }
      />
      <Route
        path="/groups"
        element={
          <PrivateLayout>
            <Groups />
          </PrivateLayout>
        }
      />
      <Route
        path="/channels"
        element={
          <PrivateLayout>
            <Channels />
          </PrivateLayout>
        }
      />
      <Route
        path="/discussion"
        element={
          <PrivateLayout>
            <Discussion />
          </PrivateLayout>
        }
      />
      <Route
        path="/quiz"
        element={
          <PrivateLayout>
            <Quiz />
          </PrivateLayout>
        }
      />
      <Route
        path="/feed"
        element={
          <PrivateLayout>
            <Feed />
          </PrivateLayout>
        }
      />
    </Routes>
  </Router>
);
